import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <div className="bg-white w-full">
        <div className="flex flex-row justify-between items-center p-4 px-6 border-b border-[#D9D9D9] pb-5">
          <div className=" text-slate-800 flex flex-row gap-4 justify-center items-center ">
            <div className="text-[#1A181E] font-medium text-xl">Payouts</div>
            <div className="flex flex-row items-center justify-center gap-1 pt-1">
              <FontAwesomeIcon className="text-sm rounded" icon={faQuestion} />
              <div className="hidden sm:block text-xs">How it works</div>
            </div>
          </div>
          <div className=" flex flex-row bg-[#F2F2F2] rounded pt-2 w-[400px] px-4 pb-2">
            <div>
              <FontAwesomeIcon
                className="text-sm rounded bg-transparent"
                icon={faMagnifyingGlass}
              />
            </div>
            <input
              type="text"
              className=" justify-start w-full pl-4 bg-transparent outline-none "
              placeholder=" Search features, tutorials, etc."
            ></input>
          </div>
          <div className="flex items-center justify-center pr-10 gap-2">
            <div className="rounded-3xl">
              <FontAwesomeIcon
                className="text-sm rounded w-[40px]"
                icon={faPhone}
              />
            </div>
            <FontAwesomeIcon
              className="text-sm rounded bg-transparent"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
      </div>
    </>
  );
}
