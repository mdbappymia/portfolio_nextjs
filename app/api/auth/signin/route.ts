import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/lib/connectToDB";
import UserModel from "@/models/userModel";
import { cookies } from "next/headers";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "your_NEXTAUTH_SECRET"; // Replace with a secure secret in production

export async function POST(req: Request) {
  await connectToDatabase(); // Connect to MongoDB

  const { email, password } = await req.json();

  // Check if email and password are provided
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await UserModel.findOne({ email });
    // If no user is found
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate an access token (JWT)
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role,
      },
      NEXTAUTH_SECRET,
      {
        expiresIn: "1h", // Access token expiry
      }
    );

    // Generate a refresh token
    const refreshToken = jwt.sign(
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
    cookieStore.set("refresh_token", refreshToken, {
      httpOnly: true, // Makes it accessible only to the server (prevents XSS)
      secure: process.env.NODE_ENV === "production", // Secure flag for production environments
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // Set to 7 days for example
    });

    cookieStore.set("access_token", token);
    // Send access token as response
    return NextResponse.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
