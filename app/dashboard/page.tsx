import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { DashboardComponent } from "./(dashboard-components)/Dashboard";
import DashboardNavbar from "./(dashboard-components)/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const data = await getTransactions();

  return (
    <>
      <DashboardComponent transactions={data} />
    </>
  );
}
