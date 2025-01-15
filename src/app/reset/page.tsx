"use client"
import { useState } from "react"
import { changePassword } from "../login/actions"

export default function Reset() {
    const [data, setData] = useState<{
        password: string, 
        confirmPassword: string
    }>({
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const verifyPasswords = () => {
        const { password, confirmPassword } = data
        if (password !== confirmPassword) {
            return alert("Your passwords do not match")
        }

        changePassword(data.password)
    }

    return (
        <div className="container mx-auto w-[400px]">
            <form action={verifyPasswords}>
                <div className="grid">
                    <label htmlFor="password">New Password</label>
                    <input required className="text-black" type="password" name="password" 
                    value={data.password} onChange={handleChange} />
                </div>
                <div className="grid">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input required className="text-black" type="password" name="confirmPassword" 
                    value={data.confirmPassword} onChange={handleChange} />
                </div>
                <div className="">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Set New Password</button>
                </div>
            </form>
        </div>
    )
}