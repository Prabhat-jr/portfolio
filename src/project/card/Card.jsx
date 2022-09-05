import React from "react";
import "./card.css";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div>
      <img src={emoji} alt="" />
      <div className="details">
        <h2>{heading}</h2>
        <p>{detail}</p>
        <button className="c-button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Card;
