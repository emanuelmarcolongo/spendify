import HomeContent from "@/components/home/Content"
import HomeNavbar from "../components/home/Navbar"
import Link from "next/link"




export default function Home() {


  return (
    <main className=''>
      {/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <HomeContent></HomeContent>  
     
    </main>
  )
}
