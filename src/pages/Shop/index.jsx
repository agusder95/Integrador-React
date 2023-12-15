import React, { useState, useEffect } from "react";
import {
  CategoryContainer,
  CenterShop,
  Loader,
  OptionsCategory,
  SelectCategory,
  ShopWrapper,
  TopContainer,
} from "./styles";
import HamburgerMenu from "../../components/HambMenu";
import { fetchApi } from "../../utils/fetchApi";
import Layout from "../../components/layout";
import CategoryPrev from "../../components/CategoryPrev";
import useApi from "../../state/hooks/useApi";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState(``);
  const [itemSerch, setItemSerch] = useState(``);
  const productsUrl = `/products/${category}?limit=10&skip=${skip}&select=title,price,category,thumbnail,stock`;
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
    setSkip((prevSkip) => prevSkip + 10);
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
            <h1>Categories</h1>
            <CategoryContainer>
              <p>Filter:</p>
              {renderCategories()}
              <p>Search:</p>
              <form onSubmit={serchItem}>
                <input
                  type="text"
                  value={itemSerch}
                  onChange={(e) => setItemSerch(e.target.value.trimStart())}
                />
                <button type="button" onClick={resetSerch}>
                  X
                </button>
                <button type="submit">Search</button>
              </form>
            </CategoryContainer>
          </TopContainer>
          <CategoryPrev productsData={products} />
          <button className="more" onClick={() => chargueMore()}>
            More
          </button>
          {/* <CategoryPrev productsData={products}  >
           
          </CategoryPrev> */}
        </CenterShop>
      </Layout>
    </ShopWrapper>
  );
};

export default Shop;
