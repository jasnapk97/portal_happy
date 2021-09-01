import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../components/card";
import Diversity from "../components/diversity";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Searchbar />
      <CardComponent></CardComponent>
      <Diversity />
    </>
  );
};

export default Home;
