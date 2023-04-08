import Link from "next/link";
import { transactionData, sessionWithAuthOp } from "../../../lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { TransactionComponent } from "../transactions/components/transactions";

export async function UserInfo({ transactions }: transactionData) {
  const session: sessionWithAuthOp | null = await getServerSession(authOptions);

  const userBalance = calculateUserBalance({ transactions });

  if (!session || !session.user) {
    return <></>;
  }

  return (
    <>
      <div className="flex  space-y-2 flex-col justify-center items-center">
        <div>
          <p>Bem vindo, {session?.user.name}</p>
          <p>Seu saldo é:</p>
          <p>R$: {userBalance}</p>
        </div>

        <div className="max-h-[240px] mb-[150px] overflow-hidden">
            <div className="flex justify-around">
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
    </>
  );
}

function calculateUserBalance({ transactions }: transactionData) {
  let userBalance = 0;

  transactions?.forEach((transaction) => {
    const { type, value } = transaction;
    if (type === "entrada") {
      userBalance += value;
    } else if (type === "saida") {
      userBalance -= value;
    }
  });

  return (userBalance / 100).toFixed(2);
}
