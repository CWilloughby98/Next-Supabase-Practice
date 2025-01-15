"use client"
import { logout } from "./auth/logout/route";
import { redirect } from "next/navigation";
import { useSession } from "./context/SessionContext";
import "./globals.css"

export default function Home() {

  const { session } = useSession()
  
  console.log(session)

  return (
    <div className="">
      {session && "Logged In"}
      <div>
        <button onClick={logout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Log Out</button>
      </div>
      <div>
        <button onClick={() => {redirect("/login")}} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Log In</button>
      </div>
      <div>
        <button onClick={() => {redirect("/signup")}} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      </div>
    </div>
  );
}
