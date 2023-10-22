"use client";
import HoneyPot from "@/components/(Contact)/Honeypot";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { useState } from "react";
export default function ContactPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const form = useRef(null);
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

  const budgetRange = [
    "<€2k",
    "€2k-€5k",
    "€5k-€10k",
    "€10k-€20k",
    "€20k-€50k",
    "€50k-€100k",
    ">€100k",
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleBudgetClick = (item) => {
    if (selectedBudget.includes(item)) {
      setSelectedBudget(selectedBudget.filter((i) => i !== item));
    } else {
      setSelectedBudget([item]);
    }
  };

  let template_params = {
    from_name: formData.name,
    from_email: formData.email,
    from_company: formData.company,
    from_project: selectedItems,
    from_budget: selectedBudget,
    from_message: formData.message,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(template_params);
    emailjs
      .send(
        "service_w3hol57",
        "template_ljc7pr3",
        template_params,
        "NFUP3YK2Bta1k2GWK"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // Let's empty the form and show a success message
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
          });
          setSelectedItems([]);
          setSelectedBudget([]);
          alert("Your message has been sent!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <main className="mt-[150px] mb-[100px] flex flex-col gap-50 px-25 md:px-50">
      <div className="text-center">
        <h2>Want to bring your vision to life? Let’s talk!</h2>
        <p className="text-gray font-light">
          Have an idea? We're here to turn it into reality!
        </p>
      </div>
      <HoneyPot />
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-25 md:w-[60%] md:self-center"
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            id="name"
            autoComplete="name"
            placeholder="John Doe"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="text"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@doe.com"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company">Company Name</label>
          <input
            name="company"
            type="text"
            id="company"
            autoComplete="on"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your company name or website?"
            className="py-[10px] border-b-[1px] border-lightgray outline-none font-light focus:border-black"
          />
        </div>
        <div className="flex flex-col gap-25">
          <label htmlFor="project">Your Project?</label>
          <div className="flex flex-wrap gap-25">
            {projectItems.map((item, index) => (
              <button
                id="project"
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
                id="budget"
                key={index}
                type="button"
                className={` px-[25px] py-[15px]  border-[1px] border-lightgray rounded-full hover:shadow-sm hover:shadow-purple ${
                  selectedBudget.includes(item)
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
            id="message"
            cols="30"
            rows=""
            value={formData.message}
            onChange={handleInputChange}
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
