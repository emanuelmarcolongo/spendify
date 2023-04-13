
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Transaction } from "../../../lib/types";
import dayjs from 'dayjs';

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