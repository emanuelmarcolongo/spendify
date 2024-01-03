import styles from "../styles";
import { features } from "../constants";
import Image from "next/image";

const Features = () => {
  return (
    <section
      className={`bg-primary1 ${styles.flexStart} min-h-screen pt-[100px]`}
    >
      <ul className={` ${styles.boxWidth} space-y-10 xl:px-0 sm:px-16 px-6`}>
        <h1 id="sobre" className="text-white font-bold text-3xl mb-12">
          O que<br></br> ofereçemos?
        </h1>
        {features.map((feature, idx) => (
          <li
            key={feature.id}
            className="flex items-center space-x-10 sm:space-x-32"
          >
            <Image
              src={feature.imgSrc}
              alt={feature.imgAlt}
              width={100}
              height={100}
            />

            <p className="md:max-w-[50%] max-w-full font-semibold text-tertiary">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
