import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

export function BottomElement() {
  return (
    <>
      <div className="flex flex-row items-center bg-[#353C53] rounded mx-3 my-4 gap-4 mb-4 px-1">
        <div>
          <FontAwesomeIcon
            className="text-white w-6 h-6 py-3 pl-3"
            icon={faWallet}
          />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-[13px] text-[#FFFFFF] font-light">
            Available Credits
          </h3>
          <h6 className="text-base text-[#FFFFFF] font-medium">224.10</h6>
        </div>
      </div>
    </>
  );
}
