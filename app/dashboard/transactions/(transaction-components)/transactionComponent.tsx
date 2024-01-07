import { useRouter } from "next/navigation";
import Image from "next/image";
import { Transaction } from "../../../../lib/types";
import dayjs from "dayjs";
import styles from "@/app/styles";

export function TransactionComponent({
  id,
  type,
  value,
  category,
  description,
  createdAt,
}: Transaction): JSX.Element {
  require("dayjs/locale/pt-br");
  const router = useRouter();

  async function handleDelete(transactionId: number) {
    const data = {
      transactionId,
    };
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
    };

    const response = await fetch("/api/transactions", options);

    if (response.status === 200) {
      return router.refresh();
    }
    return alert("Algo deu errado, tente novamente");
  }

  const date = dayjs(createdAt).locale("pt-br").format("DD/MMM");
  const hour = dayjs(createdAt).locale("pt-br").format("HH:mm ");

  return (
    <div className=" flex items-center justify-evenly text-sm xl:text-base relative bg-primary1 p-4  text-white">
      <div
        className={`absolute left-[10px] rounded-full ${styles.flexCenter} bg-white p-2 bg-opacity-75`}
      >
        <Image alt={category} width={25} height={25} src={`/${category}.svg`} />
      </div>

      <div className="flex flex-col space-y-[-5px] py-2 justify-center absolute left-[60px]">
        <p className="font-bold">
          {category.charAt(0).toUpperCase()}
          {category.substring(1)}
        </p>
        <p className="text-tertiary text-sm font-bold">
          {date} | {hour}
        </p>
      </div>
      <div className=" text-tertiary ">
        {description ? (
          description.length < 20 ? (
            <p className="text-sm   text-transparent sm:text-tertiary">
              {description}
            </p>
          ) : (
            <p className="text-sm text-blue-600 text-transparent sm:text-tertiary">
              ver detalhes
            </p>
          )
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
      {type === "saida" ? (
        <p className="absolute right-[60px] font-bold  text-negativeBalance">
          -{(value / 100).toFixed(2)}
        </p>
      ) : (
        <p className="absolute right-[60px] font-bold text-positiveBalance">
          +{(value / 100).toFixed(2)}
        </p>
      )}

      <div
        className={`absolute right-[10px] hover:cursor-pointer rounded-full ${styles.flexCenter} bg-negativeBalance`}
      >
        <button onClick={() => handleDelete(id)}>
          <Image alt="delete" width={25} height={25} src={`/delete.svg`} />
        </button>
      </div>
    </div>
  );
}
