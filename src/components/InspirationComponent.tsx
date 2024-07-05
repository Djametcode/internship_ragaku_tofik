/* eslint-disable @next/next/no-img-element */
export default function InspirationComponent() {
  return (
    <div className=" h-[670px] w-full flex items-center bg-[#FCF8F3] pl-[100px]">
      <div className=" flex flex-col gap-8">
        <div className=" w-[422px] h-full font-poopins">
          <h1 className=" font-bold text-[40px]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className=" text-[#616161]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>
        <div className=" w-[176px] h-[48px] text-white">
          <button className=" bg-[#B88E2F] w-full h-full">Explore More</button>
        </div>
      </div>
      <div className=" h-[582px]">
        <div className=" h-full">
          <div className=" w-full h-full relative">
            <img
              className=" w-full h-full"
              src="/inspiration1.png"
              alt="inspiration"
            />
            <div className=" absolute bottom-5 left-5 h-[130px] w-[217px] bg-slate-50/70">
              <div className=" w-full h-full flex flex-col items-center justify-center">
                <div className=" w-[142px] h-[24px] font-poopins font-medium text-[16px] flex gap-1 items-center text-[#616161]">
                  <h1>01</h1>
                  <hr className=" w-[30px] border-t border-[#616161]" />
                  <h1>Bed Room</h1>
                </div>
                <h1 className=" font-semibold text-[26px]">Inner Peace</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
