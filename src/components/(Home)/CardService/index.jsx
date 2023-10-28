"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function CardService({ service }) {
  const [showServices, setShowServices] = useState(false);
  const handleClick = (e) => {
    setShowServices(!showServices);
  };
  return (
    <article
      onClick={(e) => handleClick(e)}
      className={`cursor-pointer  gap-25 p-25 w-full  border border-gray border-[.5px] rounded-[25px] transition-all transition-400 hover:scale-105 hover:shadow-md bg-transparent border-gradient ${
        showServices
          ? "md:row-span-2 lg:row-span-2 border-gradient-perm flex flex-wrap justify-center "
          : ""
      }`}
    >
      <div className="flex flex-col gap-y-25 text-center items-center">
        <div className="self-center bg-lightgray p-[10px] rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center">
          <Image
            src={`/images/${service.icon}`}
            width={20}
            height={20}
            alt={service.icon}
          />
        </div>
        {!showServices && (
          <div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        )}
      </div>

      {showServices && (
        <div className="grid gap-[24px] grid-col lg:grid-cols-2 justify-betwee, text-center lg:text-left">
          {service.services.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
