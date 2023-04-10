import Link from "next/link";
import { transactionData } from "../../../lib/types";
import { TransactionComponent } from "../transactions/components/transactions";


export function UserInfo({ transactions }: transactionData) {
  const { userBalance, income, spent } = calculateUserBalance({ transactions });


  return (
    <div className="flex mx-auto space-y-2 gap-10 flex-col justify-center items-center lg:w-[50%]">
      <div className="rounded-xl w-full h-[150px] flex flex-col items-center justify-center p-10 space-y-2 bg-indigo-600 text-white  font-extrabold text-lg">
        <p>Saldo</p>
        <p>R$ {userBalance}</p>
      </div>

      <div className="flex items-center w-full justify-around h-[150px] gap-10">
        <div className="rounded-xl w-full flex flex-col h-[150px] p-10 space-y-2 bg-slate-800 text-white  font-extrabold text-lg">
          <p>Entrada</p>
          <p> R$ {income}</p>
        </div>

        <div className="rounded-xl w-full h-[150px] flex flex-col p-10 space-y-2 bg-slate-500 text-white  font-extrabold text-lg">
          <p>Saída</p>
          <p>R$ {spent}</p>
        </div>
      </div>

      <div className="max-h-[350px] w-full bg-indigo-200 space-y-1 p-10 rounded-xl">
        <div className="flex justify-between ">
          <p className="text-xl font-bold">Ultimas transações</p>
          <Link href={"/dashboard/transactions"}>
            <p className="text-indigo-600 text-xl font-bold hover:underline">
              Ver todas
            </p>
          </Link>
        </div>

        <div className="max-h-[250px] overflow-hidden space-y-1">
          {transactions &&
            transactions?.map((i) => {
              return (
                <TransactionComponent
                  key={i.id}
                  id={i.id}
                  userId={i.userId}
                  type={i.type}
                  value={i.value}
                  description={i.description}
                  category={i.category}
                  createdAt={i.createdAt}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

function calculateUserBalance({ transactions }: transactionData) {
  let userBalance = 0;
  let income = 0;
  let spent = 0;

  transactions?.forEach((transaction) => {
    const { type, value } = transaction;
    if (type === "entrada") {
      userBalance += value;
      income += value;
    } else if (type === "saida") {
      userBalance -= value;
      spent += value;
    }
  });

  return {
    userBalance: (userBalance / 100).toFixed(2),
    income: (income / 100).toFixed(2),
    spent: (spent / 100).toFixed(2),
  };
}
