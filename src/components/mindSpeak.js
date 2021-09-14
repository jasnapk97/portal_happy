import React from "react";
import Carousel from "react-material-ui-carousel";
import photo1 from "../../src/assets/life-3.jpg";
import photo2 from "../../src/assets/life-4.jpg";
import photo3 from "../../src/assets/life-5.jpg";
import photo4 from "../../src/assets/life-6.jpg";

const Mindspeak = () => {
  var items = [
    {
      name: (
        <img
          src={photo1}
          style={{ width: "100%", height: "400px" }}
          alt="Second slide"
        />
      ),
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
          alt="Second slide"
        />
      ),
    },
    {
      name: (
        <img
          src={photo4}
          style={{ width: "100%", height: "400px" }}
          alt="Second slide"
        />
      ),
    },
  ];
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
          visibility: "collapse",
          color: "transparent",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

  function Item(props) {
    return (
      <div style={{ width: "100%", height: "50%", marginTop: "-20px" }}>
        <h2>{props.item.name}</h2>
      </div>
    );
  }
};

export default Mindspeak;
