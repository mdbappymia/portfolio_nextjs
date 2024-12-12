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
  console.log(email, password);
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await UserModel.findOne({ email });
    // console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      NEXTAUTH_SECRET,
      {
        expiresIn: "1h", // Token expiry
      }
    );
    const cookieStore = await cookies();
    cookieStore.set("token", token);
    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
