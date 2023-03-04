import { useEffect, useState } from "react";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview";
import WhyChoose from "@/components/WhyChoose";
import { favLogo } from "@/assets/Images";

export default function Home({
  titles,
  filteredProfiles,
  isLoading,
  setIsLoading,
  profiles,
  dispatchFilteredProfiles,
}) {
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
        <title>Ample - Talent On Demand</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favLogo} />
      </Head>
      <main>
        <Navbar open={open} setOpen={setOpen} />
        <div id="app">
          <Hero />
          <Overview />
          <Jobs
            titles={titles}
            filteredProfiles={filteredProfiles}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            profiles={profiles}
            dispatchFilteredProfiles={dispatchFilteredProfiles}
          />
          <About />
          <WhyChoose />
          <Footer />
        </div>
      </main>
    </>
  );
}
