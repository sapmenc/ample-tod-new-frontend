import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Jobs from "@/components/Jobs";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Overview />
        <Jobs />
        lfnldsnl;n
      </main>
    </>
  );
}
