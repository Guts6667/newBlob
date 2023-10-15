import React from "react";
import "./menu.scss";
import Image from "next/image";
export default function Menu() {
  return (
    <section className="section-menu menu-animation">
      <nav className="text-40">
        <ul>
          <li>
            <a href="/">
              <span>Home</span>{" "}
              <Image
                src={"/images/icon-menu.svg"}
                alt="arrow-right"
                size={3 / 2}
                width={60}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="/about">
              <span>About Us</span>{" "}
              <Image
                src={"/images/icon-menu.svg"}
                alt="arrow-right"
                size={3 / 2}
                width={60}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="/works">
              <span>Works</span>{" "}
              <Image
                src={"/images/icon-menu.svg"}
                alt="arrow-right"
                size={3 / 2}
                width={60}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>Contact</span>{" "}
              <Image
                src={"/images/icon-menu.svg"}
                alt="arrow-right"
                size={3 / 2}
                width={60}
                height={40}
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
