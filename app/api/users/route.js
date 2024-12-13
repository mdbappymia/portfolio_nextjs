// app/api/users/route.js
import connectToDatabase from "../../../lib/connectToDB.ts";
import User from "../../../models/userModel.ts";

export async function GET(request) {
  await connectToDatabase();
  try {
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch users", { status: 500 });
  }
}

export async function POST(request) {
  const { name, email } = await request.json();
  await connectToDatabase();
  try {
    const user = new User({ name, email });
    await user.save();
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response("Failed to create user", { status: 400 });
  }
}
