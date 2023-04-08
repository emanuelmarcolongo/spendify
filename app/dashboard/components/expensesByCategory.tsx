import { transactionData } from "../../../lib/types";

export function ExpensesByCategory({ transactions }: transactionData) {
  const categoryExpenses = new Map<string, number>();
  let totalValue = 0;

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

  return (
    <div className="flex flex-col ">
        <h1 className="text-xl font-semibold">
            Despesas por categoria: 
        </h1>
      <ul className="bg-blue-300">
        {[...categoryExpenses].map(([category, value]: [string, number]) => (
          <li key={category}>
            <p>
              {category.charAt(0).toUpperCase()}{category.slice(1)} : R$ {(value / 100).toFixed(2)}
            </p>
            {((value * 100) / totalValue).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
