import React from "react";
import { ModalWrapper, ModalBox } from "./styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";


const Modal = ({ title, text, btnText, onClick }) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper>
      <ModalBox >
        <h1>{title}</h1>
        <p>{text}</p>
        <Button text={btnText} onClick={onClick} className={"btnModal"}/>
      </ModalBox>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  title: "",
  text: "",
  btnText: "btn",
  page: "/",
}

export default Modal;
