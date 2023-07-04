import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[200px] flex flex-col justify-center items-center border-t-2 border-gray-200 gap-y-4">
      <Image
        src="/profile.jpg"
        height={100}
        width={100}
        alt="profile"
        className="object-contain rounded-full"
      />

      <h1 className="font-semibold">Made by: Keanu 🤸 John 🤸 Lariosa</h1>
    </footer>
  );
};

export default Footer;
