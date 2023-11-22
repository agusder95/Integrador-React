import React, { useState, useEffect } from "react";
import { CenterShop, ShopWrapper } from "./styles";
import HamburgerMenu from "../../components/HambMenu";
import { fetchApi } from "../../utils/api";
import Layout from "../../components/layout";

const Shop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedData = await fetchApi("/products/categories");
        setCategories(fetchedData);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };
    fetchCategories();
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => (
      <li key={index}>
        <a>{category}</a>
      </li>
    ));
  };

  return (
    <ShopWrapper>
      <Layout>
        <CenterShop>
          <h1>Shop Page</h1>
          <HamburgerMenu className={"HMShop"}>
            <ul>{renderCategories()}</ul>
          </HamburgerMenu>
        </CenterShop>
      </Layout>
    </ShopWrapper>
  );
};

export default Shop;
