import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = request.cookies.get("TokenUser");
    if( pathname==="/userpanel" && !token){
      return NextResponse.redirect(new URL('/', request.url));
    }
    if( pathname==="/login" && token){
      return NextResponse.redirect(new URL('/', request.url));
    }

}

export const config = {
  matcher: ["/login","/userpanel"], 
};
 