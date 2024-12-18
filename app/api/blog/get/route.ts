import { connectToDatabase } from "@/lib/connectToDB";
import Blog from "@/models/blogModel";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  await connectToDatabase();

  try {
    // Extract query parameters
    const { searchParams } = new URL(req.url as string);
    const category = searchParams.get("category");
    const page: any = searchParams.get("page");
    // console.log(Math.abs(page));

    // Fetch blogs, optionally filtered by category
    const filter =
      category && category != "All" ? { blogCategory: category } : {};
    const blogs = await Blog.find(filter)
      .limit(6 * (Math.abs(page) || 1))
      .populate("author", "name email");
    const categories = await Blog.distinct("blogCategory");
    return NextResponse.json({ categories, blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
