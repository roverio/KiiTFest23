import Head from "next/head";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Slider from "../components/Slider";
// import Timer from "../components/Timer";
import Timer from "../components/Timer";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KIITFEST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo/kiitfest-logo.png" />
      </Head>
      <Hero />
      <Events />
      <Timer/>
    </div>
  );
}
