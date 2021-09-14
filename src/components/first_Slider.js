import React from "react";
import photo1 from "../assets/4-full.jpg";
import photo2 from "../assets/3-full.jpg";
import photo3 from "../assets/5-full.jpg";
import photo4 from "../assets/9-full.jpg";
import Carousel from "react-material-ui-carousel";

const Slider = () => {
  var items = [
    {
      name: (
        <img
          src={photo1}
          style={{ width: "100%", height: "400px" }}
          alt="first slide"
        />
      ),
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: (
        <img
          src={photo2}
          style={{ width: "100%", height: "400px" }}
          alt="Second slide"
        />
      ),
    },
    {
      name: (
        <img
          src={photo3}
          style={{ width: "100%", height: "400px" }}
          alt="third slide"
        />
      ),
    },
    {
      name: (
        <img
          src={photo4}
          style={{ width: "100%", height: "400px" }}
          alt="fourth slide"
        />
      ),
    },
  ];
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
          color: "white",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "yellowgreen",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "-62px",
          textAlign: "right",
          marginLeft: "-46px",
        },
      }}
      navButtonsAlwaysInvisible="false"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

  function Item(props) {
    return (
      <div style={{ width: "100%", height: "30%", marginTop: "-20px" }}>
        <h2>{props.item.name}</h2>
      </div>
    );
  }
};

export default Slider;
