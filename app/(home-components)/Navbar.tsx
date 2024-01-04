import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { navLinks } from "../constants";
import { options } from "@/public/assets";
import styles from "../styles";
import SpendifyLogo from "./Logo";

export default async function HomeNavbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav
      className={`w-full ${styles.paddingX} py-3 bg-primary1 mx-auto drop-shadow-primary fixed top-0 z-10`}
    >
      <div className="mx-auto lg:max-w-[1280px]  lg:px-0">
        <div
          className="max-w-full lg:w-[1280px] mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <SpendifyLogo />
          {/* drop down menu para medium devices */}
          <div className="md:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  alt={"opções de navegação"}
                  width={35}
                  height={35}
                  src={options}
                ></Image>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Ir para:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navLinks?.map((navlink) => (
                  <DropdownMenuItem key={navlink.id}>
                    <a className="w-full" href={`${navlink.ref}`}>
                      {navlink.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  {session?.user && (
                    <a className="w-full" href={`/dashboard`}>
                      Entrar
                    </a>
                  )}
                  {!session?.user && (
                    <a className="w-full" href={`/login`}>
                      Entrar
                    </a>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* nav menu para large devices */}
          <div className="hidden md:inline-flex items-center space-x-10 text-white font-bold justify-between">
            {navLinks?.map((navlink, idx) => (
              <a
                className="hover:text-tertiary"
                href={`${navlink.ref}`}
                key={idx}
              >
                {navlink.name}
              </a>
            ))}
            {session?.user && (
              <a className="hover:text-tertiary" href={`/dashboard`}>
                Entrar
              </a>
            )}
            {!session?.user && (
              <a className="hover:text-tertiary" href={`/login`}>
                Entrar
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
