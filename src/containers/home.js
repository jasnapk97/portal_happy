import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../components/card";
import Diversity from "../components/diversity";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Searchbar />
      <CardComponent/>
      <Diversity />
      <Footer/>
    </>
  );
};

export default Home;
