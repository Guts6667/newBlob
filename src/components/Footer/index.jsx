import React from "react";
import BtnSocial from "../BtnSocial";
import Link from "next/link";
export default function Footer() {
  const socials = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/blob-agency/",
    },
    {
      name: "Github",
      url: "https://github.com/BLOB-Agency",
    },
    {
      name: "Email",
      url: "mailto:chambet.dev@gmail.com",
    },
    {
      name: "Phone",
      url: "tel:+33 6 44 16 77 76",
    },
    {
      name: "Calendly",
      url: "https://calendly.com/chambet-dev/30min",
    },
  ];
  return (
    <footer className="px-25 lg:px-50 py-50 text-white bg-black mt-[150px] flex flex-col gap-y-50">
      <h2 className="text-[48px] lg:text-[72px] flex">
        <em className="text-gradient text-[48px] lg:text-[72px] not-italic !important">
          BLOB
        </em>
        -Agency
      </h2>
      <p>
        An international digital agency whose mission is to exceed client
        expectations, fostering a digital landscape where excellence thrives.
      </p>
      <div className="flex flex-wrap gap-25 ">
        {socials.map((item, index) => (
          <BtnSocial key={index} url={item.url} text={item.name} />
        ))}
      </div>
      <div className="flex flex-wrap-reverse gap-[10px] lg:justify-between">
        <Link className="text-gray text-[12px]  underline" href={"https://www.freeprivacypolicy.com/live/dda491fd-f903-4664-bc51-10db6fa3153b"}>
            Terms of Service | Privacy Policy
        </Link>
        <span className="text-[12px]  text-gray">
            © 2023 BLOB Agency. All rights reserved.
        </span>
      </div>
        
    </footer>
  );
}
