import AddTransactionForm from "./form"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nova Transação",
  };



export default function AddTransactionPage() {
    return (

        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl sm:bg-white px-8 pb-8 pt-12 space-y-12 rounded-xl">
                <h1 className="font-semibold text-2xl">Adicionar Transação</h1>
                <AddTransactionForm/>
            </div>
        </div>
            
  
    )
}