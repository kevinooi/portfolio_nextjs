"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../app/styles";
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
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // TODO: add .env
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_email: form.email,
                    to_email: "kevinooi1997@gmail.com",
                    subject: form.subject,
                    message: form.message,
                    // from_name
                    // to_name: "Kevin Ooi",
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        "Thank you. I will get back to you as soon as possible."
                    );

                    setForm({
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-auto md:flex-1 bg-black-100 p-8 rounded-2xl"
            >
                <div className="flex items-center justify-center gap-x-4">
                    <p className={styles.sectionSubText}>Let's connect</p>
                    <div className="flex flex-row gap-2">
                        <Link href="linkedin.com">
                            <Image src={linkedin} alt="Linkedin Icon" />
                        </Link>
                        <Link href="github.com">
                            <Image
                                src={lightgithub}
                                alt="Github Icon"
                                className="w-12 h-12 object-contain"
                            />
                        </Link>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Subject
                        </span>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Just saying hi"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Let's talk about..."
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex-auto xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
