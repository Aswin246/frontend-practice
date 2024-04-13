export function Transactions() {
  return (
    <>
      <div className="flex  ml-6 pl-6 mt-7"></div>
      <div className=" flex flex-row justify-between font-medium text-[#1A181E] text-xl ml-6 ">
        Transactions | This Month
      </div>
      <div className="flex flex-row justify-start mt-5">
        <div className=" flex flex-row justify-between items-center px-4 py-[6px]  ml-6 bg-[#E6E6E6] text-[#808080] rounded-full">
          Payouts (22)
        </div>
        <div className=" flex flex-row justify-between items-center px-4 py-[6px]  ml-4 bg-[#146EB4] text-[#FFFFFF] rounded-full">
          Refunds (6)
        </div>
      </div>
    </>
  );
}
