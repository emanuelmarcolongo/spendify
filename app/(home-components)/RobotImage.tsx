import { robot } from "@/public/assets";
import Image from "next/image";
import styles from "../styles";

const RobotImage = () => {
  return (
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="billing"
        width={640}
        height={645}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-[100%] h-[100%] z-[5] rounded-xl"
        priority={true}
      />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 robot_gradient" />
    </div>
  );
};

export default RobotImage;
