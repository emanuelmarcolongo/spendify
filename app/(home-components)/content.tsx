import TypeAnimationComponent from "./type-animation";
import { PreviewImage } from "./preview";
import Hero from "./hero";

export default function HomeContent() {
  return (
    <section>
      <div className="w-full flex flex-col items-center space-y-2 bg-primary1 bg-opacity-90 mx-auto rounded-xl my-10 py-10">
        <PreviewImage></PreviewImage>
      </div>
    </section>
  );
}
