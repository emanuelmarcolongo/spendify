import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { DashboardComponent } from "./(dashboard-components)/dashboard";
import DashboardNavbar from "./(dashboard-components)/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const data = await getTransactions();

  return (
    <>
      <DashboardNavbar />
      <div className="bg-[#E2E2E4] bg-opacity-30 lg:max-w-[1280px] mx-auto">
        <DashboardComponent transactions={data} />
      </div>
    </>
  );
}
