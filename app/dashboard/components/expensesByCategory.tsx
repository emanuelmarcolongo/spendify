import { transactionData } from "../../../lib/types";
import { Progress } from "@/components/ui/progress"

export function ExpensesByCategory({ transactions }: transactionData) {
  const categoryExpenses = new Map<string, number>();
  let totalValue = 0;
  const categoryExpensesList = []

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
    categoryExpensesList.push({category, value})
  }

  categoryExpensesList.sort((a, b) => b.value - a.value)

  return (
    <div className="flex w-full flex-col bg-slate-500 rounded-xl gap-10 p-10 justify-center items-center lg:w-[50%]">
        <h1 className="text-xl text-white font-semibold">
            Despesas por categoria: 
        </h1>
      <ul className="w-full flex flex-col text-center">
        {categoryExpensesList.map((expense) => (
      
          <li className=" text-white font-semibold" key={expense.category}>
            <p >
              {expense.category.charAt(0).toUpperCase()}{expense.category.slice(1)} - R$ {(expense.value / 100).toFixed(2)}
            </p>
            <div className="flex gap-9 items-center font-bold">
              <Progress value= {Math.round((expense.value * 100) / totalValue)}/>
              {Math.round((expense.value * 100) / totalValue)}%
            </div>           
          </li>
        ))}
      </ul>
    </div>
  );
}
