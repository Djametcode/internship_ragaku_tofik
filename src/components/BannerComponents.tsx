/* eslint-disable @next/next/no-img-element */
export default function BannerComponents() {
  return (
    <div className=" w-screen h-screen bg-banner bg-cover relative">
      <div className=" absolute bottom-[200px] right-[100px]">
        <div className=" w-[643px] h-[443px] flex items-center justify-center bg-[#FFF3E3] rounded-[10px]">
          <div className=" w-[561px] h-[344px] flex flex-col justify-between font-poopins font-[600px]">
            <div>
              <h1 className=" text-[16px] tracking-wider">New Arrival</h1>
              <h1 className=" max-w-[400px] text-bannerText font-semibold text-[52px] leading-[65px]">
                Discover Our New Collection
              </h1>
              <h1 className=" text-[15px] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </h1>
            </div>
            <h1 className=" text-[16px] text-white pt-[25px] pr-[72px] pb-[25px] pl-[72px] bg-[#B88E2F] w-[222px]">
              BUY NOW
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
