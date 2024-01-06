import { getTransactions } from "@/lib/transactions";
import Transactions from "../transactions/(transaction-components)/transactions";

import type { Metadata } from "next";
import DashboardNavbar from "../(dashboard-components)/Navbar";

export const metadata: Metadata = {
  title: "Transações",
};

export default async function TransactionPage() {
  const data = await getTransactions();

  return (
    <>
      <DashboardNavbar />
      <div className="bg-[#E2E2E4] bg-opacity-30 py-10 lg:max-w-[1280px] mx-auto">
        <Transactions transactions={data} />
      </div>
    </>
  );
}
