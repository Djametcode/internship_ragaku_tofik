import Link from "next/link";

export default function FooterComponents() {
  return (
    <div className=" w-screen h-[505px] pl-24 pt-14 pr-24 pb-14 font-poopins">
      <div className=" grid grid-cols-4 grid-flow-col">
        <div>
          <h1 className=" bg-black font-bold text-[24px]">Funiro.</h1>
          <p className=" text-[#9F9F9F] text-[16px] max-w-[300px]">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>
        <div className=" grid grid-rows-5 grid-flow-col">
          <h1 className=" text-[#9F9F9F]">Links</h1>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <h1 className=" text-[#9F9F9F]">Help</h1>
          <Link href={"/"}>Payment Options</Link>
          <Link href={"/"}>Returns</Link>
          <Link href={"/"}>Privacy Policies</Link>
          <h1 className=" text-[#9F9F9F]">Newsletter</h1>
          <div className=" flex">
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
