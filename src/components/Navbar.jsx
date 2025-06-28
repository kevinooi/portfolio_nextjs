"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { styles } from "../app/styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import Image from "next/image";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-tertiary" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* TODO: logo maybe? */}
                    <p className="text-primary text-[18px] font-bold cursor-pointer flex ">
                        Kevin Ooi
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? "text-primary"
                                    : "text-secondary"
                            } hover:text-primary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <Link href={`#${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div className="border rounded-2xl p-2 bg-primary">
                        <Image
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            color="#2e2e2e"
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? "text-white"
                                            : "text-gray-400"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link href={`#${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
