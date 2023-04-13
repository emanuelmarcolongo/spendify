"use client";

import dayjs from "dayjs";
import { transactionData } from "../../../lib/types";
import { useState } from "react";
import { UserInfo } from "./userInfo";
import { ExpensesByCategory } from "./expensesByCategory";

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
    <div className="space-y-10 p-10 gap-10">
      <TimeFilter time={time} setTime={setTime} />
      <div className="space-y-10">
        <UserInfo transactions={timeFilterTransactions} />
        <ExpensesByCategory transactions={timeFilterTransactions} />
      </div>
    </div>
  );
}

export function TimeFilter({ time, setTime }: string | any) {
  return (
    <div className="flex max-w-full lg:w-[50%] mx-auto justify-between space-x-5 overflow-hidden">

      <button
        onClick={() => setTime("all")}
        className={`
        rounded-lg p-1
          ${time === "all"
            ? "bg-green-500"
            : "bg-slate-400"}`
        }
      >
        Todas
      </button>

      <button
        onClick={() => setTime("year")}
        className={`
        rounded-lg p-1
          ${time === "all"
            ? "bg-green-500"
            : "bg-slate-400"}`
        }
      >
        Esse ano
      </button>

      <button
        onClick={() => setTime("3months")}
        className={
          time === "3months"
            ? "bg-green-500 rounded-lg p-2"
            : "bg-slate-400 rounded-lg p-2"
        }
      >
        Ultimos 3 mês
      </button>

      <button
        onClick={() => setTime("month")}
        className={`
        rounded-lg p-1
          ${time === "all"
            ? "bg-green-500"
            : "bg-slate-400"}`
        }
      >
        Esse mês
      </button>

      <button
        onClick={() => setTime("week")}
        className={`
        rounded-lg p-1
          ${time === "all"
            ? "bg-green-500"
            : "bg-slate-400"}`
        }
      >
        Essa semana
      </button>
    </div>
  );
}
