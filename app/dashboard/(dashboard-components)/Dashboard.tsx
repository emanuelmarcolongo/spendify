"use client";

import { transactionData } from "../../../lib/types";
import { useState } from "react";
import { BalanceInformation } from "./BalanceInformation";
import { TimeFilter } from "./TimeFilter";
import styles from "@/app/styles";
import { ExpensesGraphic } from "./ExpensesGraphic";
import { useTimeFilter } from "@/app/utils/filters";

const DashboardComponent = ({ transactions }: transactionData) => {
  const [time, setTime] = useState<string>("month");

  const timeFilterTransactions = Array.isArray(transactions)
    ? useTimeFilter({ transactions, time })
    : [];

  return (
    <div className={`${styles.paddingX}`}>
      <div className="mx-auto">
        <TimeFilter time={time} setTime={setTime} />
      </div>

      <BalanceInformation transactions={timeFilterTransactions} />
      <ExpensesGraphic transactions={timeFilterTransactions} />
    </div>
  );
};

export { DashboardComponent };
