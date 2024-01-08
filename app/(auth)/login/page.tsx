import Link from "next/link";
import LoginForm from "./form";
import type { Metadata } from "next";
import HomeNavbar from "@/app/(home-components)/Navbar";
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

        <div className="shadow-xl bg-primary1 text-white ring-1 ring-tertiary  px-8 pb-8 pt-12 space-y-12 rounded-xl mx-auto">
          <h1 className="font-semibold text-2xl">Acesse sua conta</h1>
          <LoginForm />
          <p className="text-center  ">
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
