import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeNavbar() {


    return (
      <main className='bg-white max-w-full drop-shadow-xl h-[55px] flex items-center'>
        <div className="max-w-full xl:w-[70%]  mx-auto flex justify-between bg-slate-400">
            <div>
                Spendify
            </div>

            <div className="flex xl:w-[30%] items-center justify-around">
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
  