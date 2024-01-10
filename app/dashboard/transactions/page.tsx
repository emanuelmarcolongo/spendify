import { getTransactions } from "@/lib/transactions";
import Transactions from "./(transaction-components)/Transactions";

import type { Metadata } from "next";
import DashboardNavbar from "../(dashboard-components)/Navbar";

export const metadata: Metadata = {
  title: "Transações",
};

export default async function TransactionPage() {
  const data = await getTransactions();

  return <Transactions transactions={data} />;
}
