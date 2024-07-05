/* eslint-disable @next/next/no-img-element */
export default function HeaderImagesComponents() {
  return (
    <div className="h-[316px] w-screen flex flex-col relative items-center justify-center bg-shopcover bg-cover bg-center">
      <div className="absolute top-0 inset-0 bg-white opacity-50"></div>
      <div className="relative z-10 font-poopins p-4">
        <h1 className="text-[#000000] text-[48px]">Shop</h1>
        <div className=" flex gap-1">
          <h1>Home</h1>
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-contain"
              src="/dasharrow.png"
              alt="Arrow"
            />
          </div>
          <h1 className=" font-light">Shop</h1>
        </div>
      </div>
    </div>
  );
}
