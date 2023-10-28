import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WorkCard({ img, client, type, path, customClass }) {
  console.log("path:", path);
  return (
    <article className="flex flex-col hover:scale-105 transition-all duration-400">
      <Link href={path} className="flex flex-col gap-y-25 ">
        <div
          className={`img-wrapper w-full  rounded-[25px] overflow-hidden relative ${customClass}`}
        >
          <Image
            src={`/images/${img}`}
            alt={client}
            priority
            quality={100}
            fill
            sizes="100%"
            className="object-cover brightness-50 scale-150 hover:scale-100 hover:brightness-100 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <h3>{client}</h3>
            <span>{type}</span>
          </div>
          <button >
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
