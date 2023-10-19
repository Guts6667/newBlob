import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PlainBtn({ path, text, customClass }) {
  return (
    <Link href={`/${path}`}>
      <button
        className={`rounded-full text-center py-[10px] px-[30px] w-fit flex justify-center items-center gap-x-[10px] text-white bg-black from-purple to-peach hover:bg-gradient-to-r  ${customClass}} !important`}
      >
        <span>{text}</span>
        <Image
          src="/images/icon-right-white.svg"
          width={20}
          height={20}
          alt="arrow-right"
        />
      </button>
    </Link>
  );
}
