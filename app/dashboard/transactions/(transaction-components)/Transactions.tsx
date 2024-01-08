"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { transactionData } from "@/lib/types";
import { TimeFilter } from "@/app/dashboard/(dashboard-components)/TimeFilter";
import { TransactionComponent } from "./TransactionComponent";
import { useFilter, useTimeFilter } from "@/app/utils/filters";
import { filters } from "@/app/constants";

const Transactions = ({ transactions }: transactionData) => {
  const [filter, setFilter] = useState<string>("");
  const [time, setTime] = useState<string>("month");

  const timeFilteredTransactions = useTimeFilter({ transactions, time });
  const filteredTransactions = useFilter({ timeFilteredTransactions, filter });

  return (
    <div className="flex flex-col w-full mx-auto bg-primary1 lg:max-w-full rounded-xl p-10">
      <div className="mx-auto w-full h-full">
        <div className="items-center justify-center rounded-xl my-10 lg:flex">
          <h1 className="font-bold text-xl text-white lg:w-[50%]">
            Minhas transações
          </h1>
          <div className="lg:w-[50%]">
            <Select required onValueChange={(value) => setFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar Transações" />
              </SelectTrigger>
              <SelectContent>
                {filters.map((filter, idx) => (
                  <SelectItem key={filter.name + idx} value={filter.name}>
                    {filter.innerText}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TimeFilter time={time} setTime={setTime} />

        <div className="space-y-1 p-2 mb-11 border-2 border-tertiary rounded-xl h-full">
          {filteredTransactions &&
            filteredTransactions?.map((i) => {
              return (
                <>
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
                  <div className="h-[1px] bg-tertiary bg-opacity-20 w-4/5 mx-auto"></div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
