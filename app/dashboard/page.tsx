import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { DashboardComponent } from "../../components/dashboard/dashboard";
import DashboardNavbar from "@/components/dashboard/Navbar";

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
