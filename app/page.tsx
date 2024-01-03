import Hero from "./(home-components)/Hero";
import HomeNavbar from "./(home-components)/Navbar";
import type { Metadata } from "next";
import styles from "./styles";
import Features from "./(home-components)/Features";

export const metadata: Metadata = {
  title: "Spendify | Home",
};

export default function Home() {
  return (
    <main className="">
      {/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <div
        id="inicio"
        className={`bg-primary1 ${styles.flexStart} min-h-screen`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Features />
    </main>
  );
}
