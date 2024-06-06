import React from "react";
import "./Loading.css";
import img from "../../assets/lions-logo.png";
import Button from "../Button/Button";

const Loading: React.FC = () => {
  return (
    <div className="tela1-container">
      <img src={img} alt="Imagem da Tela 1" className="tela1-image" />
      <h1 className="tela1-title">15th BRAZIL LIONS TRAVEL YOUTH CAMP 2024</h1>
      <h2>DISTRICTS LC2 - LC3 - LC5 -LC6</h2>
      <h2>Hosting Clubs: Itu , Ilhabela,...</h2>
      <Button label="Schedule" link="/calendar" />
    </div>
  );
};

export default Loading;
