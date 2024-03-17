import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideElementsProps {
  text: string;
  icon: IconProp;
}

export function SideElements({ text, icon }: SideElementsProps) {
  return (
    <>
      <div className=" flex flex-row justify-start items-center px-4 py-2">
        <FontAwesomeIcon
          className="text-white text-xl mr-2 w-[18px] h-[18px] pr-1"
          icon={icon}
        />
        <div className="text-white text-[14px] font-medium">{text}</div>
      </div>
    </>
  );
}
