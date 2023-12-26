import { robot } from "@/public/assets";
import Image from "next/image";
import styles from "../styles";
styles;

const Hero = () => {
  return (
    <section
      id="home"
      className={`w-full lg:max-w-[1280px] flex md:flex-row flex-col ${styles.paddingY} sm:mt-10 mt-24 bg-primary1`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex text-white flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px]">
            Suas <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Finanças</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white leading-[75px] w-full">
          Na sua mão!
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-tertiary font-semibold`}
        >
          Com o Spendify, você tem controle absoluto dos seus gastos e insights
          a respeito do seu fluxo financeiro!
        </p>
      </div>
      <RobotImage />
    </section>
  );
};

export default Hero;

export const RobotImage = () => {
  return (
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 robot_gradient" />
    </div>
  );
};
