import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default function DashboardNavbar() {


    return (
      <main className='bg-white max-w-full drop-shadow-xl h-[55px] flex '>
        <nav className="max-w-full mx-auto w-full flex justify-between items-center px-10 bg-slate-400
                        lg:max-w-[1280px]">
            

            <div className="flex w-[30%] items-center justify-between font-extrabold">
                <a href={'/dashboard'}>
                <Button className="font-extrabold">Home</Button>
                </a>
                <a href={'/dashboard/transactions'}>
                <Button className="font-extrabold">Transações</Button>
                </a>
                <a href={'/dashboard/transactions/add'}>
                <Button className="font-extrabold">Adicionar</Button>
                </a>
                
            </div>

            <div className="text-white font-extrabold">
                Spendify
            </div>
        </nav>
     
      
       
      </main>
    )
  }