"use client";

import { Form } from "@/components";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main className="relative px-10 md:px-20 py-14 max-width">
      <div className="flex items-center justify-center w-full ">
        <ReactPlayer
          url="vid.mp4"
          playing={true}
          loop={true}
          controls={false}
        />
      </div>
      <Form />
    </main>
  );
}
