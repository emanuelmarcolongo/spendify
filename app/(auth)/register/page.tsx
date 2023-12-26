import Link from "next/link";
import SignUpForm from "./form";
import type { Metadata } from "next";
import HomeNavbar from "@/app/(home-components)/navbar";
import { RobotImage } from "@/app/(home-components)/hero";

export const metadata: Metadata = {
  title: "Registro",
};

export default function SignUpPage() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <div className="lg:max-w-[1280px] h-screen w-screen flex gap-8 items-center font-semibold justify-between mx-auto mt-10">
        <div className="sm:block hidden max-w-[480px]">
          <RobotImage />
        </div>
        <div className="shadow-xl bg-white  px-8 pb-8 pt-12 space-y-12 rounded-xl mx-auto">
          <h1 className="font-semibold text-2xl">Crie sua conta</h1>
          <SignUpForm />
          <p className="text-center">
            Já possui cadastro?{" "}
            <Link
              className="text-primary font-bold hover:underline"
              href="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
