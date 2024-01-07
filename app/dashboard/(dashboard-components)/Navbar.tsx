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
import { options } from "@/public/assets";
import { dashboardNavLinks } from "@/app/constants";
import styles from "@/app/styles";
import SpendifyLogo from "@/app/(home-components)/Logo";

const DashboardNavbar = () => {
  return (
    <nav
      className={`w-full py-3 ${styles.paddingX} bg-primary1 mx-auto drop-shadow-primary fixed top-0 z-10`}
    >
      <div className="mx-auto lg:max-w-[1280px]">
        <div
          className="max-w-full lg:w-[1280px] mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <SpendifyLogo />

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
};

export default DashboardNavbar;
