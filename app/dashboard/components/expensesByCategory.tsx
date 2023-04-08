import { transactionData } from "../../../lib/types";

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

  for (let [key, value] of categoryExpenses) { 
    categoryExpensesList.push({category: key, value: value})
  }

  categoryExpensesList.sort((a, b) => b.value - a.value)

  return (
    <div className="flex flex-col ">
        <h1 className="text-xl font-semibold">
            Despesas por categoria: 
        </h1>
      <ul className="bg-blue-300">
        {categoryExpensesList.map((expense) => (
      
          <li key={expense.category}>
            <p>
              {expense.category.charAt(0).toUpperCase()}{expense.category.slice(1)} : R$ {(expense.value / 100).toFixed(2)}
            </p>
            {((expense.value * 100) / totalValue).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
