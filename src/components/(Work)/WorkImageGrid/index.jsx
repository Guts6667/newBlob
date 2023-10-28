import React from "react";
import Image from "next/image";
export default function WorkImageGrid({ work }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-50 justify-between">
      {work.pictures.map((item, index) => (
        <div
          key={index}
          className={`w-full  h-[600px] rounded-[25px] overflow-hidden relative ${
            index == 2 ? "lg:col-span-3" : ""
          }`}
        >
          <Image
            src={`/images/${item}`}
            fill
            quality={100}
            sizes="100%"
            className="object-cover"
            alt={work.client}
          />
        </div>
      ))}
    </div>
  );
}
