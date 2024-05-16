import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  label: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link to={link} className="button">
      {label}
    </Link>
  );
};

export default Button;
