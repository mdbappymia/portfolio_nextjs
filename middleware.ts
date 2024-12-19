import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "your_NEXTAUTH_SECRET";

export async function middleware(req: NextRequest) {
  // await mongoose.connect("mongodb://localhost:27017/mdbappymia");

  const accessToken = req.cookies.get("access_token")?.value;

  const refreshToken = req.cookies.get("refresh_token")?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  try {
    // Verify the JWT using the secret
    const { payload } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(NEXTAUTH_SECRET)
    );
    // const user: any = await UserModel.findOne({ email: payload.email });
    // Allow access to the protected route
    if (!payload.email) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
    return NextResponse.next();
  } catch (error) {
    try {
      if (refreshToken) {
        const { payload } = await jwtVerify(
          refreshToken,
          new TextEncoder().encode(NEXTAUTH_SECRET)
        );
        // const user: any = await UserModel.findOne({ email: payload.email });
        if (!payload.email) {
          return NextResponse.redirect(new URL("/signin", req.url));
        }
        return NextResponse.next();
      }
    } catch (error) {
      // console.error("Invalid token:", error);
    }
    // console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Protect these routes
};
