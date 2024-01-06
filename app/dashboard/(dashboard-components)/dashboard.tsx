"use client";

import weekofYear from "dayjs/plugin/weekOfYear";
import dayjs from "dayjs";
import { transactionData } from "../../../lib/types";
import { useState } from "react";
import { UserInfo } from "./userInfo";
import { ExpensesByCategory } from "./expenses-by-category";
import { TimeFilter } from "./timeFilter";
import styles from "@/app/styles";

export function DashboardComponent({ transactions }: transactionData) {
  const [time, setTime] = useState<string>("month");
  var weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);

  const timeFilterTransactions =
    transactions !== undefined && transactions.length > 0
      ? time === "month"
        ? [...transactions].filter(
            (i) =>
              dayjs(i.createdAt).month() ===
              (dayjs().month() || dayjs().month())
          )
        : time === "week"
        ? [...transactions].filter(
            (i) => dayjs(i.createdAt).week() === dayjs().week()
          )
        : time === "3months"
        ? [...transactions].filter(
            (i) => dayjs(i.createdAt).month() >= dayjs().month() - 2
          )
        : time === "year"
        ? [...transactions].filter(
            (i) => dayjs(i.createdAt).year() >= dayjs().year() - 2
          )
        : transactions
      : [];

  return (
    <div className={`${styles.paddingX}`}>
      <div className="mx-auto">
        <TimeFilter time={time} setTime={setTime} />
      </div>

      <UserInfo transactions={timeFilterTransactions} />
      <ExpensesByCategory transactions={timeFilterTransactions} />
    </div>
  );
}
