import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function SocialsAbout({ team, teamId }) {
  return (
    <div className="flex flex-col gap-50 mt-50">
      <h2 className="text-[40px]">FOLLOW ME</h2>
      <div className="flex flex-wrap gap-25">
        {team[teamId].social.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="relative w-50 h-50 rounded-full bg-black flex items-center justify-center hover:animate-pulse"
          >
            <Image
              src={`/images/${item.icon}`}
              alt={item.icon}
              width={25}
              height={25}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
