import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import {redirect} from 'next/navigation'

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));

  // if(request.nextUrl.pathname === "/profile"){
  //     return NextResponse.redirect(new URL("/hello", request.nextUrl))
  // }

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");

  return response;
}
// export const config = {
//     matcher: "/profile",
// };
