import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "your_NEXTAUTH_SECRET";

export async function middleware(req: NextRequest) {
  const token =
    req.cookies.get("token")?.value ||
    req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  try {
    // Verify the JWT using the secret
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(NEXTAUTH_SECRET)
    );

    console.log("Token payload:", payload); // Optional: Log payload if needed

    // Allow access to the protected route
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Protect these routes
};
