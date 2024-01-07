import weekofYear from "dayjs/plugin/weekOfYear";
import dayjs from "dayjs";
import { Transaction } from "@/lib/types";



const useTimeFilter = ({ transactions, time }: { transactions: Transaction[] | undefined; time: string }) => {
    var weekOfYear = require("dayjs/plugin/weekOfYear");
    dayjs.extend(weekOfYear);

    if (transactions === undefined || transactions.length === 0) {
      return [];
    }
  
    let filteredTransactions;
  
    switch (time) {
      case "month":
        filteredTransactions = [...transactions].filter(
          (i) => dayjs(i.createdAt).month() === dayjs().month()
        );
        break;
  
      case "week":
        filteredTransactions = [...transactions].filter(
          (i) => dayjs(i.createdAt).week() === dayjs().week()
        );
        break;
  
      case "3months":
        filteredTransactions = [...transactions].filter(
          (i) => dayjs(i.createdAt).month() >= dayjs().month() - 2
        );
        break;
  
      case "year":
        filteredTransactions = [...transactions].filter(
          (i) => dayjs(i.createdAt).year() >= dayjs().year() - 2
        );
        break;
  
      default:
        filteredTransactions = transactions;
        break;
    }
  
    return filteredTransactions;
};

const useFilter = ({ timeFilteredTransactions, filter }: { timeFilteredTransactions: Transaction[]; filter: string })=> {
  const transactions =timeFilteredTransactions;
  if (transactions === undefined || transactions.length === 0) {
    return [];
  }
  
  let response;
    if (transactions !== undefined && transactions.length > 0) {
      switch (filter) {
        case "oldest":
          response = [...transactions].sort((a, b) => a.id - b.id);
          break;
        case "latest":
          response = [...transactions].sort((a, b) => b.id - a.id);
          break;
        case "highest":
          response = [...transactions].sort(
            (a, b) => b.value - a.value
          );
          break;
        case "lowest":
          response = [...transactions].sort(
            (a, b) => a.value - b.value
          );
          break;
        case "income":
          response = [...transactions].filter(
            (i) => i.type === "entrada"
          );
          break;
        case "spent":
          response = [...transactions].filter(
            (i) => i.type === "saida"
          );
          break;
        default:
          response = transactions;
      }
  }

  return response;
}  
export {useTimeFilter, useFilter};