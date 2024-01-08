import { timefilters } from "@/app/constants";
import { Dispatch, SetStateAction } from "react";

const TimeFilter = ({
  time,
  setTime,
}: {
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex max-w-full justify-between space-x-5 font-bold py-10 text-white text-sm md:text-base">
      {timefilters.map((filter, idx) => (
        <button
          onClick={() => setTime(filter.name)}
          className={`
          rounded-lg p-1 w-15
            ${time === filter.name && "underline"}`}
        >
          {filter.innerText}
        </button>
      ))}
    </div>
  );
};

export { TimeFilter };
