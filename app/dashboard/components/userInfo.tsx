import Link from "next/link";
import { transactionData, sessionWithAuthOp } from "../../../lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { TransactionComponent } from "../transactions/components/transactions";

export async function UserInfo({ transactions }: transactionData) {
  const session: sessionWithAuthOp | null = await getServerSession(authOptions);

  const {userBalance, income, spent} = calculateUserBalance({ transactions });

  if (!session || !session.user) {
    return <></>;
  }

  return (
      <div className="flex mx-auto space-y-2 gap-10 flex-col justify-center items-center lg:w-[50%]">
        <div className="bg-white w-full flex flex-col items-center justify-around h-[150px] rounded-xl">
          <p>Bem vindo, {session?.user.name}</p>
          <div>
            <p>Saldo</p>
            <p>R$: {userBalance}</p>
          </div>
          
        </div>

        <div className="flex items-center w-full justify-around h-[150px] gap-10">

          <div className="rounded-xl w-full flex flex-col h-[150px] p-10 bg-slate-800 text-white ">
            <p>Entradas:</p>
            <p>R$: {income}</p>
          </div>

          <div className="rounded-xl w-full h-[150px] flex flex-col p-10 bg-slate-800 text-white ">
            <p>Saídas:</p>
            <p>R$: {spent}</p>
          </div>
          
        </div>

        <div className="max-h-[320px] overflow-hidden w-full bg-white p-10 rounded-xl">
            <div className="flex justify-between ">
                <p>Ultimas transações</p>
                <Link href={"/dashboard/transactions"}><p className="text-indigo-500 hover:underline">Ver todas</p></Link>
            </div>
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

  return {userBalance: (userBalance / 100).toFixed(2), income: (income / 100).toFixed(2), spent: (spent / 100).toFixed(2) };
}
