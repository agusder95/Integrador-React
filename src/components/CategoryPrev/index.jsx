import React from "react";
import { CategoryPrevWrapper, ShopCardsContainer } from "./styles";
import ShopCard from "../ShopCard";

const CategoryPrev = ({ productsData }) => {
  const products = productsData;
  
  return (
    <CategoryPrevWrapper>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
      {products.map(products=>(
        <ShopCard 
          key={products.id}
          Img={products.thumbnail}
          title={products.title}
          price={products.price}
          />
      ))}
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
