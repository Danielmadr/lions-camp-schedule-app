import React from "react";
import "./Loading.css";
import img from "../../assets/lions-logo.png";
import Button from "../Button/Button";

const Loading: React.FC = () => {
  return (
    <div className="tela1-container">
      <img
        src={img}
        alt="Logo Lions International"
        className="tela1-image"
        width={300}
      />
      <h1 className="tela1-title">15th BRAZIL LIONS TRAVEL YOUTH CAMP 2024</h1>
      <div className="info">
        <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
          Host Club: <br /> Lions Club Itu
        </h3>
        <h3 style={{ marginBottom: "10px" }}>
          Supporting Lions Clubs: <br /> Ilhabela, Tatuí, Boituva
        </h3>
        <h4>Districts: LC2 - LC3 - LC5 - LC6</h4>
      </div>
      <Button label="Activity Schedule" link="/calendar" />
    </div>
  );
};

export default Loading;
