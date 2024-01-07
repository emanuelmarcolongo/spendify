import weekofYear from "dayjs/plugin/weekOfYear";
import dayjs from "dayjs";
import { Transaction } from "@/lib/types";



    


const useTimeFilter = ({ transactions, time }: { transactions: Transaction[]; time: string }) => {
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

export {useTimeFilter};