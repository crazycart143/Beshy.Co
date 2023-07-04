"use client";

import { Form } from "@/components";

export default function Home() {
  return (
    <main className="relative px-10 md:px-20 py-14 max-width">
      <div className="flex items-center justify-center w-full ">
        <video loop autoPlay playsInline muted>
          <source src="vid.mp4" type="video/mp4" />
        </video>
        <audio autoPlay loop hidden playsInline controls>
          <source src="music.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <Form />
    </main>
  );
}
