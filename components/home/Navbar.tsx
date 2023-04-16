import { Button } from "../ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomeNavbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full bg-primary mx-auto drop-shadow-2xl">
      <div className="mx-auto lg:max-w-[1280px] px-10">
        <nav
          className="max-w-full lg:w-[1280px]mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <div className="md:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  alt={"opções de navegação"}
                  width={50}
                  height={50}
                  src={"/options.svg"}
                ></Image>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Navegar para:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a className="w-full" href={"/"}>
                    Home
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a className="w-full" href={"/register"}>
                    Cadastro
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href={"/login"}>
                    Login
                  </Link>
                </DropdownMenuItem>

                {session?.user && (
                  <DropdownMenuItem>
                    <Link className="w-full" href={"/dashboard"}>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:inline-flex items-center md:w-[500px]  justify-between">
            {!session?.user && (
              <>
                <a href={"/"}>
                  <Button className="hover:bg-opacity-40">Home</Button>
                </a>
                <a href={"/register"}>
                  <Button className="hover:bg-opacity-40">Cadastro</Button>
                </a>
                <a href={"/login"}>
                  <Button className="hover:bg-opacity-40">Login</Button>
                </a>
              </>
            )}

            {session?.user && (
              <>
                <a href={"/"}>
                  <Button className="hover:bg-opacity-40">Home</Button>
                </a>
                <a href={"/dashboard"}>
                  <Button className="hover:bg-opacity-40">Dashboard</Button>
                </a>
                <a href={"/register"}>
                  <Button className="hover:bg-opacity-40">Cadastro</Button>
                </a>
                <a href={"/login"}>
                  <Button className="hover:bg-opacity-40">Login</Button>
                </a>
              </>
            )}
          </div>

          <div className=" flex items-center">
            <a
              className="text-black font-extrabold text-xl flex items-center "
              href={"/"}
            >
              <Image
                width={40}
                height={40}
                alt="spendifyLogo"
                src="/logo.svg"
              />
              Spendify
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
