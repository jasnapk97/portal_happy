import React from "react";
import CardComponent from "../components/card";
import Diversity from "../components/diversity";
import Footer from "../components/footer";
import Header from "../components/header";
import Searchbar from "../components/searchbar";
import Mainpage from "../components/mainPage";

const Home = () => {
  return (
    <>
      <Header />
      <Mainpage />
      <Searchbar />
      <CardComponent />
      <Diversity />
      <Footer />
    </>
  );
};

export default Home;
