import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Overview() {
  return (
    <>
      <div className="flex flex-row justify-between ml-6 mt-7 bg-[#F2F2F2] mr-8">
        <h5 className="text-black font-medium text-xl">Overview</h5>
        <div className="flex justify-center items-center gap-2 bg-white px-3 py-2  rounded-sm">
          <div>This month</div>
          <FontAwesomeIcon className="pt-1" icon={faAngleDown} />
        </div>
      </div>
    </>
  );
}
