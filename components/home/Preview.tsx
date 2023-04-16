import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function PreviewImage() {
  return (
    <>
      <div className="lg:flex items-center justify-center space-x-10 space-y-10 lg:w-1/2 p-10">
        <div className="flex flex-col items-center justify-center space-y-5 text-justify w-full lg:max-w-[50%] ">
          <span className="font-extrabold text-darkGray text-xl ">
            Fácil de usar!
          </span>
          <br></br>
          Aqui você será capaz de categorizar suas transações e ter acesso à uma
          interface intuitiva e fácil de usar que permite que você visualize
          facilmente seu saldo atual e receba insights sobre suas despesas.
          <br></br>
          <Link href={"/register"}>
            <Button>Começe já!</Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="border-8 border-b-[20px]  min-w-[150px] max-w-[250px] drop-shadow-xl  rounded-3xl border-opacity-50 border-black">
            <Image
              className="rounded-3xl"
              alt="appImage"
              width={250}
              height={400}
              src={"/imgs/dashboard.png"}
            />
          </div>
        </div>
      </div>

      <div className="lg:flex items-center space-x-10 space-y-10 lg:w-1/2 p-10">
        <div className="flex flex-col items-center justify-center space-y-5 text-justify w-full lg:max-w-[50%] ">
          <span
            className="font-extrabold text-darkGray text-xl
        "
          >
            De graça!
          </span>
          <br></br>
          Não perca mais tempo gerenciando suas finanças de forma antiquada e
          complicada. Experimente o Spendify hoje mesmo e descubra como é fácil
          ter mais controle sobre seu dinheiro!
          <br></br>
        </div>

        <div className="flex justify-center">
          <div className="border-8 border-b-[20px]  min-w-[150px] max-w-[250px] drop-shadow-xl  rounded-3xl border-opacity-50 border-black">
            <Image
              className="rounded-3xl"
              alt="appImage"
              width={250}
              height={400}
              src={"/imgs/categories.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
