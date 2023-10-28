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
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
