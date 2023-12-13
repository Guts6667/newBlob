import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, EffectCoverflow, Pagination } from "swiper";

export default function SwiperAbout({ teamId, team, setTeamId }) {
  const handleSlideChange = (swiper) => {
    setTeamId(swiper.realIndex);
  };
  return (
    <>
      <Swiper
        className="w-full h-[500px] md:h-[600px] cursor-grab"
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        controller={true}
        onSlideChange={handleSlideChange}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect="coverflow"
        loop={true}
      >
        {team.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full overflow-hidden rounded-[25px]">
              <Image
                src={`/images/${item.bannerImage}`}
                alt={team[teamId].name}
                fill
                sizes="100%"
                className="w-full h-full object-cover scale-80"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="text-[32px] md:text-[56px]">{team[teamId].catchphrase}</h3>
      <div className="flex flex-col gap-25 md:grid grid-cols-2">
        {team[teamId].description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
}
