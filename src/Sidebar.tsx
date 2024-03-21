import { SideElements } from "./components/SideElements";
import {
  faHouse,
  faClipboard,
  faCartShopping,
  faTruck,
  faVolumeHigh,
  faChartLine,
  faWallet,
  faPercent,
  faPerson,
  faPalette,
  faCloudBolt,
} from "@fortawesome/free-solid-svg-icons";
import { TopElement } from "./components/TopElement";

export function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-screen  bg-[#1E2640] max-w-[244px]">
        <TopElement />
        <SideElements text={"Home"} icon={faHouse} />
        <SideElements text={"Orders"} icon={faClipboard} />
        <SideElements text={"Products"} icon={faCartShopping} />
        <SideElements text={"Delivery"} icon={faTruck} />
        <SideElements text={"Marketing"} icon={faVolumeHigh} />
        <SideElements text={"Analytics"} icon={faChartLine} />
        <SideElements text={"Payouts"} icon={faWallet} />
        <SideElements text={"Discounts"} icon={faPercent} />
        <SideElements text={"Audience"} icon={faPerson} />
        <SideElements text={"Appearance"} icon={faPalette} />
        <SideElements text={"Plugins"} icon={faCloudBolt} />
      </div>
    </>
  );
}
