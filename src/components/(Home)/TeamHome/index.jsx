import EmptyBtn from "@/components/(Buttons)/EmptyBtn";
import CardTeamHome from "@/components/(Home)/CardTeamHome";
import React from "react";

export default async function TeamHome() {
  const datas = await import("/public/datas/team.json");
  const team = datas.default;
  const achievements = [
    {
      title: "Projects",
      description: "2024 - 14 Projects",
    },
    {
      title: "Websites",
      description: "2024 - 8 Projects",
    },
    {
      title: "Applications",
      description: "2024 - 2 Web-applications - 1 Mobile-Application",
    },
    {
      title: "Consulting",
      description: "2024 - 3 Projects",
    },
  ];
  return (
    <section className="flex flex-col gap-y-50">
      <h2>Team & Achievements</h2>

      <div className="flex flex-wrap justify-center mt-50  gap-50 ">
        {team.map((item, id) => (
          <CardTeamHome
            key={id}
            image={item.image}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-50 mt-50">
        <EmptyBtn
          text="Meet The Team"
          path={"about"}
          customLink={" "}
          customClass={"w-full sm:w-fit "}
        />
        <div className="flex flex-col gap-25 grow">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col gap-[10px] grow-2 border-b-[1px] border-black pb-25">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
