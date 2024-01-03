import HomeContent from "./(home-components)/content";
import Hero from "./(home-components)/hero";
import HomeNavbar from "./(home-components)/navbar";
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
      <div className={`bg-primary1 ${styles.flexStart} min-h-screen`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Features />
      {/* <HomeContent></HomeContent> */}
    </main>
  );
}
