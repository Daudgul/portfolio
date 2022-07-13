import type { NextPage } from "next";
import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import SectionFour from "../components/SectionFour";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daud Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

export default Home;
