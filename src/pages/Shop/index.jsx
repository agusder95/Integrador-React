import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  CategoryContainer,
  CenterShop,
  InputContainer,
  Loader,
  OptionsCategory,
  SelectCategory,
  ShopWrapper,
  TopContainer,
} from "./styles";
import Button from "../../components/Button";
import Layout from "../../components/layout";
import CategoryPrev from "../../components/CategoryPrev";
import useApi from "../../state/hooks/useApi";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState(``);
  const [itemSerch, setItemSerch] = useState(``);
  const [more, setMore] = useState(true);
  const productsUrl = `/products/${category}?limit=10&skip=${skip}&select=title,price,category,images,stock`;
  const serchUrl = `/products/search?q=${itemSerch}`;

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useApi("/products/categories");

  const {
    data: dataSerch,
    loading: loadingSerch,
    error: errorSerch,
  } = useApi(serchUrl);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useApi(productsUrl);

  useEffect(() => {
     if (dataProducts && dataProducts.total > products.length) {
      setMore(true);
    } else {
      setMore(false);
    }
    if(itemSerch){
      setMore(false);
    }
  }, [products]);

  useEffect(() => {
    if (dataProducts && dataProducts.products) {
      setProducts((prevProducts) => {
        const newProducts = dataProducts.products.filter(
          (newProduct) =>
            !prevProducts.some((oldProduct) => oldProduct.id === newProduct.id)
        );
        return [...prevProducts, ...newProducts];
      });
    }
  }, [dataProducts]);

  useEffect(() => {
    setProducts([]);
    setSkip(0);
  }, [category]);

  const chargueMore = () => {
    if ((dataProducts && dataProducts.total > products.length) && !itemSerch) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  const changueCategory = (category) => {
    if (itemSerch) {
      setItemSerch(``);
    }
    if (category === "all") {
      setCategory(``);
    } else {
      setCategory(`category/${category}`);
    }
  };

  const renderCategories = () => {
    let categories = ["all", ...dataCategories];
    return (
      <SelectCategory onChange={(e) => changueCategory(e.target.value)}>
        {categories.map((category, index) => (
          <OptionsCategory key={index} value={category}>
            {category}
          </OptionsCategory>
        ))}
      </SelectCategory>
    );
  };

  const renderSerch = () => {
    if (dataSerch && dataSerch.products) {
      setProducts(dataSerch.products);
      
    }
  };

  const serchItem = (e) => {
    e.preventDefault();
    if (itemSerch !== ``) {
      renderSerch();
    } else {
      setItemSerch(``);
    }
  };

  const resetSerch = () => {
    if (itemSerch !== ``) {
      window.location.replace("");
    }
    setItemSerch(``);
  };

  if (loadingCategories) {
    return (
      <ShopWrapper>
        <Layout>
          <CenterShop>
            <Loader />
          </CenterShop>
        </Layout>
      </ShopWrapper>
    );
  }

  if (errorCategories) {
    return <p>Error {errorCategories.message}</p>;
  }

  return (
    <ShopWrapper>
      <Layout>
        <CenterShop>
          <TopContainer>
            <h2>Filter</h2>
            <CategoryContainer>
              <p>Categories:</p>
              {renderCategories()}
              <p>Search:</p>
              <form onSubmit={serchItem}>
                <InputContainer>
                  <input
                    type="text"
                    value={itemSerch}
                    onChange={(e) => setItemSerch(e.target.value.trimStart())}
                  />
                  <button className="reset" type="button" onClick={resetSerch}>
                    X
                  </button>
                </InputContainer>
                <Button className={"search"} text={"Search"} type="submit" />
              </form>
            </CategoryContainer>
          </TopContainer>
          <CategoryPrev productsData={products} category={category} />

          <Button
            className={"moreBtn"}
            text={
              <IconContext.Provider
                value={{ className: `iconMore ${!more ? "noActive" : ""}` }}
              >
                <FaAngleDown />
              </IconContext.Provider>
            }
            disabled={!more}
            onClick={() => chargueMore()}
          />
        </CenterShop>
      </Layout>
    </ShopWrapper>
  );
};

export default Shop;
