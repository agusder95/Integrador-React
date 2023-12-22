import React from "react";
import { ModalWrapper, ModalBox } from "./styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Modal = ({ title, text, btnText }) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper>
      <ModalBox>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button text={btnText} onClick={() => navigate("/")} />
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
