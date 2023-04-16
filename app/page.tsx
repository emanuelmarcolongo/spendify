import { getServerSession } from "next-auth"
import HomeNavbar from "../components/home/navbar"
import Link from "next/link"
import { authOptions } from "./api/auth/[...nextauth]/route"



export default async function Home() {

  const session = await getServerSession(authOptions);
  

  return (
    <main className=''>
      
      <HomeNavbar></HomeNavbar>
      <Link href={'/dashboard'}>Clique aqui e vá pelo link</Link>
    
     
    </main>
  )
}
