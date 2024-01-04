"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ActionButtonProps = {
  innerText: string;
  navigationRef: string;
};

const ActionButton = ({ innerText, navigationRef }: ActionButtonProps) => {
  const router = useRouter();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;

    if (href.includes("#")) {
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (href.includes("/")) {
      router.push(href);
    }
  };
  return (
    <a href={navigationRef} onClick={handleScroll}>
      <Button className="rounded-full opacity-80 mt-20 h-[50px] min-w-[200px] mb-20">
        {innerText}
      </Button>
    </a>
  );
};

export default ActionButton;
