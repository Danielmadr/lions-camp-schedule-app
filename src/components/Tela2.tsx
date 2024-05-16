import React from "react";
import "./Tela2.css";
import img from "../assets/lions-logo.png";
import flag from "../assets/brasil-flag.png";
import Button from "./Button";

const Tela2: React.FC = () => {
  const buttons = [
    { label: "18/07", link: "/tarefas1" },
    { label: "19/07", link: "/tarefas2" },
    { label: "20/07", link: "/tarefas3" },
    { label: "21/07", link: "/tarefas4" },
    { label: "22/07", link: "/tarefas5" },
    { label: "23/07", link: "/tarefas6" },
    { label: "24/07", link: "/tarefas7" },
    { label: "25/07", link: "/tarefas8" },
    { label: "26/07", link: "/tarefas9" },
    { label: "27/07", link: "/tarefas10" },
  ];

  return (
    <div className="tela2-container">
      <div className="flag-container">
        <img src={flag} alt="Imagem Pequena" className="tela2-image-small" />
      </div>
      <div className="tela2-content">
        <div className="image-container">
          <img src={img} alt="Imagem da Tela 1" className="tela2-image" />
          <h1 className="image-title">
            15th BRAZIL LIONS TRAVEL YOUTH CAMP 2024
          </h1>
        </div>
        <div className="tela2-buttons">
          {buttons.map((button, index) => (
            <Button key={index} label={button.label} link={button.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tela2;
