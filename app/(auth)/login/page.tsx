import Link from "next/link"
import LoginForm from "./form"
import type { Metadata } from "next";
import HomeNavbar from "@/components/home/Navbar";

export const metadata: Metadata = {
    title: "Login",
  };



export default function LoginPage() {


    return (
        <>
        {/* @ts-expect-error Async Server Component */}
        <HomeNavbar></HomeNavbar>
        <div className="h-screen w-screen flex justify-center items-center">
            
            <div className="shadow-xl sm:bg-white px-8 pb-8 pt-12 space-y-12 rounded-xl">
                <h1 className="font-semibold text-2xl">Acesse sua conta</h1>
                <LoginForm/>
                <p className="text-center">Não tem uma conta?  <Link className="text-primary font-bold hover:underline" href="/register"> Registre-se</Link></p>
            </div>
        </div>
        </>
        
    )
}