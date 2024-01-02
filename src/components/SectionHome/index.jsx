import React from "react";
import { ImgSectionConrainer, SectionWrapper, TxtBlock } from "./style";
import Image from "../Image";

const SectionHome = ({ childText, childImg, className, id }) => {
  return (
    <SectionWrapper className={` ${className}`} id={id}>
      
      <TxtBlock>{childText}</TxtBlock>
      <div className="imgBlock">
        <ImgSectionConrainer>
          <Image src={childImg} alt={"childImg"} />
        </ImgSectionConrainer>
      </div>
    </SectionWrapper>
  );
};

export default SectionHome;
