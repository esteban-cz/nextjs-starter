import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { routes } from "@/app/resources";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/login") {
    const token = request.cookies.get("auth-token")?.value;
    if (token) {
      try {
        await jwtVerify(
          token,
          new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {}
    }
  }

  const protectedRouteEntry = Object.entries(routes).find(
    ([routePath, config]) => {
      if (config.protected === false) return false;
      return pathname === routePath || pathname.startsWith(routePath + "/");
    }
  );

  if (!protectedRouteEntry) {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth-token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    const userRole = payload.role as string;
    const requiredRole =
      typeof protectedRouteEntry[1].protected === "object"
        ? protectedRouteEntry[1].protected.role
        : undefined;

    if (requiredRole === "admin" && userRole !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      requiredRole === "user" &&
      userRole !== "user" &&
      userRole !== "admin"
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
