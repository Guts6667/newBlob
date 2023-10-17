import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./CardSelectedWork.scss";
export default function CardSelectedWork({ img, title, type, path }) {
  return (
    <article className="cardSelectedWork">
      <Link href={path}>
        <div className="cardSelectedWork-imgWrapper">
          <Image src={`/images/${img}`} alt={title} fill objectFit="cover" />
        </div>
        <div className="cardSelectedWork-content">
          <div className="card-selected-work__text">
            <h3>{title}</h3>
            <span>{type}</span>
          </div>
          <button>
            <Image
              src={"/images/arrow-right.svg"}
              width={18}
              height={15}
            ></Image>
          </button>
        </div>
      </Link>
    </article>
  );
}
