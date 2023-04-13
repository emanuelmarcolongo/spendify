import { Dispatch, SetStateAction } from "react";

export function TimeFilter ({time, setTime}: {time: string, setTime: Dispatch<SetStateAction<string>>}) {
    return (
      <div className='flex max-w-full justify-between space-x-5 font-bold py-10'>
  
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