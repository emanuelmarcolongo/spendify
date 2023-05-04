import TypeAnimationComponent from "./type-animation";
import { PreviewImage } from "./preview";

export default function HomeContent() {
  return (
    <div className="lg:max-w-[1280px] flex flex-col items-center align-middle space-y-2 bg-white bg-opacity-90 mx-auto rounded-xl my-10 p-10">
      <h1 className="font-extrabold text-5xl">Spendify</h1>
      <h2 className="font-bold text-lg">Sua carteira centralizada</h2>
      <TypeAnimationComponent />
      <PreviewImage></PreviewImage>
    </div>
  );
}
