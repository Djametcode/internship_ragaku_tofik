/* eslint-disable @next/next/no-img-element */
export default function ShopFilterComponent() {
  return (
    <div className=" h-[100px] w-screen bg-[#F9F1E7] flex items-center justify-around font-poopins">
      <div className=" flex gap-8">
        <div className=" flex gap-5">
          <div className=" flex gap-5">
            <div className=" w-[25px] h-[25px]">
              <img className=" w-full h-full" src="/icon1.png" alt="filter" />
            </div>
            <p>Filter</p>
          </div>
          <div className=" w-[25px] h-[25px]">
            <img className=" w-full h-full" src="/icon2.png" alt="filter" />
          </div>
          <div className=" w-[25px] h-[25px]">
            <img className=" w-full h-full" src="/icon3.png" alt="filter" />
          </div>
        </div>
        <div className=" text-[16px]">
          <p>Showing 1–16 of 32 results</p>
        </div>
      </div>
      <div className=" flex gap-5">
        <div className=" flex gap-3">
          <p>Show</p>
          <input type="text" value={16} />
        </div>
        <div className=" flex gap-3">
          <p>Short by</p>
          <input type="text" value={"default"} />
        </div>
      </div>
    </div>
  );
}
