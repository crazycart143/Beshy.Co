"use client";

import { Form } from "@/components";

export default function Home() {
  return (
    <main className="relative px-10 md:px-20 py-14 max-width">
      <div className="flex items-center justify-center w-full ">
        <video src="/vid.mp4" loop={true} autoPlay={true} />
      </div>
      <Form />
    </main>
  );
}
