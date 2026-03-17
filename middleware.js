import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  console.log("Middleware Pathname:", pathname);

  if (pathname === "/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
