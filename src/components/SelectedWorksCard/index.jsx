import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SelectedWorksCard({ img, client, type, path }) {
  console.log("path:", path)
  return (
    <article className="flex flex-col ">
      <Link href={path}  className="flex flex-col gap-y-25 ">
        <div className="img-wrapper w-full  h-[600px]  rounded-[25px] overflow-hidden relative">
          <Image
            src={`/images/${img}`}
            alt={client}
            priority
            fill
            objectFit="cover"
            className="brightness-50 scale-150 hover:scale-100 hover:brightness-100 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <h3>{client}</h3>
            <span>{type}</span>
          </div>
          <button>
            <Image
              src={"/images/icon-menu.svg"}
              width={70}
              height={50}
              alt="arrow-right"
            ></Image>
          </button>
        </div>
      </Link>
    </article>
  );
}
