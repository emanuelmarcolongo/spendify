import HomeNavbar from "../components/home/navbar"
import Link from "next/link"

export default function Home() {

  

  return (
    <main className=''>
      <HomeNavbar></HomeNavbar>
      <a href={'/dashboard'}>Clique aqui e vá pelo link</a>
    
     
    </main>
  )
}
