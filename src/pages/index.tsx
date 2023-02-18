
import Head from "next/head";
import About from "@/components/home/About";
import Brand from "@/components/home/Brand";
import Counter from "@/components/home/Counter";
import { Hero } from "@/components/home/Hero";
import Portifolio from "@/components/home/Portifolio";
import {Roll} from "@/components/home/Roll";
import Service from "@/components/home/Service";
import Workflow from "@/components/home/Workflow";
import { MainLayout } from "@/components/layout/mainLayout/MainLayout";
import { NextPageWithLayout } from "./_app";
import Blog from "@/components/home/Blog";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";



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
        <Hero />
        <Roll />
        <About />
        <Service />
        <Counter />
        <Workflow />
        <Portifolio />
        <Brand />
        <Testimonial />
        <Blog />
        <CTA />
      </>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Home;
