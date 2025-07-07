import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, {JwtPayload} from 'jsonwebtoken'

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

try{
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET!;
    const tokenDecoded = jwt.verify(token, secret ) as JwtPayload
    return NextResponse.next()
}catch(err){
    console.log("verification failed", err)
    return NextResponse.redirect(new URL("/login",req.nextUrl.origin ))
}
}
export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};