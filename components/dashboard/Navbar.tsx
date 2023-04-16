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

export default function DashboardNavbar() {
  return (
    <div className="w-full bg-primary mx-auto drop-shadow-2xl">
      <div className="mx-auto lg:max-w-[1280px] px-10">
        <nav
          className="max-w-full lg:w-[1280px]mx-auto w-full flex justify-between items-center py-2 
                 "
        >
          <div className="md:hidden ">
            <DropdownMenu >
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
                  <a className="w-full" href={"/dashboard"}>
                    Dashboard
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a className="w-full" href={"/dashboard/transactions"}>
                    Transações
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href={"/dashboard/transactions/add"}>
                    Adicionar Transação
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:inline-flex items-center md:w-[500px]  justify-between">
            <a href={"/dashboard"}>
              <Button className="">Dashboard</Button>
            </a>
            <a href={"/dashboard/transactions"}>
              <Button className="">Transações</Button>
            </a>
            <a href={"/dashboard/transactions/add"}>
              <Button className="">Adicionar</Button>
            </a>
          </div>

          <div className=" flex items-center">
            <Link
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
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
