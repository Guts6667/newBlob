import Image from "next/image";
import WorkCarousel from "@/components/(Work)/WorkCarousel";
import WorkDescription from "@/components/(Work)/WorkDescription";
import WorkImageGrid from "@/components/(Work)/WorkImageGrid";
export default async function WorkPage(workId) {
  const datas = await import("/public/datas/works.json");
  const works = datas.default;
  const work = works.find((item) => item.id == workId.params.workId);
  let nextWorkId;
  if (parseInt(workId.params.workId) === works.length - 1) {
    nextWorkId = "0";
  } else {
    nextWorkId = (parseInt(workId.params.workId) + 1).toString();
  }
  const nextWork = works.find((item) => item.id === nextWorkId);

  let previousWorkId;
  if (parseInt(workId.params.workId) === 0) {
    previousWorkId = (works.length - 1).toString();
  } else {
    previousWorkId = (parseInt(workId.params.workId) - 1).toString();
  }
  const previousWork = works.find((item) => item.id == previousWorkId);

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
      <WorkDescription work={work} />
      <WorkImageGrid work={work} />
      <WorkCarousel previousWork={previousWork} nextWork={nextWork} />
    </main>
  );
}
