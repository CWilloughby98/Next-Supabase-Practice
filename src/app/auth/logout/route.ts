import { supabase } from "@/app/lib/supabase"
import { redirect } from "next/navigation";

export const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error)

    redirect("/")
}