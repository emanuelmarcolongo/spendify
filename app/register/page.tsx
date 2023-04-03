import Link from "next/link"
import SignUpForm from "./components/form"




export default function SignUpPage() {


    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="shadow-xl px-8 pb-8 pt-12 space-y-12 bg-white rounded-xl">
            <h1 className="font-semibold text-2xl">Crie sua conta</h1>
            <SignUpForm/>
            <p className="text-center">Já possui cadastro? <Link className="text-indigo-500 hover:underline" href="/login">Login</Link></p>
        </div>
        
        </div>
    )
}