import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PlainBtn({ path, text, customClass, customLink }) {
  return (
    <Link href={`/${path}`} className={`${customLink}`}>
      <button
        className={`rounded-full text-center py-[10px] px-[30px]  flex justify-center items-center gap-x-[10px] text-white bg-black from-purple to-peach hover:bg-gradient-to-r group  ${customClass} !important`}
      >
        <span>{text}</span>
        <Image
          src="/images/icon-right-white.svg"
          width={20}
          height={20}
          alt="arrow-right"
          className="group-hover:-rotate-45 transition-all duration-400"
        />
      </button>
    </Link>
  );
}
