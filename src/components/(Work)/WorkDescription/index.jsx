import React from "react";
import BtnWebsite from "@/components/(Buttons)/BtnWebsite";
export default function WorkDescription({ work }) {
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-y-50">
      <div className=" flex flex-col gap-y-25  lg:w-[40%]">
        <aside className="flex flex-col gap-y-25">
          <div>
            <h4>Date</h4>
            <span className="text-gray">{work.date}</span>
          </div>
          <div className>
            <h4>Client Name</h4>
            <span className="text-gray">{work.client}</span>
          </div>
          <div className="flex flex-col">
            <h4>Services</h4>
            {work.service.map((item, index) => (
              <span key={index} className="text-gray">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            <h4>Features</h4>
            {work.features.map((item, index) => (
              <span key={index} className="text-gray">
                {item}
              </span>
            ))}
          </div>
        </aside>
        {work.url && (
          <div >
            <BtnWebsite path={work.url} text="Visit Website" />
          </div>
        )}
      </div>
      <div className="lg:w-[70%] flex flex-col gap-y-50">
        {work.ourClient && (
          <div>
            <h3>Our Client</h3>
            <p>{work.ourClient}</p>
          </div>
        )}
        {work.context && (
          <div>
            <h3>Context</h3>
            <p>{work.context}</p>
          </div>
        )}
        {work.goal && (
          <div>
            <h3>Goal</h3>
            <p>{work.goal}</p>
          </div>
        )}
        {work.solution && (
          <div>
            <h3>Solution</h3>
            <p>{work.solution}</p>
          </div>
        )}
      </div>
    </div>
  );
}
