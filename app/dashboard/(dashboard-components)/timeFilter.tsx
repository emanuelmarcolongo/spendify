import { Dispatch, SetStateAction } from "react";

export function TimeFilter({
  time,
  setTime,
}: {
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex max-w-full justify-between space-x-5 font-bold py-10 text-white text-sm md:text-base">
      <button
        onClick={() => setTime("all")}
        className={`
          rounded-lg p-1 w-15 
            ${time === "all" && "underline"}`}
      >
        Todas
      </button>

      <button
        onClick={() => setTime("year")}
        className={`
          rounded-lg p-1 w-15
            ${time === "year" && "underline"}`}
      >
        Esse ano
      </button>

      <button
        onClick={() => setTime("3months")}
        className={`
          rounded-lg p-1 w-15
            ${time === "3months" && "underline"}`}
      >
        Ultimos 3 meses
      </button>

      <button
        onClick={() => setTime("month")}
        className={`
          rounded-lg p-1 w-15
            ${time === "month" && "underline"}`}
      >
        Esse mês
      </button>

      <button
        onClick={() => setTime("week")}
        className={`
          rounded-lg p-1 w-15
            ${time === "week" && "underline"}`}
      >
        Essa semana
      </button>
    </div>
  );
}
