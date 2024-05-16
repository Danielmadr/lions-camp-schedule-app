import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Tela1.css";
import img from "../../assets/lions-logo.png";

const Tela1: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/tela2");
    }, 500); // 500 milissegundos = 0,5 segundos

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  return (
    <div className="tela1-container">
      <img src={img} alt="Imagem da Tela 1" className="tela1-image" />
      <h1 className="tela1-title">15th BRAZIL LIONS TRAVEL YOUTH CAMP 2024</h1>
    </div>
  );
};

export default Tela1;
