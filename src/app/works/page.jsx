import React from "react";
import SelectedWorksCard from "@/components/SelectedWorksCard";
export default async function WorkPage() {
  const datas = await import("/public/datas/works.json");
  const selectedWorks = datas.default;
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