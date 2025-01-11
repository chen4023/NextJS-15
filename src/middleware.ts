import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중 ✅");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("🚨미들웨어가 경로를 리다이렉팅함");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정한 경로에서만 실행되도록
// 1️⃣. (포함) /products/:path* path가 있거나(많거나) 없거나 둘 다 가능 : products 기본 페이지에서도 실행
// 2️⃣. (미포함) /products/:path+ path가 하나 또는 많거나 : 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행
export const config = {
  matcher: ["/products/:path+"],
};
