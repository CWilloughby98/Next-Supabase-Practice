export default function SignUp() {

    return (
        <div className="container mx-auto w-[400px]">
            <form action="/auth/signup" method="post">
                <div className="grid">
                    <label htmlFor="email">Email</label>
                    <input className="text-black" type="text" name="email" />
                </div>
                <div className="grid">
                    <label htmlFor="password">Password</label>
                    <input className="text-black" type="text" name="password" />
                </div>
                <div className="">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
                </div>
            </form>
        </div>
    )
}