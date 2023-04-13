import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeNavbar() {


    return (
      <main className='bg-white max-w-full drop-shadow-xl h-[55px] flex'>
      <nav className="max-w-full mx-auto w-full flex justify-between items-center bg-slate-400
                      lg:max-w-[1280px]">
          <div className="text-white font-extrabold">
              Spendify
          </div>

          <div className="flex w-[30%] items-center justify-around">
              <Link href={'/'}>
              <Button>Home</Button>
              </Link>
              <Link href={'/login'}>
              <Button>Login</Button>
              </Link>
              <Link href={'/register'}>
              <Button>Cadastro</Button>
              </Link>
          </div>
      </nav>
   
    
     
    </main>
    )
  }
  