import React from "react";
import Image from "next/image";
import EmptyBtn from "@/components/(Buttons)/EmptyBtn";
export default function ExperiencesAbout({ team, teamId}) {
  return (
    <div className="flex flex-col-reverse gap-50 mt-50 md:flex-row-reverse justify-between md:grid md:grid-cols-2">
         <div className="flex flex-col items-center gap-25 md:items-start">
        <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
          <Image
            src={`/images/${team[teamId].image}`}
            alt={team[teamId].name}
            fill
            objectFit="cover"
          />
        </div>
        <EmptyBtn text="Let's Meet" path={"contact"} />
      </div>
      <div className=" flex flex-col items-center gap-25 text-center md:text-left md:items-start ">
        <h2 className="text-[40px]">EXPERIENCES</h2>
        {team[teamId].experiences.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}
