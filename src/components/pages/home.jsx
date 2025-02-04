import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import Picture from "./home/picture";
import About from "./home/about";
import Service from "./home/service";
import News from "./home/news";
import Ques from "./home/ques";
import Client from "./home/client";
import Touch from "./home/touch";

const home = () => {
  return (
    <>
      <Navbar />
      <Picture />
      <About />
      <Service />
      <News />
      <Ques />
      <Client />
      <Touch />
      <Footer />
    </>
  );
};

export default home;
