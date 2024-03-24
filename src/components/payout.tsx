export function Payout() {
  return (
    <>
      <div className="flex flex-row justify-between ml-6 mr-8 mt-5">
        <div className="flex flex-col">
          <div className="min-w-[400px] bg-[#146EB4] text-white p-5 flex flex-col  justify-between gap-4 rounded-[8px]">
            <div> Next payout</div>
            <div className="flex flex-row justify-between">
              <div>₹2,312.23</div>
              <div>23 Orders</div>
            </div>
          </div>
          <div className=" flex flex-row justify-between rounded-[8px] bg-[#0E4F82] flex-grow items-end">
            <div>Next Payment Date:</div>
            <div>Today, 4:00PM</div>
          </div>
        </div>

        <div>Next payout</div>
        <div>Next payout</div>
      </div>
    </>
  );
}
