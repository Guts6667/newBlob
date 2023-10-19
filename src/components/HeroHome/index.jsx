import React from "react";
import "./herohome.scss";
import EmptyBtn from "../EmptyBtn";
import PlainBtn from "../PlainBtn";
export default function HeroHome() {
  return (
    <section className="flex flex-col gap-y-50">
      <h1 className="text-[64px] lg:text-[104px] font-semibold">
        Designing Tomorrow,
        <br />
        <em className="move-text ">
          <span className="today text-gradient text-[64px] lg:text-[104px] font-semibold">Today</span>
          <span className="together text-gradient text-[64px] lg:text-[104px] font-semibold">Together</span>
        </em>
      </h1>
      <div className="flex flex-col justify-between lg:flex-row gap-y-50">
        <PlainBtn path="contact" text="Let's Meet!" />
        <p className="lg:w-[50%]">
          Our motto is more than words. It's our commitment. We believe in
          designing tomorrow's solutions today with our clients. It's about
          creativity, partnership, and expertise combined to shape a brighter
          digital future.
        </p>
      </div>
    </section>
  );
}
