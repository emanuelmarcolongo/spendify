"use client";

import dayjs from 'dayjs'
import { useRouter } from 'next/navigation';
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction, transactionData } from "../../../../lib/types";
import Image from "next/image";


export default function Transactions({ transactions }: transactionData) {

  const [filter, setFilter] = useState("");
  const [time, setTime] = useState('month');
  var weekOfYear = require('dayjs/plugin/weekOfYear')
  dayjs.extend(weekOfYear)  


  const filteredTransactions =
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
        ? [...transactions].filter((i) => i.type === 'entrada')
        : filter === "spent"
        ? [...transactions].filter((i) => i.type === 'saida')
        : transactions
      : "";

  const timeFilterTransactions: null | Transaction[] = 
  filteredTransactions !== undefined && filteredTransactions.length > 0
  ? time === "month"
  ? [...filteredTransactions].filter((i) => dayjs(i.createdAt).month() === (dayjs().month() || dayjs().month()) )
  : time === "week"
  ? [...filteredTransactions].filter((i) =>  dayjs(i.createdAt).week() === dayjs().week())
  : time === "3months"
  ? [...filteredTransactions].filter((i) => dayjs(i.createdAt).month() >= dayjs().month() -2)
  : filteredTransactions
  : time === "year"
  ? [...filteredTransactions].filter((i) => dayjs(i.createdAt).year() >= dayjs().year() -2)
  : filteredTransactions;

  return (
    <div className="flex flex-col w-full mx-auto bg-white bg-opacity-50 lg:max-w-full rounded-xl px-10">
      <div className='lg:w-1/2 mx-auto'>
      <div className="items-center justify-center py-10 lg:flex">
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

    <TimeFilter time={time} setTime={setTime} />

      <div className="space-y-1 mb-11">
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



export function TimeFilter ({time, setTime}) {
  return (
    <div className='flex max-w-full justify-between font-bold py-10'>

<button
        onClick={() => setTime("all")}
        className={`
        rounded-lg p-1 w-15 
          ${time === "all"
            ? "bg-[#27E0A6]"
            : "bg-[#252525] text-white"}`
        }
      >
        Todas
      </button>

      <button
        onClick={() => setTime("year")}
        className={`
        rounded-lg p-1 w-15
          ${time === "year"
            ? "bg-[#27E0A6]"
            : "bg-[#252525] text-white"}`
        }
      >
        Esse ano
      </button>

      <button
        onClick={() => setTime("3months")}
        className={`
        rounded-lg p-1 w-15
          ${time === "3months"
            ? "bg-[#27E0A6]"
            : "bg-[#252525] text-white"}`
        }
      >
        Ultimos 3 mês
      </button>

      <button
        onClick={() => setTime("month")}
        className={`
        rounded-lg p-1 w-15
          ${time === "month"
            ? "bg-[#27E0A6]"
            : "bg-[#252525] text-white"}`
        }
      >
        Esse mês
      </button>

      <button
        onClick={() => setTime("week")}
        className={`
        rounded-lg p-1 w-15
          ${time === "week"
            ? "bg-[#27E0A6]"
            : "bg-[#252525] text-white"}`
        }
      >
        Essa semana
      </button>

      </div>

  )

  

}

export function TransactionComponent({
  id,
  type,
  value,
  category,
  description,
  createdAt
}: Transaction): JSX.Element {
  require('dayjs/locale/pt-br');
  const router = useRouter();
 

  async function handleDelete (transactionId: number) {
    const data = {
        transactionId
    }
    const options = {
        method: "DELETE",
        body: JSON.stringify(data)
    }

    const response = await fetch("/api/transactions", options);

    if (response.status === 200) {
      return router.refresh()      
    }
    return alert("Algo deu errado, tente novamente")
}

  const date = dayjs(createdAt).locale('pt-br').format("DD - MMM")
  const hour = dayjs(createdAt).locale('pt-br').format("HH:mm ")

  return (
    <div className="flex items-center justify-evenly text-sm xl:text-lg relative bg-white rounded-xl p-2 border-b-2">

        <Image className="absolute left-[10px]" alt="category" width={25} height={25} src={`/${category}.svg`}/>

       <div className="absolute right-[10px] hover:cursor-pointer">
          <button onClick={() => handleDelete(id)}>
            <Image  alt="delete" width={25} height={25} src={`/delete.svg`}/>
          </button>
          
       </div>
        
        
       
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
      <div className="date text-gray-500 flex-col align-middle">
        <p>{date}</p>
        <p>{hour}</p>

      </div>
      {type === "saida" ? (
        <p className="absolute right-[60px] font-bold  text-red-400">
          -{(value / 100).toFixed(2)}
        </p>
      ) : (
        <p className="absolute right-[60px] font-bold text-[#27E0A6]">
          +{(value / 100).toFixed(2)}
        </p>
      )}
    </div>
  );
}