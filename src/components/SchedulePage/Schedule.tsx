import React from "react";
import { useNavigate } from "react-router-dom";
import "./Schedule.css";
import img from "../../assets/lions-logo.png";
import flag from "../../assets/brasil-flag.png";
import Button from "../Button/Button";

interface Tarefa {
  hora: string;
  tarefa: string;
}

const Schedule: React.FC<{ title: string; tarefas: Tarefa[] }> = ({
  title,
  tarefas,
}) => {
  const navigate = useNavigate();

  return (
    <div className="tela3-container">
      <div className="header-container">
        <img src={img} alt="Logo" className="tela3-logo" />
        <h1
          className="tela3-title"
          style={{ fontSize: "1.2rem", textAlign: "center" }}
        >
          15th BRAZIL LIONS TRAVEL YOUTH CAMP 2024
        </h1>
        <img src={flag} alt="Imagem Pequena" className="image-small" />
      </div>
      <div className="tela3-separator"></div>
      <div className="task-container">
        <div className="tela3-circle">
          <span className="tela3-circle-text">{title}</span>
        </div>
        <ul className="tela3-task-list">
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              className={
                index % 2 === 0 ? "tela3-task-item even" : "tela3-task-item odd"
              }
            >
              <div className="task-content">
                <div className="hora-container">
                  <span className="tela3-task-hora">{tarefa.hora}</span>
                </div>
                <div className="title-container">
                  <span className="tela3-task-text">{tarefa.tarefa}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tela3-button">
        <Button label="Return" link="/calendar" />
      </div>
    </div>
  );
};

export default Schedule;
