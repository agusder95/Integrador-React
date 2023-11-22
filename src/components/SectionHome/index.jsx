import React from "react";
import { ImgSectionConrainer, SectionWrapper } from "./style";
import Image from "../Image";

const SectionHome = ({ childText, childImg, className, id }) => {
  return (
    <SectionWrapper className={` ${className}`} id={id}>
      <div className="txtBlock">{childText}</div>
      <div className="imgBlock">
        <ImgSectionConrainer>
          <Image src={childImg} alt={"childImg"} />
        </ImgSectionConrainer>
      </div>
    </SectionWrapper>
  );
};

export default SectionHome;
