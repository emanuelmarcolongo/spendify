import DashboardNavbar from "../../(dashboard-components)/Navbar";
import AddTransactionForm from "./form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Transação",
};

export default function AddTransactionPage() {
  return (
    <>
      <DashboardNavbar />
      <div className="flex flex-col space-y-10 my-10 text-white  rounded-xl xl:max-w-[1280px] h-[90vh] mx-auto p-10 ">
        <div className="shadow-xl bg-primary1 px-8 pb-8 pt-12 mx-auto space-y-12 rounded-xl ring-1 ring-tertiary mt-24">
          <h1 className="font-semibold text-2xl">Adicionar Transação</h1>
          <AddTransactionForm />
        </div>
      </div>
    </>
  );
}
