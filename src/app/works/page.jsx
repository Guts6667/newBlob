import React from "react";
import SelectedWorksCard from "@/components/SelectedWorksCard";
import { promises as fs } from "fs";
export default async function WorkPage() {
  const datasSelectedWork = await fs.readFile(
    process.cwd() + "/public/datas/works.json",
    "utf8"
  );
  const selectedWorks = JSON.parse(datasSelectedWork);
  return (
    <section className="flex flex-col m-y-50 gap-y-50 px-25 lg:px-50 mt-[150px]">
      <h2>Disover Our Works</h2>
      {selectedWorks.map((item, index) => {
        return (
          <SelectedWorksCard
            key={index}
            img={item.mainImage}
            client={item.client}
            type={item.type}
            path={"/works/" + item.id}
          />
        );
      })}
    </section>
  );
}
