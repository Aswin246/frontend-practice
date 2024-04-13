import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUpRightAndDownLeftFromCenter,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
export function OrderTransaction() {
  return (
    <>
      <div className="flex justify-between">
        <div className=" flex flex-row py-1  px-4 pb-2 border-2 m-3 border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
          <div>
            <FontAwesomeIcon
              className="text-sm rounded bg-transparent"
              icon={faMagnifyingGlass}
            />
          </div>
          <input
            type="text"
            className=" justify-start w-full pl-2 bg-transparent outline-none "
            placeholder=" Order ID or Transactions ID"
          ></input>
        </div>
        <div className="flex pt-2 items-center justify-between ">
          <div className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
            <div>Sort</div>
            <FontAwesomeIcon
              className="text-sm rounded bg-transparent"
              icon={faUpRightAndDownLeftFromCenter}
            />
          </div>
          <FontAwesomeIcon
            className="text-sm rounded bg-transparent border-2 border-[#D9D9D9] text-[#808080] flex flex-row px-2 py-[8px]  m-3 "
            icon={faDownload}
          />
        </div>
      </div>
    </>
  );
}
