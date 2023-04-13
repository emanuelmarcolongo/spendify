import { transactionData } from "../../../lib/types";
import { Progress } from "@/components/ui/progress";

export function ExpensesByCategory({ transactions }: transactionData) {
  const categoryExpenses = new Map<string, number>();
  let totalValue = 0;
  const categoryExpensesList = [];

  transactions?.forEach((transaction) => {
    const { category, value, type } = transaction;
    if (type === "saida") {
      if (!categoryExpenses.has(category)) {
        categoryExpenses.set(category, value);
        totalValue += value;
      } else if (categoryExpenses.has(category)) {
        categoryExpenses.set(category, categoryExpenses.get(category) + value);
        totalValue += value;
      }
    }
  });

  for (const [category, value] of categoryExpenses) {
    categoryExpensesList.push({ category, value });
  }

  categoryExpensesList.sort((a, b) => b.value - a.value);

  return (
    <>
      <div className="flex w-full mx-auto flex-col text-black rounded-xl text-start gap-10 justify-center items-center lg:w-[50%]">
        <h1 className="text-xl text-black flex-start font-bold">Categorias</h1>
        <ul className="w-full flex flex-col space-y-2 text-start">
          {categoryExpensesList.map((expense) => (
            <li
              className=" font-semibold text-white bg-[#252525] p-2 space-y-2 rounded-xl"
              key={expense.category}
            >
              <div className="flex justify-between px-5">
                <p className="space-x-5 w-40">
                  {expense.category.charAt(0).toUpperCase()}
                  {expense.category.slice(1)}
                </p>
                <p>{Math.round((expense.value * 100) / totalValue)}%</p>
                <p className="ml-6">
                  
                  R$ {(expense.value / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-9 px-5 items-center font-bold">
                <Progress
                  value={Math.round((expense.value * 100) / totalValue)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
