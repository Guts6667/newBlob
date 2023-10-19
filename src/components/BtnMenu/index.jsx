
import React from "react";
import "./btnMenu.scss";
export default function BtnMenu({ isOpen, handleClick}) {
  return (
    <button
      className={`btn-menu flex block relative `}
      onClick={handleClick}
    >
      <span
        className={`icon-bar w-[30px] h-[1px] bg-black  ${
          isOpen ? "rotate-45 absolute bg-white" : ""
        }`}
      ></span>
      <span
        className={`icon-bar w-[30px] h-[1px] bg-black ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`icon-bar  w-[30px] h-[1px] bg-black ${
          isOpen ? "rotate-[-45deg] absolute bg-white" : ""
        }`}
      ></span>
    </button>
  );
}
