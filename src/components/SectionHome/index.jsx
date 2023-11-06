import React from "react";
import { ImgSectionConrainer, SectionWrapper } from "./style";
import propTypes from "prop-types"
import Image from "../Image";

const SectionHome = ({ childText, childImg, reverse, colorbg }) => {
  return (
    <SectionWrapper colorbg={colorbg} reverse={reverse != undefined ? reverse.toString() : "false"} >
      <div className="txtBlock">{childText}</div>
      <div className="imgBlock">
        <ImgSectionConrainer>
        <Image src={childImg} alt={'childImg'} />
        </ImgSectionConrainer>
      </div>
    </SectionWrapper>
  );
};

SectionHome.propTypes = {
  reverse: propTypes.bool,
  colorbg: propTypes.string,
}


export default SectionHome;
