import Link from "next/link"
import SignUpForm from "./form"
import type { Metadata } from "next";
import HomeNavbar from "@/components/home/Navbar";

export const metadata: Metadata = {
    title: "Registro",
  };



export default function SignUpPage() {


    return (
        <>
           {/* @ts-expect-error Async Server Component */}
        <HomeNavbar></HomeNavbar>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
         
            
            <div className="shadow-xl sm:bg-white px-8 pb-8 pt-12 space-y-12 rounded-xl">
                <h1 className="font-semibold text-2xl">Crie sua conta</h1>
                <SignUpForm/>
                <p className="text-center">Já possui cadastro? <Link className="text-primary font-bold hover:underline" href="/login">Login</Link></p>
            </div>
        </div>
        </>
    )
}