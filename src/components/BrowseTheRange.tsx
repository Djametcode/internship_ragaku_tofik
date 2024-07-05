/* eslint-disable @next/next/no-img-element */
export default function BrowseTheRangeComponent() {
  return (
    <div className=" flex items-center justify-center">
      <div className=" w-[1183px] h-[685px] mt-14 mb-14 font-poopins flex flex-col items-center justify-center">
        <div className=" h-[76.71px] w-[559px] flex flex-col items-center justify-center">
          <h1 className=" font-bold text-[32px]">Browse The Range</h1>
          <p className=" font-normal text-[#666666] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" grid grid-cols-3 h-full gap-x-8 mt-10">
          <div className=" h-full flex flex-col items-center justify-around">
            <div className=" h-[480px] w-full">
              <img
                className=" h-full w-full object-cover rounded-xl"
                src="/browse1.png"
                alt=""
              />
            </div>
            <div className=" font-poopins text-[24px] text-[#333333] font-semibold">
              <h1>Dining</h1>
            </div>
          </div>
          <div className=" h-full flex flex-col items-center justify-around">
            <div className=" h-[480px] w-full">
              <img
                className=" h-full w-full object-cover rounded-xl"
                src="/browse2.png"
                alt=""
              />
            </div>
            <div className=" font-poopins text-[24px] text-[#333333] font-semibold">
              <h1>Living</h1>
            </div>
          </div>
          <div className=" h-full flex flex-col items-center justify-around">
            <div className=" h-[480px] w-full">
              <img
                className=" h-full w-full object-cover rounded-xl"
                src="/browse3.png"
                alt=""
              />
            </div>
            <div className=" font-poopins text-[24px] text-[#333333] font-semibold">
              <h1>Bedroom</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
