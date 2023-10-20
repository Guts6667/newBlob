"use client";
import React from "react";
import Image from "next/image";
import BtnMenu from "../(Buttons)/BtnMenu";
import { useState } from "react";
import Menu from "../Menu";
import EmptyBtn from "../(Buttons)/EmptyBtn";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleWindowResize = () => {
    console.log("resize");
    if (window.innerWidth > 768) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <React.Fragment>
      <header
        className={`flex flex-row justify-between items-center px-25 lg:px-50 h-100 fixed w-full z-[80] top-0 ${
          isOpen ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Image
          src={`${isOpen ? "/images/blob-white.svg" : "/images/blob-dark.svg"}`}
          priority
          alt="logo"
          width={38}
          height={64}
        />
        <div className="flex flex-row items-center gap-x-[100px]">
          {showBtn && !isOpen && <EmptyBtn path="cont" text="Let's Meet!" />}
          <BtnMenu isOpen={isOpen} handleClick={handleMenuClick} />
        </div>
      </header>
      {isOpen && <Menu handleClick={handleMenuClick} />}
    </React.Fragment>
  );
}

export default Header;
