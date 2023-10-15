"use client";
import React from "react";
import { useState } from "react";
import "./header.scss";
import Image from "next/image";
import Menu from "../Menu";
import defaultImage from "public/images/blob-dark.svg";
import hoverImage from "public/images/blob-gradient.svg";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    const menu = e.target.closest("button");
    menu.classList.toggle("active");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <React.Fragment>
      <header>
        <a href="/">
          <Image
            src={isHovered ? hoverImage : defaultImage}
            alt="blob"
            width={38}
            height={64}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className="logo"
          />
        </a>
        <a href="/contact" className="btn btn-empty btn-contact">
          <button>Let's talk!</button>
        </a>
        <button className="burger" onClick={(e) => toggleMenu(e)}>
          <span className="top"></span>
          <span></span>
          <span className="bottom"></span>
        </button>
      </header>
      {isMenuOpen && <Menu />}
    </React.Fragment>
  );
}
