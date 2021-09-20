import React from "react";

import image from "../assets/3-full.jpg"
import image1 from "../assets/4-full.jpg";

import image3 from "../assets/5-full.jpg";
import image4 from "../assets/9-full.jpg";
import Mindspeak from "./mindSpeak";
const mainHome = () => {
  return (
    <>
<div><img src={image}  style={{ width: "100%", height: "400px" }}></img></div>
<div><img src={image1}  style={{ width: "100%", height: "400px" }}></img></div>
<div><img src={image3}  style={{ width: "100%", height: "400px" }}></img></div>
<div><img src={image4}  style={{ width: "100%", height: "400px" }}></img></div>

    </>
  );
};

export default mainHome;