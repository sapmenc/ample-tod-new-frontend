import { useEffect, useState } from "react";

import About from "@/components/About";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const app = document.getElementById("app");
    app.addEventListener("click", () => {
      setOpen(false);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar open={open} setOpen={setOpen} />
        <div id="app">
          <Hero />
          <Overview />
          <Jobs />
          <About />
          <WhyChoose />
          lfnldsnl;n
        </div>
      </main>
    </>
  );
}
