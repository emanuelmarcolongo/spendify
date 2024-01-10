"use client";

import { Dispatch, SetStateAction } from "react";
import AddTransactionForm from "../add/form";

type TransactionModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const AddTransactionModal = ({
  setShowModal,
}: TransactionModalProps) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="flex flex-col items-center justify-center text-white z-10 absolute top-0 left-0  h-screen w-screen mx-auto p-10  bg-primary1 bg-opacity-80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="shadow-xl bg-primary1 bg-opacity-100 p-16  mx-auto space-y-12 rounded-xl ring-1 ring-tertiary "
      >
        <div className="flex space-x-10">
          <h1 className="font-semibold text-2xl">Adicionar Transação</h1>
          <button
            className="font-bold text-xl"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>

        <AddTransactionForm />
      </div>
    </div>
  );
};
