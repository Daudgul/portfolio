import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
