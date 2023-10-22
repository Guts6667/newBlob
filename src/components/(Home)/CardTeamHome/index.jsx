import Image from "next/image";
import React from "react";

export default function CardTeamHome({ image, name, role }) {
  return (
    <article className="flex flex-col items-center align-center text-center">
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image
          src={`/images/${image}`}
          fill
          objectFit="cover"
          alt={name}
          className=""
          priority
        />
      </div>
      <div>
        <span className="font-semibold text-[20px]">{name}</span>
        <p className="font-normal text-[16px] text-gray">{role}</p>
      </div>
    </article>
  );
}
