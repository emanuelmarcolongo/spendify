import { whiteLogo } from "@/public/assets";
import Image from "next/image";

const SpendifyLogo = () => {
  return (
    <a
      className="text-white font-extrabold text-xl flex items-center "
      href={"/"}
    >
      <Image
        width={140}
        height={24}
        alt="spendifyLogo"
        src={whiteLogo}
        priority
      />
    </a>
  );
};

export default SpendifyLogo;
