
import { redirect } from "next/navigation"
import { supabase } from "../lib/supabase"

export const sendResetPassword = async (formData: FormData) => {
    try {
        const email = formData.get("reset")?.toString()
        if (!email) throw new Error("Email is required")
        
        const { data: resetData, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset`
        })

        if (error) console.log(error)
    } catch (error: any) {
        throw error
    }
}

export const changePassword = async (pass: string) => {
    const { data: resetData, error } = await supabase.auth.updateUser({ password: pass })

    if (resetData) console.log(resetData)
    if (error) console.log(error)

    redirect("/login")
}