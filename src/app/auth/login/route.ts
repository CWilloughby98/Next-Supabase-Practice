import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient} from "@supabase/auth-helpers-nextjs";

export async function POST(req: NextRequest) {
    const url = new URL(req.url)

    const formData = await req.formData()
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))

    const supabase = createRouteHandlerClient({
        cookies: () => cookies()
    })

    const {data, error} = await supabase.auth.signInWithPassword({ 
        email, 
        password
    })

    if (data) console.log(data)
    if (error) console.log(error)
    
        
    return NextResponse.redirect(url.origin, {
        status : 301
    })
}