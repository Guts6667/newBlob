import EmptyBtn from "@/components/(Buttons)/EmptyBtn";
import React from "react";
import SlidingBanner from "../SlidingBanner";

export default function AboutHome() {
  return (
    <section className="flex flex-col gap-50">
      <div>
        <h2>Creative Agency, Steady Partners</h2>

        <p className="mt-25">
          At BLOB-Agency, we're more than just a creative agency, we're your
          unwavering partners in the digital journey.
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-50">
        <EmptyBtn
          text="Let's Meet"
          path={"/contact"}
          customLink={"md:self-end w-full sm:w-fit"}
          customClass={"w-full sm:w-fit"}
        />
        <ul className="text-gray md:text-right">
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
