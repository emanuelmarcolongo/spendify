import HomeContent from "./(home-components)/content"
import HomeNavbar from "./(home-components)/navbar"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spendify | Home",
};

export default function Home() {


  return (
    <main className=''>
      {/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <HomeContent></HomeContent>  
     
    </main>
  )
}
