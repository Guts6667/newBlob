import EmptyBtn from "@/components/EmptyBtn";
import Image from "next/image";
// import fs from "fs/promises";
import BtnWebsite from "@/components/BtnWebsite";
export default async function WorkPage(workId) {

  const datas = await import("/public/datas/works.json");
  const work = datas.default.find((item) => item.id === workId.params.workId);
  // const selectedWorkId = workId.params.workId;
  // console.log(selectedWorkId);
  // const datasSelectedWork = await fs.readFile(
  //   process.cwd() + "/public/datas/works.json",
  //   "utf8"
  // );
  // const selectedWorks = JSON.parse(datasSelectedWork);
  // const work = selectedWorks.find((item) => item.id === selectedWorkId);
  // console.log(work);

  return (
    <main className="flex flex-col gap-y-100 mt-[150px] px-25 lg:px-50 gap-y-50">
      <div>
        <span>{work.client}</span>
        <h1 className=" text-[40px] lg:text-[56px]">{work.title}</h1>
      </div>
      <div className="img-wrapper w-full  h-[600px]  rounded-[25px] overflow-hidden relative">
        <Image
          src={`/images/${work.mainImage}`}
          alt={work.client}
          priority
          fill
          objectFit="cover"
        />
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-y-50">
        <div className=" flex flex-col gap-y-25  lg:w-[40%]">
          <aside className="flex flex-col gap-y-25">
            <div>
              <h4>Date</h4>
              <span className="text-gray">{work.date}</span>
            </div>
            <div className>
              <h4>Client Name</h4>
              <span className="text-gray">{work.client}</span>
            </div>
            <div className="flex flex-col">
              <h4>Services</h4>
              {work.service.map((item, index) => (
                <span key={index} className="text-gray">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <h4>Features</h4>
              {work.features.map((item, index) => (
                <span key={index} className="text-gray">
                  {item}
                </span>
              ))}
            </div>
          </aside>
          <div className="">
            <BtnWebsite path={work.url} text="Visit Website" />
          </div>
        </div>
        <div className="lg:w-[70%] flex flex-col gap-y-50">
          <div>
            <h3>Our Client</h3>
            <p>{work.ourClient}</p>
          </div>
          <div>
            <h3>Context</h3>
            <p>{work.context}</p>
          </div>
          <div>
            <h3>Goal</h3>
            <p>{work.goal}</p>
          </div>
          <div>
            <h3>Solution</h3>
            <p>{work.solution}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-25">
        {work.pictures.map((item, index) => (
          <div
            key={index}
            className={`w-full  h-[600px] rounded-[25px] overflow-hidden relative ${
              index == 2 ? "lg:col-span-3" : ""
            }`}
          >
            <Image
              src={`/images/${item}`}
              fill
              objectFit="cover"
              alt={work.client}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
