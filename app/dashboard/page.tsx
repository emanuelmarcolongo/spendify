import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { DashboardComponent } from "./(dashboard-components)/Dashboard";
import DashboardNavbar from "./(dashboard-components)/Navbar";
import DashboardLoadingSkeleton from "./(dashboard-components)/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const data = await getTransactions();

  return (
    <>
      <DashboardNavbar />
      <div className="bg-primary1  lg:max-w-[1280px] mt-[100px] mx-auto">
        <DashboardComponent transactions={data} />
      </div>
    </>
  );
}
