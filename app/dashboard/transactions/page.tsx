import { getTransactions } from "@/lib/transactions";
import Transactions from "./components/transactions";



export default async function TransactionPage() {

    const data = await getTransactions();   
  

    return(
        <div className="flex flex-col xl:max-w-[1300px] mx-auto">
            <Transactions transactions={data}/>
        </div>
    )
} 