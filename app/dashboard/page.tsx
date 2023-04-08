import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { ExpensesByCategory } from "./components/expensesByCategory";
import { UserInfo } from "./components/userInfo";

export const metadata: Metadata = {
    title: "Dashboard",
  };



export default async function DashboardPage() {
    const data = await getTransactions();       
    
    return (<div className="flex">
         {/* @ts-expect-error Async Server Component */}
        <UserInfo transactions={data} />
        <ExpensesByCategory transactions={data}/>
        </div>)
}


