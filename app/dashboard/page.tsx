import { getTransactions } from "@/lib/transactions";
import type { Metadata } from "next";
import { ExpensesByCategory } from "./components/expensesByCategory";
import { UserInfo } from "./components/userInfo";

export const metadata: Metadata = {
    title: "Dashboard",
  };



export default async function DashboardPage() {
    const data = await getTransactions();       
    
    return (
    
        <div className="w-full mx-auto justify-between items-start  space-x-0 space-y-14 gap-15 p-10  bg-white bg-opacity-50 rounded-xl
         lg:max-w-[1280px] lg:flex lg:space-y-0 lg:space-x-10  ">
        <UserInfo transactions={data} />
        <ExpensesByCategory transactions={data}/>
        </div>)
}


