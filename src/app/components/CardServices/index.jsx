"use client";
import React from "react";
import Image from "next/image";
import "./cardservices.scss";
export default function CardService({ icon, title, description, services }) {
  console.log(services);
  function showContent(e) {
    const article = e.target.closest("article");
    article.classList.toggle("active");
    const content =
      e.target.closest("article").lastElementChild;
    content.classList.toggle("hidden");
    const text = e.target.closest("article").children[1];
    text.classList.toggle("hidden");
  }
  return (
    <article className="card__service" onClick={(e) => showContent(e)}>
      <div className="card__service-img">
        <Image src={`/images/${icon}`} width={25} height={25} />
      </div>
      <div className="card__service-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card__service-content hidden">
        {services.map((service, index) => (
          <div key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
