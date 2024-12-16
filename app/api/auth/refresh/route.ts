import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
// import { parseCookies } from "nookies";
import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "your_NEXTAUTH_SECRET";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const cookies1 = parseCookies({ req });
  const cookieStore = await cookies();
  const refreshToken: any = cookieStore.get("refresh_token")?.value;

  if (!refreshToken) {
    // return res.status(401).json({ error: "No refresh token found" });
    return NextResponse.json(
      { error: "No refresh token found" },
      { status: 401 }
    );
  }

  try {
    // Verify the refresh token
    const decoded: any = jwt.verify(refreshToken, NEXTAUTH_SECRET);
    let user: any = {};
    if (mongoose.models.User) {
      user = await UserModel.findOne({ email: decoded.email });
    }
    // console.log(decoded.password);
    // console.log(user);
    if (user.password && user.password != decoded.password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    //create new refresh token
    const newRefreshToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role,
      },
      NEXTAUTH_SECRET,
      {
        expiresIn: "7d", // Refresh token expiry (longer lifespan)
      }
    );

    // Store the refresh token in a secure, HttpOnly cookie
    const cookieStore = await cookies();

    cookieStore.set("refresh_token", newRefreshToken, {
      httpOnly: true, // Makes it accessible only to the server (prevents XSS)
      secure: process.env.NODE_ENV === "production", // Secure flag for production environments
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // Set to 7 days for example
    });

    // Create a new access token
    const accessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        password: user.password,
        role: decoded.role,
      },
      NEXTAUTH_SECRET,
      { expiresIn: "1h" } // New access token expires in 1 hour
    );
    cookieStore.set("access_token", accessToken);
    // console.log(accessToken);
    // Send the new access token
    return NextResponse.json({ accessToken, user: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid or expired refresh token" },
      { status: 401 }
    );
  }
}
