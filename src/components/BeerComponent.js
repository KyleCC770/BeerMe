import React from "react";
import BeerItem from "./BeerItem";

const Beer = ({ items }) => {
  return (
    <section>
      {items.map((item) => (
        <BeerItem key={item.id} item={item}></BeerItem>
      ))}
    </section>
  );
};

export default Beer;
