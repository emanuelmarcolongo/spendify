"use client";

import dayjs from "dayjs";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction, transactionData } from "@/lib/types";
import { TimeFilter } from "@/app/dashboard/(dashboard-components)/timeFilter";
import { TransactionComponent } from "./transactionComponent";

export default function Transactions({ transactions }: transactionData) {
  const [filter, setFilter] = useState<string>("");
  const [time, setTime] = useState<string>("month");
  var weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);

  let filteredTransactions: string | Transaction[] = [];

  if (transactions !== undefined && transactions.length > 0) {
    switch (filter) {
      case "oldest":
        filteredTransactions = [...transactions].sort((a, b) => a.id - b.id);
        break;
      case "latest":
        filteredTransactions = [...transactions].sort((a, b) => b.id - a.id);
        break;
      case "highest":
        filteredTransactions = [...transactions].sort(
          (a, b) => b.value - a.value
        );
        break;
      case "lowest":
        filteredTransactions = [...transactions].sort(
          (a, b) => a.value - b.value
        );
        break;
      case "income":
        filteredTransactions = [...transactions].filter(
          (i) => i.type === "entrada"
        );
        break;
      case "spent":
        filteredTransactions = [...transactions].filter(
          (i) => i.type === "saida"
        );
        break;
      default:
        filteredTransactions = transactions;
    }
  }

  let timeFilteredTransactions: Transaction[] = [];

  if (filteredTransactions !== undefined && filteredTransactions.length > 0) {
    switch (time) {
      case "month":
        timeFilteredTransactions = [...filteredTransactions].filter(
          (i) => dayjs(i.createdAt).month() === dayjs().month()
        );
        break;
      case "week":
        timeFilteredTransactions = [...filteredTransactions].filter(
          (i) => dayjs(i.createdAt).week() === dayjs().week()
        );
        break;
      case "3months":
        timeFilteredTransactions = [...filteredTransactions].filter(
          (i) => dayjs(i.createdAt).month() >= dayjs().month() - 2
        );
        break;
      case "year":
        timeFilteredTransactions = [...filteredTransactions].filter(
          (i) => dayjs(i.createdAt).year() >= dayjs().year() - 2
        );
        break;
      default:
        timeFilteredTransactions = filteredTransactions;
    }
  }


  return (
    <div className="flex flex-col w-full mx-auto bg-white lg:max-w-full rounded-xl p-10">
      <div className="lg:w-1/2 mx-auto">
        <div className="items-center justify-center rounded-xl my-10 lg:flex">
          <h1 className="font-bold text-xl lg:w-[50%]">Minhas transações</h1>
          <div className="lg:w-[50%]">
            <Select required onValueChange={(value) => setFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar Transações" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Recentes</SelectItem>
                <SelectItem value="oldest">Antigas</SelectItem>
                <SelectItem value="highest">Maior valor</SelectItem>
                <SelectItem value="lowest">Menor valor</SelectItem>
                <SelectItem value="income">Entrada</SelectItem>
                <SelectItem value="spent">Saída</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TimeFilter time={time} setTime={setTime} />

        <div className="space-y-1 p-2 mb-11 border-2 border-darkGray rounded-xl">
          {timeFilteredTransactions &&
            timeFilteredTransactions?.map((i) => {
              return (
                <TransactionComponent
                  key={i.id}
                  id={i.id}
                  userId={i.userId}
                  type={i.type}
                  value={i.value}
                  description={i.description}
                  category={i.category}
                  createdAt={i.createdAt}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
