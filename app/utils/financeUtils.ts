import { transactionData } from "@/lib/types";

const calculateUserBalance = ({ transactions }: transactionData) => {
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

const getCategoryExpenses = ({ transactions = [] }: transactionData) => {
    
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
          categoryExpenses.set(category, categoryExpenses.get(category)! + value);
          totalValue += value;
        }
      }
    });
  
    for (const [category, value] of categoryExpenses) {
      categoryExpensesList.push({ category, value });
    }
  
    categoryExpensesList.sort((a, b) => b.value - a.value);

    return {categoryExpensesList, totalValue};
}
 


export {calculateUserBalance, getCategoryExpenses}