import { getTransactions } from "@/lib/transactions";
import Transactions from "./components/transactions";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transações",
  };



export default async function TransactionPage() {

    const data = await getTransactions();   
  

    return(
        <div className="flex flex-col xl:max-w-[1300px] mx-auto">
            <Transactions transactions={data}/>
        </div>
    )
} 