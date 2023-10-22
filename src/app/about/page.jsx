import HeaderAbout from "@/components/(About)/HeaderAbout";
import MainAbout from "@/components/(About)/MainAbout";
import React from "react";

export default async function AboutPage() {
  const datas = await import("/public/datas/team.json");
  const team = datas.default;
  return (
    <div className="mt-[200px] px-25 md:px-50 flex flex-col gap-50">
      <HeaderAbout />
      <MainAbout team={team} />
    </div>
  );
}
