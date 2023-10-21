import Link from "next/link";
import React from "react";

export default function PreFooter() {
  return (
    <section className="flex flex-col text-center gap-25 border-lightgray border-t-[1px] py-50">
      <h4 className="font-semibold sm:text-[32px]">Have an idea?</h4>
      <span className="flex flex-wrap items-center gap-[10px] justify-center text-[40px] sm:text-[72px] font-semibold" >
        Let's get <span className="text-gradient text-[40px] sm:text-[72px] "> started</span>
      </span>

      <div className=" flex gap-25 sm:gap-50 justify-center underline font-bold">
        <Link href="/about">ABOUT US</Link>
        <Link href="/works">WORKS</Link>
        <Link href="/onboarding">ONBOARDING</Link>
      </div>
    </section>
  );
}
