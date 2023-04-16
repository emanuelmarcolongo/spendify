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
import { Transaction, transactionData } from "../../../lib/types";
import { TimeFilter } from "../timeFilter";
import { TransactionComponent } from "./transactionComponent";

export default function Transactions({ transactions }: transactionData) {
  const [filter, setFilter] = useState<string>("");
  const [time, setTime] = useState<string>("month");
  var weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);

  const filteredTransactions: string | Transaction[] =
    transactions !== undefined && transactions.length > 0
      ? filter === "oldest"
        ? [...transactions].sort((a, b) => a.id - b.id)
        : filter === "latest" || ""
        ? [...transactions].sort((a, b) => b.id - a.id)
        : filter === "highest"
        ? [...transactions].sort((a, b) => b.value - a.value)
        : filter === "lowest"
        ? [...transactions].sort((a, b) => a.value - b.value)
        : filter === "income"
        ? [...transactions].filter((i) => i.type === "entrada")
        : filter === "spent"
        ? [...transactions].filter((i) => i.type === "saida")
        : transactions
      : [];

  

  const timeFilterTransactions =
    filteredTransactions !== undefined && filteredTransactions.length > 0
      ? time === "month"
        ? [...filteredTransactions].filter(
            (i) =>
              dayjs(i.createdAt).month() ===
              (dayjs().month() || dayjs().month())
          )
        : time === "week"
        ? [...filteredTransactions].filter(
            (i) => dayjs(i.createdAt).week() === dayjs().week()
          )
        : time === "3months"
        ? [...filteredTransactions].filter(
            (i) => dayjs(i.createdAt).month() >= dayjs().month() - 2
          )
        : filteredTransactions
      : time === "year"
      ? [...filteredTransactions].filter(
          (i) => dayjs(i.createdAt).year() >= dayjs().year() - 2
        )
      : filteredTransactions;

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
          {timeFilterTransactions &&
            timeFilterTransactions?.map((i) => {
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
