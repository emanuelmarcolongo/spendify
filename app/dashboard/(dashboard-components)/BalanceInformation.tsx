"use client";

import Link from "next/link";
import { Transaction, transactionData } from "../../../lib/types";
import { TransactionComponent } from "../transactions/(transaction-components)/TransactionComponent";
import ActionButton from "@/app/(home-components)/ActionButton";
import { calculateUserBalance } from "@/app/utils/financeUtils";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

type BalanceInformationProps = {
  transactions: Transaction[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const BalanceInformation = ({
  transactions,
  setShowModal,
}: {
  transactions: Transaction[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { userBalance, income, spent } = calculateUserBalance({ transactions });

  return (
    <article>
      <div className="flex font-bold text-sm md:text-base">
        <div className="flex w-full md:space-x-16 space-x-6 ">
          <div className="text-white">
            <p>Saldo:</p>
            <p>R$ {userBalance}</p>
          </div>

          <div className="text-white">
            <p>Entradas:</p>
            <p className="text-positiveBalance"> R$ {income}</p>
          </div>

          <div className="text-white">
            <p>Saída:</p>
            <p className="text-negativeBalance">R$ {spent}</p>
          </div>
        </div>
        <Link
          href={"/dashboard/transactions"}
          className="text-white hover:underline"
        >
          Ver Extrato
        </Link>
      </div>
      <Button onClick={() => setShowModal(true)} className="mt-10">
        Adicionar Transação
      </Button>
      <LatestTransactions transactions={transactions} />
    </article>
  );
};

const LatestTransactions = ({ transactions }: transactionData) => {
  return (
    <article>
      <div className="flex justify-between w-full mt-16 text-white font-bold mb-8">
        <p className="">Ultimas transações:</p>
        <Link href={"/dashboard/transactions"}>
          <p className=" text-white hover:underline">Ver todas</p>
        </Link>
      </div>

      <div className="max-h-[300px] border-[1px] border-tertiary rounded-xl overflow-hidden space-y-1">
        {transactions &&
          transactions?.map((i) => {
            return (
              <div key={i.id}>
                <TransactionComponent
                  id={i.id}
                  userId={i.userId}
                  type={i.type}
                  value={i.value}
                  description={i.description}
                  category={i.category}
                  createdAt={i.createdAt}
                />
                <div className="h-[1px] bg-tertiary bg-opacity-20 w-4/5 mx-auto"></div>
              </div>
            );
          })}
      </div>
    </article>
  );
};

export { BalanceInformation };
