import React from "react";
import { CategoryPrevWrapper, ShopCardsContainer } from "./styles";
import ShopCard from "../ShopCard";

const CategoryPrev = ({ productsData, category }) => {
  const products = productsData;

  return (
    <CategoryPrevWrapper>
      {category === "" ? <h1>all</h1> : <h1>{category.split("/").pop()}</h1>}

      <ShopCardsContainer>
        {products.map((products) => (
          <ShopCard
            key={products.id}
            keyId={products.id}
            Img={products.images[0]}
            title={products.title}
            price={products.price}
            stock={products.stock}
          />
        ))}
      </ShopCardsContainer>

    </CategoryPrevWrapper>
  );
};

export default CategoryPrev;
