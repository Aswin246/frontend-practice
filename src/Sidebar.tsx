import { SideElements } from "./components/SideElements";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-screen  bg-[#1E2640] max-w-[244px]">
        <SideElements text={"Home"} icon={faHouse} />
      </div>
    </>
  );
}
