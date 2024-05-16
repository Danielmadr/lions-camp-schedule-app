import React from "react";
import "./Calendar.css";
import img from "../../assets/lions-logo.png";
import flag from "../../assets/brasil-flag.png";
import Button from "../Button/Button";

const Calendar: React.FC = () => {
  const buttons = [
    { label: "18/07", link: "/day18" },
    { label: "19/07", link: "/day19" },
    { label: "20/07", link: "/day20" },
    { label: "21/07", link: "/day21" },
    { label: "22/07", link: "/day22" },
    { label: "23/07", link: "/day23" },
    { label: "24/07", link: "/day24" },
    { label: "25/07", link: "/day25" },
    { label: "26/07", link: "/day26" },
    { label: "27/07", link: "/day27" },
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

export default Calendar;
