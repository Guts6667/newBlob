import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BtnWebsite({ path, text, customClass }) {
  return (
    <Link href={`/${path}`} target="_blank">
      <button
        className={`rounded-full border border-black bg-transparent text-center py-[10px] px-[30px] w-fit flex justify-center items-center gap-x-[10px]  border-gradient  ${customClass}}`}
      >
        <span>{text}</span>
        <Image
          src="/images/icon-up-right.svg"
          width={18}
          height={18}
          alt="arrow-up-right"
        />
      </button>
    </Link>
  );
}
