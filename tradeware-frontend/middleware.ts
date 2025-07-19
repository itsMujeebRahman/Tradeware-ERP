import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPath = ["/login", "/signUp"]

export const middleware = (req: NextRequest) =>{
   
    const path = req.nextUrl.pathname;

    if(publicPath.includes(path)){
        return NextResponse.next()
    }
   
    const token = req.cookies.get("token")?.value

    if(!token){
        return NextResponse.redirect(new URL ("/login", req.nextUrl.origin))
    }
}
export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};