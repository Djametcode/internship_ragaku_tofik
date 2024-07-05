/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function NavbarComponents() {
  return (
    <div className=" w-screen h-[100px] flex items-center justify-around bg-header">
      <div className=" flex items-center gap-[5px]">
        <Image
          src={"/Meubel House_Logos-05.png"}
          width={50}
          height={32}
          alt="logo"
        />
        <h1 className=" font-montserat font-bold text-[34px]">Furniro</h1>
      </div>
      <div className=" font-poopins font-medium text-[16px] w-[430px] h-[24px] flex justify-between">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Shop</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className=" flex gap-16">
        <Image
          src={"/mdi_account-alert-outline.png"}
          width={28}
          height={28}
          alt="icon"
        />
        <Image
          src={"/akar-icons_search.png"}
          width={28}
          height={28}
          alt="icon"
        />
        <Image
          src={"/akar-icons_heart.png"}
          width={28}
          height={28}
          alt="icon"
        />
        <Image
          src={"/ant-design_shopping-cart-outlined.png"}
          width={28}
          height={28}
          alt="icon"
        />
      </div>
    </div>
  );
}
