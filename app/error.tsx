"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className=" flex flex-col items-center justify-center space-y-10 mx-auto h-[100vh] bg-white rounded-xl my-10 lg:max-w-[1280px] mx-auto text-3xl color-secondary font-semibold ">
      <div className="mx-auto flex flex-col items-center align-middle">
        <h2 className="mb-10">Algo deu errado!</h2>
        <h3>Error: {error.message} </h3>
      </div>

      <div className="p-4 space-x-5 mx-auto flex items-center align-middle justify-center">
        <Button onClick={() => reset()}>Recarregar Página</Button>
        
          <Button><Link href={"/"}>Navegar para página inicial</Link></Button>
        
      </div>
    </div>
  );
}
