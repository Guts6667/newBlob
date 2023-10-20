import React from "react";
import SelectedWorksCard from "../../SelectedWorksCard";
import { promises as fs } from "fs";
export default async function SelectedWorks() {
  const datasSelectedWork = await fs.readFile(
    process.cwd() + "/public/datas/works.json",
    "utf8"
  );
  const selectedWorks = JSON.parse(datasSelectedWork).slice(0, 3);
  return (
    <section className="flex flex-col m-y-50 gap-y-50">
      <h2>Selected Works</h2>
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
