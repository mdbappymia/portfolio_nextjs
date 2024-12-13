import { connectToDatabase } from "@/lib/connectToDB";
import UserModel from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "your_NEXTAUTH_SECRET";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  try {
    const cookieStore = await cookies();
    const token: any = cookieStore.get("access_token")?.value;

    const decoded: any = jwt.verify(token, NEXTAUTH_SECRET);
    const user: any = await UserModel.findOne({ email: decoded.email });

    // console.log(decoded.password);
    // console.log(user.password);
    if (user.password != decoded.password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user: user }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
