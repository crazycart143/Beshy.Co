"use client";

import { Form } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative px-10 md:px-20 py-14 max-width">
      <div className="w-full flex justify-center items-center ">
        <video src="/vid.mp4" autoPlay loop></video>
      </div>
      <Form />
    </main>
  );
}
