import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export function TopElement() {
  return (
    <>
      <div className="flex gap-3 text-[#FFFFFF] ">
        <div className="flex flex-row mt-4 ml-4">
          <img
            className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative"
            src="src\dukaan.svg"
          />
          <div className="flex flex-col ml-3 space-between">
            <div className="font-medium text-white text-[15px]">Nishyan</div>
            <a className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]">
              Visit Store
            </a>
          </div>
          <div className="ml-20 mt-2 w-[20px] h-[20px]">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </>
  );
}
