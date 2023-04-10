import AddTransactionForm from "./form"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nova Transação",
  };



export default function AddTransactionPage() {
    return (

        <div className="flex flex-col xl:max-w-[1280px] mx-auto bg-white bg-opacity-50
        ">
            <div className="shadow-xl sm:bg-white bg-white px-8 pb-8 pt-12 mx-auto space-y-12 rounded-xl">

                <h1 className="font-semibold text-2xl">Adicionar Transação</h1>
                <AddTransactionForm/>
            </div>
        </div>
            
  
    )
}