//src/middleware
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import path from "path";


//กำหนด middleware
export function middleware(request: NextRequest) {


    //const requestHeaders = new Headers(request.headers);
    //requestHeaders.set("x-custom-header", "Hello, Next.js!");
    //return NextResponse.next({
    //    request: {
     //       headers: requestHeaders,
     //   },
    //});


//กำหนด cookies
//  const response = NextResponse.next();
 // response.cookies.set("token2", "sdsdsd", {
   // path: "/",
   // maxAge: 15,
  //});  
  //console.log(request.cookies.get("token"));
  //return response;


//กำหนด redirect
  //  if (request.nextUrl.pathname.startsWith("/photos")) { //เมื่อเข้า path นี้
    //    return NextResponse.redirect( new URL("/login", request.url)); //จะถูกผลักไป path นี้แทน
    //}

    //if (request.nextUrl.pathname === "/") {
      //  return NextResponse.redirect( new URL("/about/a", request.url));
    //}
    
    //console.log(request.nextUrl)
    //return NextResponse.redirect( new URL("/login", request.url));
}

//เมื่อเข้า path /api/admin จะถูกกำหนดไปที่ login
export const config = {
    //matcher: ["/api/:path*" ],
    //matcher: ["/api/admin/:path*" , "/api/users/:path*"],

};