import React from 'react'
import Image from 'next/image'
export default function CarouselAbout({ team, teamId, navigateLeft, navigateRight }) {
  return (
    <>
    <div className=" w-full  rounded-[25px] overflow-hidden relative h-[500px] md:h-[600px]">
        <Image
          src={`/images/${team[teamId].bannerImage}`}
          alt={team[teamId].name}
          fill
          objectFit="cover"
        />
        <div className="absolute w-full bottom-0 px-[25px] pb-[25px]  flex justify-between  ">
          <button onClick={navigateLeft}>
            <Image
              src="/images/btn-left.svg"
              alt="arrow-left"
              width={50}
              height={50}
            />
          </button>
          <button onClick={navigateRight}>
            <Image
              src="/images/btn-right.svg"
              alt="arrow-right"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      <h3 className="text-[32px] md:text-[56px]">{team[teamId].catchphrase}</h3>
      <div className="flex flex-col gap-25 md:grid grid-cols-2">
        {team[teamId].description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  )
}
