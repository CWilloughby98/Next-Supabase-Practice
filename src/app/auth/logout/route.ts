import { supabase } from "@/app/lib/supabase"
import { NextResponse } from "next/server";

export async function POST() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
        return NextResponse.error();
    }

    return NextResponse.redirect("/");
}

export default POST;