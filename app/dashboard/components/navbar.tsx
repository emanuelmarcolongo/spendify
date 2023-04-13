import { Button } from "../../../components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown";
import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav
      className="max-w-full mx-auto w-full flex justify-between items-center px-10 p-3 bg-slate-400
                        lg:max-w-[1280px]"
    >
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
            <a href={"/dashboard"}>Dashboard</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href={"/dashboard/transactions"}>Transações</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href={"/dashboard/transactions/add"}>Adicionar Transação</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <div className="flex w-[30%] items-center justify-between font-extrabold">
                <a href={'/dashboard'}>
                <Button className="font-extrabold">Home</Button>
                </a>
                <a href={'/dashboard/transactions'}>
                <Button className="font-extrabold">Transações</Button>
                </a>
                <a href={'/dashboard/transactions/add'}>
                <Button className="font-extrabold">Adicionar</Button>
                </a>
                
            </div> */}

      <div className=" flex items-center">
        <Link className="text-black font-extrabold text-xl flex items-center " href={"/"}>
          
          <Image width={40} height={40} alt="spendifyLogo" src="/logo.svg" />
          Spendify
        </Link>
      </div>
    </nav>
  );
}
