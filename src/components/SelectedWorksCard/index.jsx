import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function SelectedWorksCard({ img, title, type, path }) {
  return (
    <article className="flex flex-col ">
      <Link href={path} className="flex flex-col gap-y-25 ">
        <div className="img-wrapper w-full max-w-[1280px] h-[600px]  rounded-[25px] overflow-hidden relative">
          <Image
            src={`/images/${img}`}
            alt={title}
            priority
            fill
            objectFit="cover"
            className="brightness-50 scale-150 hover:scale-100 hover:brightness-100 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex justify-between">
          <div >
            <h3>{title}</h3>
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
