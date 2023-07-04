"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full px-10 py-4 md:px-20">
      <div className="flex items-center justify-start w-full gap-x-2 md:gap-x-6">
        <div className="md:text-[60px] text-[44px]">🤸</div>
        <h1 className="font-bold hidden md:flex text-[40px] ">Beshy.Co</h1>
      </div>
      <div className="flex w-full  py-4 text-[20px] justify-end items-center gap-x-4 lg:gap-x-10">
        <Link className="hidden lg:flex" href="https://github.com/crazycart143">
          Github
        </Link>
        <Link
          className="hidden lg:flex"
          href="https://www.facebook.com/keanujohn.lariosa.1/"
        >
          Facebook
        </Link>
        <Link
          className="hidden lg:flex"
          href="https://keanujohnlariosa.vercel.app/"
        >
          Portfolio
        </Link>
        {theme === "light" ? (
          <Image
            src="/night-mode.png"
            height={30}
            width={30}
            className="object-contain cursor-pointer"
            alt="dark mode"
            onClick={toggleTheme}
          />
        ) : (
          <Image
            src="/light-mode.png"
            height={30}
            width={30}
            className="object-contain cursor-pointer"
            alt="light mode"
            onClick={toggleTheme}
          />
        )}
        <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div
        className={`${
          isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        } w-full block flex-grow bg-[#121212] h-[100vh] z-50 fixed top-0 left-0 py-[50px] lg:hidden transition-all`}
      >
        <div className="flex items-end justify-end mr-[50px]">
          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="flex flex-col text-white mt-[50px] w-full">
          <Link
            className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
            href="https://www.facebook.com/keanujohn.lariosa.1/"
            onClick={() => setIsOpen(!isOpen)}
          >
            Facebook
          </Link>
          <Link
            className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
            href="https://keanujohnlariosa.vercel.app/"
            onClick={() => setIsOpen(!isOpen)}
          >
            Portfolio
          </Link>

          <Link
            href="https://github.com/crazycart143"
            className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
          >
            Github
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
