import { Button } from "@/components/ui/button";

type ActionButtonProps = {
  innerText: string;
  navigationRef: string;
};

const ActionButton = ({ innerText, navigationRef }: ActionButtonProps) => {
  return (
    <a href={navigationRef}>
      <Button className="rounded-full opacity-80 mt-20 h-[50px] min-w-[200px] mb-20">
        {innerText}
      </Button>
    </a>
  );
};

export default ActionButton;
