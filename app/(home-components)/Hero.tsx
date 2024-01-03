import styles from "../styles";
import ActionButton from "./ActionButton";
import RobotImage from "./RobotImage";

const HeroInformation = () => {
  return (
    <div
      className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
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
        Com o Spendify, você tem controle dos seus gastos e insights a respeito
        do seu fluxo financeiro!
      </p>
      <ActionButton innerText="Saiba mais!" navigationRef="#sobre" />
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`w-full lg:max-w-[1280px] flex md:flex-row flex-col ${styles.paddingY} sm:mt-10 mt-24 bg-primary1`}
    >
      <HeroInformation />
      <RobotImage />
    </section>
  );
};

export default Hero;
