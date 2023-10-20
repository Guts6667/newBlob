import EmptyBtn from "@/components/(Buttons)/EmptyBtn";
import React from "react";
import SlidingBanner from "../SlidingBanner";

export default function AboutHome() {
  return (
    <section className="flex flex-col gap-25">
      <h2>Creative Agency, Steady Partners</h2>

      <p>
        At BLOB-Agency, we're more than just a creative agency, we're your
        unwavering partners in the digital journey.
      </p>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-25">
        <EmptyBtn text="Let's Meet" path={"/"} customLink={"md:self-end"} customClass={"sm:w-full"} />
        <ul className="text-gray">
          <li>CREATIVE DESIGN</li>
          <li>WEBSITE DEVELOPMENT</li>
          <li>PRODUCT MANAGEMENT</li>
          <li>APPLICATION DEVELOPMENT</li>
        </ul>
      </div>
      <SlidingBanner />
    </section>
  );
}
