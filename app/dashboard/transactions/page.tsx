import { getTransactions } from "@/lib/transactions";
import Transactions from "./(transaction-components)/Transactions";

import type { Metadata } from "next";
import DashboardNavbar from "../(dashboard-components)/Navbar";
import TransactionsLoadingSkeleton from "./(transaction-components)/loading-skeleton";

export const metadata: Metadata = {
  title: "Transações",
};

export default async function TransactionPage() {
  const data = await getTransactions();

  return (
    <>
      <DashboardNavbar />
      <div className="bg-primary1 bg-opacity-30 py-10 lg:max-w-[1280px] mx-auto">
        <Transactions transactions={data} />
      </div>
    </>
  );
}
