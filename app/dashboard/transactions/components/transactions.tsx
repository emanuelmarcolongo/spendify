"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction, transactionData } from "../../../../lib/types";

export default function Transactions({ transactions }: transactionData) {
  const [filter, setFilter] = useState("");

  const filteredTransactions =
    transactions !== undefined && transactions.length > 0
      ? filter === "oldest"
        ? transactions.sort((a, b) => a.id - b.id)
        : filter === "latest" || ""
        ? transactions.sort((a, b) => b.id - a.id)
        : filter === "highest"
        ? transactions.sort((a, b) => b.value - a.value)
        : filter === "lowest"
        ? transactions.sort((a, b) => a.value - b.value)
        : filter === "income"
        ? [...transactions].filter((i) => i.type === 'entrada')
        : filter === "spent"
        ? [...transactions].filter((i) => i.type === 'saida')
        : transactions
      : "";

  return (
    <div className="flex flex-col w-full mx-auto bg-white lg:max-w-full lg:px-32">
      <div className=" p-10 items-center justify-center lg:flex">
        <h1 className="font-bold text-xl mb-[15px] lg:w-[50%]">
          Minhas transações
        </h1>
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

      <div>
        {filteredTransactions &&
          filteredTransactions?.map((i) => {
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
  );
}

export function TransactionComponent({
  type,
  value,
  category,
  description,
  createdAt,
}: Transaction): JSX.Element {
  return (
    <div className="flex items-center justify-evenly h-[60px] relative border-b-gray-200 border-b-2">
      <div className="flex flex-col absolute left-[60px]">
        <p className="font-bold">
          {category.charAt(0).toUpperCase()}
          {category.substring(1)}
        </p>
        <p className="text-gray-500">
          {description ? (
            description.length < 20 ? (
              <span className="text-sm">{description}</span>
            ) : (
              <span className="text-sm text-blue-600">ver detalhes</span>
            )
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="date text-gray-500">
        {createdAt.substring(8, 10)}/{createdAt.substring(5, 7)}{" "}
      </div>
      {type === "saida" ? (
        <p className="absolute right-[60px] text-red-500">
          $ -{(value / 100).toFixed(2)}
        </p>
      ) : (
        <p className="absolute right-[60px] text-green-500">
          $ +{(value / 100).toFixed(2)}
        </p>
      )}
    </div>
  );
}
