import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./menu.scss";
export default function Menu({ handleClick }) {
  return (
    <nav className="px-25 lg:px-50 flex flex-col items-center h-[100vh] w-full gap-y-[50px] menu-anim bg-black text-white z-[80] fixed top-[100px] pt-[50px]">
      <Link
        href="/"
        className="w-full pt-50 border-t-[.5px] border-gray "
        onClick={handleClick}
      >
        <div className=" font-bold flex justify-between w-full">
          <span className="text-[40px] lg:text-[72px]">Home</span>
          <Image
            src={"/images/icon-menu-white.svg"}
            alt="arrow-right"
            width={60}
            height={40}
          />
        </div>
      </Link>
      <Link href="/about" className="w-full group" onClick={handleClick}>
        <div className=" font-bold flex justify-between w-full">
          <span className="text-[40px] lg:text-[72px]">About</span>
          <Image
            src={"/images/icon-menu-white.svg"}
            alt="arrow-right"
            width={60}
            height={40}
          />
        </div>
      </Link>
      <Link href="/works" className="w-full" onClick={handleClick}>
        <div className=" font-bold flex justify-between w-full">
          <span className="text-[40px] lg:text-[72px]">Works</span>
          <Image
            src={"/images/icon-menu-white.svg"}
            alt="arrow-right"
            width={60}
            height={40}
          />
        </div>
      </Link>
      <Link
        href="/contact"
        className="w-full pb-50 border-b-[.5px] border-gray"
        onClick={handleClick}
      >
        <div className=" font-bold flex justify-between w-full">
          <span className="text-[40px] lg:text-[72px]">Contact</span>
          <Image
            src={"/images/icon-menu-white.svg"}
            alt="arrow-right"
            width={60}
            height={40}
          />
        </div>
      </Link>
    </nav>
  );
}
