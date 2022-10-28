import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = useCallback((e: Event | Window) => {
    if (e instanceof Window) {
      setScrollPosition(e?.scrollY);
    } else {
      const scroll = (e?.currentTarget as Window).scrollY;
      setScrollPosition(scroll);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="">
      <Head>
        <title>NextTail App</title>
        {/* <meta name="description" content="It's not too big, not too small, and full of friendly, conscious and welcoming people." /> */}
        {/* <meta property="og:title" content="We Love Ottawa" /> */}
        {/* <meta property="og:description" content="It's not too big, not too small, and full of friendly, conscious and welcoming people." /> */}
        {/* <meta property="og:image" content="https://love-ottawa.ca/OGImage.png" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙌</text></svg>"></link>
      </Head>

      <Header isSticky={scrollPosition > 0} />

      <main className="flex flex-col items-center justify-center w-full min-h-screen px-6 sm:px-0 sm:m-auto sm:container">
        {/* content */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
