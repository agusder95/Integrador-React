import React, { useState } from "react";
import {
  DataProductContainer,
  DescriptionProductContainer,
  MainProductContainer,
  ProductsContainer,
  ProductsWrapper,
} from "./styles";
import Layout from "../../components/layout";
import Button from "../../components/Button";
import useApi from "../../state/hooks/useApi";
import { Loader } from "../Shop/styles";
import ProductImages from "../../components/ProductImages";
import { useLocation, useNavigate } from "react-router-dom";
import Counter from "../../components/Counter";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducers/cartSlice";
import Modal from "../../components/Modal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const cartDispatch = useDispatch();

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useApi(`/products/${location.pathname.split("=").pop()}`);

  if (loadingProducts) {
    return (
      <ProductsWrapper>
        <Layout>
          <ProductsContainer>
            <div className="center">
              <Loader />
            </div>
          </ProductsContainer>
        </Layout>
      </ProductsWrapper>
    );
  }

  const AddCart = () => {
    /* console.log(document.querySelector("input").value); */
    
    const objectCart = {
      id: dataProducts.id,
      title: dataProducts.title,
      price: dataProducts.price,
      quantity: document.querySelector("input").value,
      image: dataProducts.thumbnail,
    };
    
    let existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let existingItem = existingCart.find(item => item.title === objectCart.title);
    
    if (!existingItem) {
      existingCart.push(objectCart);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    }

    cartDispatch(addCart(objectCart));

    setShowModal(true);

  };

  return (
    <ProductsWrapper>
      <Layout>
        <ProductsContainer>
          <MainProductContainer>
            <ProductImages array={dataProducts.images} />
            <DataProductContainer>
              <h1>{dataProducts.title}</h1>
              <p>{dataProducts.raring}</p>
              <p>$ {dataProducts.price}</p>
              <Button text={"Add to cart"} onClick={AddCart} />
              <Counter stock={dataProducts.stock} />
              <p>Stock: {dataProducts.stock}</p>
              <Button text={"Back to shop"} onClick={() => navigate("/Shop")} />
            </DataProductContainer>
          </MainProductContainer>

          <DescriptionProductContainer>
            <h2>{dataProducts.brand}</h2>
            <p>{dataProducts.description}</p>
          </DescriptionProductContainer>
        {
          showModal ? <Modal title={"Product added"} text={"Product added to cart"} btnText={"Continue shopping"} page={"/Shop"} /> : null
        }
        </ProductsContainer>
      </Layout>
    </ProductsWrapper>
  );
};

export default Products;
