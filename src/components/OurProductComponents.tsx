/* eslint-disable @next/next/no-img-element */
import { productDummy } from "@/dummy/data";

export default function OurProductsComponent() {
  return (
    <div className=" w-[1236px] h-full">
      <div className=" font-poopins font-bold text-[40px] text-center">
        <h1>Our Products</h1>
      </div>
      <div className=" w-full h-full grid grid-cols-4 grid-rows-2">
        {productDummy.map((item) => {
          return (
            <>
              <div className=" h-[446px] w-[285px] font-poopins mt-10 relative">
                <div className=" w-full h-[301px]">
                  <img src={item.image} alt="product" />
                </div>
                <div className=" pl-[16px] pt-[16px] flex flex-col gap-[6px] bg-[#F4F5F7] pb-[30px]">
                  <p className=" text-[#3A3A3A] font-semibold text-[24px]">
                    {item.productName}
                  </p>
                  <p className=" text-[#898989]">{item.description}</p>
                  <p className=" text-[#3A3A3A] text-[20px] font-semibold">
                    {item.price.toLocaleString("ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
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
      <div className=" w-full flex justify-center mt-[30px]">
        <div className="w-[245px] h-[48px] font-semibold text-[16px] text-[#B88E2F]">
          <button className=" w-full h-full border-[#B88E2F] border">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
