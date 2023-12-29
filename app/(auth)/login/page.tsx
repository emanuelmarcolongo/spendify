import Link from "next/link";
import LoginForm from "./form";
import type { Metadata } from "next";
import HomeNavbar from "@/app/(home-components)/navbar";
import RobotImage from "@/app/(home-components)/RobotImage";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <section>
      1{/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <div className="lg:max-w-[1280px] h-screen w-screen mx-auto flex font-semibold justify-between gap-8 items-center">
        <div className="sm:block hidden max-w-[480px]">
          <RobotImage />
        </div>

        <div className="shadow-xl bg-white  px-8 pb-8 pt-12 space-y-12 rounded-xl mx-auto">
          <h1 className="font-semibold text-black sm:text-black text-2xl">
            Acesse sua conta
          </h1>
          <LoginForm />
          <p className="text-center text-black sm:text-black">
            Não tem uma conta?{" "}
            <Link
              className="text-gradient font-bold hover:underline"
              href="/register"
            >
              {" "}
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
