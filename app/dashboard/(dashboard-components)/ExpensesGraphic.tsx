import { getCategoryExpenses } from "@/app/utils/financeUtils";
import { transactionData } from "../../../lib/types";
import { Progress } from "@/components/ui/progress";

const ExpensesGraphic = ({ transactions }: transactionData) => {
  const { categoryExpensesList, totalValue } = getCategoryExpenses({
    transactions,
  });

  return (
    <article>
      <div className="flex w-full mx-auto flex-col text-white rounded-xl text-start gap-10 justify-center mt-40 items-center mb-64 ">
        <h1 className=" flex-start font-bold self-start">
          Gastos por Categorias:
        </h1>
        <ul className="w-full flex flex-col text-start  ring-1 ring-tertiary rounded-xl ">
          {categoryExpensesList?.map((expense, idx) => (
            <li
              className=" font-semibold text-white space-y-2  p-4 "
              key={`${expense.category + idx}`}
            >
              <div className="flex justify-between px-5">
                <p className="space-x-5 w-40">
                  {expense.category.charAt(0).toUpperCase()}
                  {expense.category.slice(1)}
                </p>
                <p className="text-tertiary">
                  {Math.round((expense.value * 100) / totalValue)}%
                </p>
                <p className="ml-6 text-tertiary">
                  R$ {(expense.value / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-9 px-5  items-center font-bold">
                <Progress
                  value={Math.round((expense.value * 100) / totalValue)}
                />
              </div>
              <div className="h-[1px] bg-tertiary bg-opacity-20 w-4/5 mx-auto"></div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export { ExpensesGraphic };
