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
      className={`cursor-pointer flex flex-wrap gap-25 p-25 w-full md:w-[30%] border border-gray border-[.5px] rounded-[25px] transition-width transition-300 bg-transparent border-gradient ${
        showServices ? " lg:w-[40%] border-gradient-perm" : ""
      }`}
    >
      <div className="flex flex-col gap-y-25 text-center items-center">
        <div className="bg-lightgray p-[10px] rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center">
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
        <div className="flex flex-wrap gap-25 justify-between">
          {service.services.map((item, index) => (
            <div key={index} className="lg:w-[200px] xl:w-[45%]">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
