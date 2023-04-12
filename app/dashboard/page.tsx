import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { DashboardComponent } from "./components/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const data = await getTransactions();

  return (
    <div className="bg-white bg-opacity-50 lg:max-w-[1280px] mx-auto">
      <DashboardComponent transactions={data} />
    </div>
      
  );
}
