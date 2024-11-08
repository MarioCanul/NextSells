import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   const isAuthenticated = checkAuth(request);

   if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
   }
}

export const config = {
   matcher: "/", // Match all routes,
};

// This is a mock function. In a real application, you would implement proper authentication logic.
function checkAuth(request: NextRequest): boolean {
   // For demonstration purposes, we'll consider the user authenticated if there's an 'auth-token' in the cookies
   return request.cookies.has("auth-token");
}
