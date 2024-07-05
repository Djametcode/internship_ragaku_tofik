/* eslint-disable @next/next/no-img-element */
import { shopProductDummy } from "@/dummy/data";

export default function ProductListShopComponent() {
  return (
    <div className=" w-full h-full grid grid-cols-4 place-items-center grid-rows-2 pt-10">
      {shopProductDummy.map((item) => {
        return (
          <>
            <div className=" h-[446px] w-auto font-poopins mt-10 relative">
              <div className=" w-full h-[301px]">
                <img
                  className=" w-full h-full"
                  src={item.image}
                  alt="product"
                />
              </div>
              <div className=" pl-[16px] pt-[16px] pr-[16px] flex flex-col gap-[6px] bg-[#F4F5F7] pb-[30px]">
                <p className=" text-[#3A3A3A] font-semibold text-[24px]">
                  {item.productName}
                </p>
                <p className=" text-[#898989]">{item.description}</p>
                <div className=" flex items-center gap-[16px]">
                  <p className=" text-[#3A3A3A] text-[20px] font-semibold">
                    {item.price.toLocaleString("ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  {item.discount !== 0 ? (
                    <p className="text-[#B0B0B0] text-[16px] font-semibold">
                      {(item.price * (1 - item.discount / 100)).toLocaleString(
                        "id-ID",
                        {
                          style: "currency",
                          currency: "IDR",
                        }
                      )}
                    </p>
                  ) : null}
                </div>
              </div>
              {item.discount !== 0 ? (
                <div className=" absolute top-[13px] right-[13px]">
                  <div className=" bg-[#E97171] w-[48px] h-[48px] rounded-full text-white flex items-center justify-center">
                    <p>-{item.discount}%</p>
                  </div>
                </div>
              ) : null}
            </div>
          </>
        );
      })}
    </div>
  );
}
