import React, { useState } from "react";
import {
  ImagePpal,
  ImagePpalContainer,
  ImageThumbnailContainer,
  ProductImagesWrapper,
  Thumbnail,
  ThumbnailContainer,
} from "./styles";
import Image from "../Image";

const ProductImages = ({ array }) => {
  const [selectImg, setSelectImg] = useState(0);
  const images = array.slice(0, 4);

  

  return (
    <ProductImagesWrapper>
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail key={index} onClick={() => setSelectImg(index)}>
            <ImageThumbnailContainer $active={selectImg === index}>
              <Image src={image} alt={image} />
            </ImageThumbnailContainer>
          </Thumbnail>
        ))}
      </ThumbnailContainer>
      <ImagePpal>
        <ImagePpalContainer>
          <Image src={images[selectImg]} alt={images[selectImg]} />
        </ImagePpalContainer>
      </ImagePpal>
    </ProductImagesWrapper>
  );
};

export default ProductImages;
