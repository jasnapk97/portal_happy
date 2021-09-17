import React from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "../components/card";
import Diversity from "../components/diversity";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Slider from "../components/first_Slider";
import Mainhome from "../components/mainHome";

const Home = () => {
  return (
    <>
      <Header />
     <Mainhome/>
      <Searchbar />
      <CardComponent/>
      <Diversity />
      <Footer/>
    </>
  );
};

export default Home;