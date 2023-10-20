import React from "react";

export default function SlidingBanner() {
  const words = [
    "A.C. VENTURES",
    "SAUDI EXCELLENCE CO",
    "A.G. DESIGNS",
    "SARAH ROI",
    "EDGE DYNAMICS",
    "MBUZZ",
    "SCIENCES CO",
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden text-lightgray font-semibold mt-50 ">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        {words.map((word, index) => {
          return <li key={index} className="w-max text-[24px] md:text-[36px]">{word}</li>;
        })}
      </ul>
      <ul
        className="  flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
        aria-hidden="true"
      >
        {words.map((word, index) => {
          return <li key={index} className="w-max text-[24px] md:text-[36px]">{word}</li>;
        })}
      </ul>
    </div>
  );
}
