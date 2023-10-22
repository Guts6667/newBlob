import React from "react";
import PlainBtn from "@/components/(Buttons)/PlainBtn";
export default function HeaderAbout() {
  return (
    <div className="flex flex-col gap-25 md:flex-row">
      <div className="font-semibold">
        <span className="text-[28px] ">MEET OUR TEAM</span>
        <h1 className="text-[48px] md:[text-56px]">
          Get to know the dedicated and innovative minds behind BLOB-Agency
        </h1>
      </div>
      <div className="flex flex-col justify-between gap-25">
        <p>
          Get to know the dedicated and innovative minds behind BLOB-Agency, a
          team that blends technical prowess with entrepreneurial spirit to
          create exceptional digital experiences.
        </p>
        <PlainBtn
          text="Let's Meet!"
          path={"contact"}
          customLink={" md:self-end"}
          customClass={"w-full sm:w-fit"}
        />
      </div>
    </div>
  );
}
