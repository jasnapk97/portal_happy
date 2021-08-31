import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../components/card";
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
    </>
  );
};

export default Home;
