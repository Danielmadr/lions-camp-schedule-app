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
        <h3>DISTRICTS LC2 - LC3 - LC5 -LC6</h3>
        <h3>Hosting Clubs: Itu , Ilhabela,...</h3>
      </div>
      <Button label="Activity Plan" link="/calendar" />
    </div>
  );
};

export default Loading;
