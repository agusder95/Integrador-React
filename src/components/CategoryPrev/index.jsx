import React from "react";
import { CategoryPrevWrapper, ShopCardsContainer } from "./styles";
import ShopCard from "../ShopCard";

const CategoryPrev = ({ productsData, category }) => {
  const products = productsData;

  return (
    <CategoryPrevWrapper>
      {category === "" ? <h1>all</h1> : <h1>{category.split("/").pop()}</h1>}
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
      <ShopCardsContainer>
        {products.map((products) => (
          <ShopCard
            key={products.id}
            Img={products.images[0]}
            title={products.title}
            price={products.price}
          />
        ))}
      </ShopCardsContainer>
      {/* <h1>{category}</h1>
      <ShopCardsContainer>
        test 
          for (let i = 0; i < 3; i++) {
            <ShopCard  />
          }
       
        <p>More</p>
      </ShopCardsContainer> */}
    </CategoryPrevWrapper>
  );
};

export default CategoryPrev;
