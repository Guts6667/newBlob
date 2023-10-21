import React from "react";
import WorkCard from "../../WorkCard";
export default async function SelectedWorks() {
  const datasSelectedWork = await import("/public/datas/works.json");
  const selectedWorks = datasSelectedWork.default.slice(0, 3);
  return (
    <section className="flex flex-col m-y-50 gap-y-50">
      <h2>Selected Works</h2>
      {selectedWorks.map((item, index) => {
        return (
          <WorkCard
            key={index}
            img={item.mainImage}
            client={item.client}
            type={item.type}
            path={"/works/" + item.id}
            customClass={"h-[500px] md:h-[600px]"}
          />
        );
      })}
    </section>
  );
}
