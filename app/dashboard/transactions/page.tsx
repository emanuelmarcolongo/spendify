import { getTransactions } from "@/lib/transactions";
import Transactions from "../../../components/dashboard/transactions/transactions";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transações",
  };

export default async function TransactionPage() {

    const data = await getTransactions();    

    return(
        <div className="bg-[#E2E2E4] bg-opacity-30 py-10 lg:max-w-[1280px] mx-auto">
            <Transactions transactions={data}/>
        </div>
    )
} 