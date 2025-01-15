import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({req, res})

    const {  
        error 
    } = await supabase.auth.getSession()

    if(error) {
        console.log(error)
    }

    // if (!session) {
    //     return NextResponse.rewrite(new URL("/login", req.url))
    // }

    //HERE ALSO WOULD GO A SESSION RESET FUNCTION?

    return res
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)' // Match all routes except API and static files
    ]
}