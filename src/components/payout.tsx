import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons/faGreaterThan";

export function Payout() {
  return (
    <>
      <div className="flex flex-row justify-between ml-6 mr-8 mt-5  min-w-[300px]">
        <div className="flex flex-col">
          <div className="min-w-[400px] bg-[#146EB4] text-white p-5 flex flex-col  justify-between gap-4 rounded-t-[8px] ">
            <div className="flex gap-2">
              {" "}
              <h5> Next Payout</h5>
              <FontAwesomeIcon className="pt-1" icon={faQuestion} />
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="text-3xl font-medium">₹2,312.23</div>
              <div className="flex gap-1 items-center justify-center font-medium text-base underline">
                <div>23 Orders</div>
                <FontAwesomeIcon className="pt-1" icon={faGreaterThan} />
              </div>
            </div>
          </div>
          <div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-b-[8px]">
            <div>Next Payment Date:</div>
            <div>Today, 4:00PM</div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="min-w-[400px] bg-white text-black p-5 flex flex-col  justify-between gap-4 rounded-[8px] ">
            <div className="flex gap-2">
              {" "}
              <h5> Amount Pending</h5>
              <FontAwesomeIcon className="pt-1" icon={faQuestion} />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-3xl font-medium">₹92,312.20</div>
              <div className="flex gap-1 items-center  text-[#146EB4] justify-center font-medium text-base underline">
                <div>13 Orders</div>
                <FontAwesomeIcon className="pt-1" icon={faGreaterThan} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="min-w-[400px] bg-white text-black p-5 flex flex-col  justify-between gap-4 rounded-[8px] ">
            <div className="flex gap-2">
              {" "}
              <h5> Amount Processed</h5>
              <FontAwesomeIcon className="pt-1" icon={faQuestion} />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-3xl font-medium">₹23,92,312.19</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
