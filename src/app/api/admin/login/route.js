import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

/* hashed password (example) */
const HASHED_PASSWORD = process.env.ADMIN_PASSWORD_HASH;

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (email !== ADMIN_EMAIL) {
      return NextResponse.json({ message: "Invalid Email" }, { status: 401 });
    }

    const validPassword = await bcrypt.compare(password, HASHED_PASSWORD);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 401 },
      );
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
