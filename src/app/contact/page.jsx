"use client";
import React from "react";
import { useState } from "react";
export default function ContactPage() {
  const projectItems = [
    "Web Development",
    "Mobile App",
    "Web Design",
    "Ecommerce",
    "Logo Design",
    "Graphic Design",
    "Branding",
    "Illustration",
    "Other",
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const budgetRange = [
    "<€2k",
    "€2k-€5k",
    "€5k-€10k",
    "€10k-€20k",
    "€20k-€50k",
    "€50k-€100k",
    ">€100k",
  ];
  // Let's make a function to handle the budget click, the user should be able to select only one budget range
  const handleBudgetClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([item]);
    }
  };

  // Let's make the form work using netlify forms

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        alert("Success!");
        form.reset();
      })
      .catch((error) => alert(error));
  }

  return (
    <main className="mt-[150px] mb-[100px] flex flex-col gap-50 px-25 md:px-50">
      <div className="text-center">
        <h2>Want to bring your vision to life? Let’s talk!</h2>
        <p className="text-gray font-light">
          Have an idea? We're here to turn it into reality!
        </p>
      </div>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form
        name="contact"
        netlify
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-25 md:w-[60%] md:self-center"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="contact" value="contact" />
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="text"
            placeholder="john@doe.com"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company">Company Name</label>
          <input
            name="company"
            type="text"
            placeholder="Your company name or website?"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col gap-25">
          <label htmlFor="project">Your Project?</label>
          <div className="flex flex-wrap gap-25">
            {projectItems.map((item, index) => (
              <button
                key={index}
                type="button"
                className={` px-[25px] py-[15px]  border-[1px] border-lightgray rounded-full hover:shadow-sm hover:shadow-purple ${
                  selectedItems.includes(item)
                    ? "border-gradient-perm"
                    : "border-black text-black"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-25">
          <label htmlFor="budget">Your Budget?</label>
          <div className="flex flex-wrap gap-25">
            {budgetRange.map((item, index) => (
              <button
                key={index}
                type="button"
                className={` px-[25px] py-[15px]  border-[1px] border-lightgray rounded-full hover:shadow-sm hover:shadow-purple ${
                  selectedItems.includes(item)
                    ? "border-gradient-perm"
                    : "border-black text-black"
                }`}
                onClick={() => handleBudgetClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows=""
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-[15px] px-[25px] rounded-full sm:w-fit  hover:shadow hover:shadow-purple transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
