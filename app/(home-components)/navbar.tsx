import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { navLinks } from "../constants";
import { whiteLogo } from "@/public/assets";

export default async function HomeNavbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full py-3 bg-primary1 mx-auto drop-shadow-2xl fixed top-0 z-10">
      <div className="mx-auto lg:max-w-[1280px] px-10">
        <div
          className="max-w-full lg:w-[1280px]mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <a
            className="text-white font-extrabold text-xl flex items-center "
            href={"/"}
          >
            <Image width={140} alt="spendifyLogo" src={whiteLogo} />
          </a>

          {/* drop down menu para medium devices */}
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
                {navLinks?.map((navLink) => (
                  <DropdownMenuItem key={navLink.id}>
                    <a className="w-full" href={`/${navLink.ref}`}>
                      {navLink.name}
                    </a>
                  </DropdownMenuItem>
                ))}

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

          {/* nav menu para large devices */}
          <div className="hidden md:inline-flex items-center md:w-[500px] text-white font-bold justify-between">
            {navLinks?.map((navLink, idx) => (
              <a
                className="hover:text-tertiary"
                href={`${navLink.ref}`}
                key={idx}
              >
                {navLink.name}
              </a>
            ))}
            {session?.user && (
              <a className="hover:text-tertiary" href={`/dashboard`}>
                Dashboard
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
