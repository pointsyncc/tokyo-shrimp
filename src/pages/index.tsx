import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { MainLayout } from "@/components/layout/mainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import { Hero } from "@/components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pointsyncc - Home</title>
        <meta name="description" content="Pointsycc homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
      <Hero/>
      </>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
