import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeNavbar() {


    return (
      <main className='bg-white max-w-full drop-shadow-xl h-[55px] flex'>
        <div className="max-w-full mx-auto w-full flex justify-between items-center bg-slate-400
                        xl:w-[1280px]  ">
            <div className="text-white font-extrabold">
                Spendify
            </div>

            <div className="flex w-[30%] items-center justify-around">
                <p>Home</p>
                <Link href={'/login'}>
                <Button>Login</Button>
                </Link>
                <Link href={'/register'}>
                <Button>Cadastro</Button>
                </Link>
            </div>
        </div>
     
      
       
      </main>
    )
  }
  