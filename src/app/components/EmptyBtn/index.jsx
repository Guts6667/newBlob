"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./emptybtn.scss";
export default function EmptyBtn({ path, text, classes }) {
  useEffect(() => {
    console.log(path, text);
  }, []);

  return (
    <a href={`/${path}`} className={`btn btn-empty btn-contact ${classes}`}>
      <button>
        <span className="text-20">{text}</span>
        <Image
          src="/images/arrow-right.svg"
          alt="arrow"
          width={20}
          height={16}
        />
      </button>
    </a>
  );
}
