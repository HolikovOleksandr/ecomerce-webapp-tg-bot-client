import React from "react";
import Button from "../Button/Button.jsx";
import { useTelegram } from "../../hooks/usetelegram.js";
import "./Header.css";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClic={onClose}>Close</Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};

export default Header;
