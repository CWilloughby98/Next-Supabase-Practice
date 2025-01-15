import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req: NextRequest) {
    const url = new URL(req.url);

    const formData = await req.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    // Pass cookies explicitly????
    const supabase = createRouteHandlerClient({
        cookies: () => cookies()
    });

    try {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${url.origin}/auth/callback` },
        });

        if (error) {
            console.error(error);
            return NextResponse.redirect(`${url.origin}/auth/signup?error=${encodeURIComponent(error.message)}`, {
                status: 301,
            });
        }

        return NextResponse.redirect(url.origin, {
            status: 301,
        });
    } catch (error: any) {
        console.error(error); // Log the error to the console
        return NextResponse.redirect(`${url.origin}/auth/signup?error=${encodeURIComponent(error.message)}`, {
            status: 301,
        });
    }
}
