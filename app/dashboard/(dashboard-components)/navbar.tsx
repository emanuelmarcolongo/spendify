import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import Link from "next/link";
import { options, whiteLogo } from "@/public/assets";
import { dashboardNavLinks } from "@/app/constants";
import styles from "@/app/styles";

export default function DashboardNavbar() {
  return (
    <nav
      className={`w-full py-3 ${styles.paddingX} bg-primary1 mx-auto drop-shadow-primary fixed top-0 z-10`}
    >
      <div className="mx-auto lg:max-w-[1280px]">
        <div
          className="max-w-full lg:w-[1280px] mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <a
            className="text-white font-extrabold text-xl flex items-center "
            href={"/"}
          >
            <Image width={140} alt="spendifyLogo" src={whiteLogo} />
          </a>

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
                {dashboardNavLinks.map((navlink, index) => (
                  <DropdownMenuItem key={navlink.id}>
                    <Link className="w-full" href={navlink.ref}>
                      {navlink.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:inline-flex items-center md:w-[500px] text-white font-bold  justify-between">
            {dashboardNavLinks.map((navlink, index) => (
              <a
                className="hover:text-tertiary"
                href={`${navlink.ref}`}
                key={navlink.id}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
