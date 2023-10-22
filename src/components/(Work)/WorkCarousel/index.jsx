import React from "react";
import Link from "next/link";
import Image from "next/image";
import SelectedWorksCard from "@/components/WorkCard";
export default function WorkCarousel({ previousWork, nextWork }) {
  return (
    <div className="flex flex-col justify-between gap-50">
      <div className=" border-b-[.5px] border-gray">
        <h2 className="text-[56px]">See More</h2>
      </div>

      <Link href="/works" className="hidden sm:flex gap-5 self-end">
        <span className="text-[24px] sm:text-[32px]">View All Works </span>
        <Image
          src={"/images/arrow-right.svg"}
          width={20}
          height={20}
          alt="arrow right"
        />{" "}
      </Link>
      <div className="grid  md:grid-cols-2 gap-50 ">
        {previousWork && (
          <SelectedWorksCard
            img={previousWork.mainImage}
            client={previousWork.client}
            type={previousWork.type}
            path={"/works/" + previousWork.id}
            customClass={"h-[300px]"}
          />
        )}
        {nextWork && (
          <SelectedWorksCard
            img={nextWork.mainImage}
            client={nextWork.client}
            type={nextWork.type}
            path={"/works/" + nextWork.id}
            customClass={"h-[300px]"}
          />
        )}
      </div>
      <Link href="/works" className="flex gap-5 self-center sm:hidden">
        <span className="text-[24px] sm:text-[32px]">View All Works </span>
        <Image
          src={"/images/arrow-right.svg"}
          width={20}
          height={20}
          alt="arrow right"
        />{" "}
      </Link>
    </div>
  );
}
