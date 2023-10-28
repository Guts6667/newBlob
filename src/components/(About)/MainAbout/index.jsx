"use client";
import React from "react";
import { useState } from "react";
import SocialsAbout from "../SocialsAbout";
import ExperiencesAbout from "../ExperiencesAbout";
import SwiperAbout from "../SwiperAbout";
export default function MainAbout({ team }) {
  const [teamId, setTeamId] = useState(0);

  const navigateLeft = () => {
    if (teamId === 0) {
      setTeamId(team.length - 1);
    } else {
      setTeamId(teamId - 1);
    }
  };
  const navigateRight = () => {
    if (teamId === team.length - 1) {
      setTeamId(0);
    } else {
      setTeamId(teamId + 1);
    }
  };

  return (
    <main className="flex flex-col gap-50 transition-all duration-[500]">
      {team && (
        <>
          <SwiperAbout team={team} teamId={teamId} setTeamId={setTeamId} />
          <ExperiencesAbout team={team} teamId={teamId} />
          <SocialsAbout team={team} teamId={teamId} />
        </>
      )}
    </main>
  );
}
