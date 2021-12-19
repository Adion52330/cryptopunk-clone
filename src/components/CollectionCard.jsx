import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectioncard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id"> #{id}</div>{" "}
        </div>
        <div className="pricecontainer">
          <img src={weth} alt="" className="wethImg" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
