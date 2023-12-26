import HomeContent from "./(home-components)/content";
import Hero from "./(home-components)/hero";
import HomeNavbar from "./(home-components)/navbar";
import type { Metadata } from "next";
import styles from "./styles";

export const metadata: Metadata = {
  title: "Spendify | Home",
};

export default function Home() {
  return (
    <main className="">
      {/* @ts-expect-error Async Server Component */}
      <HomeNavbar></HomeNavbar>
      <div className={`bg-primary1 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* <HomeContent></HomeContent> */}
    </main>
  );
}
