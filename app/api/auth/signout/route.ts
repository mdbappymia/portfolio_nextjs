import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/lib/connectToDB";
import UserModel from "@/models/userModel";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  await connectToDatabase(); // Connect to MongoDB

  try {
    const cookieStore = await cookies();
    cookieStore.set("token", "");
    return NextResponse.json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
