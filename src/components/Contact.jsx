"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { lightgithub, linkedin } from "@/assets";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    email: null,
    name: null,
    message: null
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = {};
    for (const key in form) {
      if (form[key] === "" || form[key] === null || form[key] === undefined) {
        newErrors[key] = `The ${key} field cannot be empty.`;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_email: form.email,
          from_name: form.name,
          message: form.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({ email: "", name: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Whoops something went wrong. Please try again.");
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-center gap-10`}>
      <div className="flex xl:flex-1 justify-center">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-auto bg-teal-900 rounded-2xl md:max-w-3xl shadow-card">
          <div className="relative p-4 sm:p-8">
            {loading && (
              <div className="absolute inset-0 bg-black opacity-50 z-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white font-bold text-xl"></div>
              </div>
            )}
            <div className="flex items-center justify-center gap-x-4">
              <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Let's connect</p>
              <div className="flex flex-row gap-2">
                <Link href="https://www.linkedin.com/in/kevin-ooi-43b512115/" target="_blank" rel="noopener noreferrer">
                  <Image src={linkedin} alt="Linkedin Icon" />
                </Link>
                <Link href="https://github.com/kevinooi" target="_blank" rel="noopener noreferrer">
                  <Image src={lightgithub} alt="Github Icon" className="w-12 h-12 object-contain" />
                </Link>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-white font-medium text-xs sm:text-lg mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="bg-tertiary py-4 px-2 sm:px-6 placeholder:text-secondary text-primary text-xs sm:text-lg rounded-lg outline-none border-none font-medium"
                />
              </label>
              <div className="relative mt-2">
                {errors.email && <span className="text-red-500 text-xs absolute bottom-0">{errors.email}</span>}
              </div>
              <label className="flex flex-col">
                <span className="text-white font-medium text-xs sm:text-lg mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-2 sm:px-6 placeholder:text-secondary text-primary text-xs sm:text-lg rounded-lg outline-none border-none font-medium"
                />
              </label>
              <div className="relative mt-2">
                {errors.name && <span className="text-red-500 mt-2 text-xs absolute bottom-0">{errors.name}</span>}
              </div>
              <label className="flex flex-col">
                <span className="text-white font-medium text-xs sm:text-lg mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Let's talk about..."
                  className="bg-tertiary py-4 px-2 sm:px-6 placeholder:text-secondary text-primary text-xs sm:text-lg rounded-lg outline-none border-none font-medium"
                />
              </label>
              <div className="relative mt-2">
                {errors.message && <span className="text-red-500 mt-2 text-xs absolute bottom-0">{errors.message}</span>}
              </div>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex-auto xl:flex-1 xl:h-auto md:h-[650px] h-[450px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
