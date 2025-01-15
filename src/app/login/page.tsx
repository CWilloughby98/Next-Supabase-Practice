"use client"
import { useState } from "react"
import { sendResetPassword } from "./actions"
import { redirect } from "next/navigation"

export default function Login() {

    const [resetPassword, setResetPassword] = useState<boolean>(false)

    return (
        <div className="container mx-auto w-[400px]">
            {!resetPassword && <form action="/auth/login" method="post">
                <div className="grid">
                    <label htmlFor="email">Email</label>
                    <input required className="text-black" type="text" name="email" />
                </div>
                <div className="grid">
                    <label htmlFor="password">Password</label>
                    <input required className="text-black" type="text" name="password" />
                </div>
                <div className="">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </div>
            </form>}
            {resetPassword && 
                <div className="grid">
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        await sendResetPassword(formData);
                        redirect("/")
                    }}>
                        <label htmlFor="reset">Email</label>
                        <input required className="text-black" type="text" name="reset" />
                        <div>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Reset my password</button>
                        </div>
                    </form>
                </div>}
            <button onClick={() => setResetPassword(!resetPassword)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                {resetPassword ? "Login" : "Reset Password"}
            </button>
        </div>
    )
}