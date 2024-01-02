import React, { useEffect, useState } from "react";
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
import { Rating } from "@mui/material";

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
    if (
      document.querySelector("input").value != "" ||
      document.querySelector("input").value != 0
    ) {
      const objectCart = {
        id: dataProducts.id,
        title: dataProducts.title,
        price: dataProducts.price,
        quantity: document.querySelector("input").value,
        stock: dataProducts.stock,
        image: dataProducts.thumbnail,
      };

      let existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      let existingItem = existingCart.find(
        (item) => item.title === objectCart.title
      );

      if (!existingItem) {
        existingCart.push(objectCart);
        localStorage.setItem("cartItems", JSON.stringify(existingCart));
      }

      cartDispatch(addCart(objectCart));

      setShowModal(true);
    }
  };

  return (
    <ProductsWrapper>
      <Layout>
        <ProductsContainer>
          <MainProductContainer>
            <ProductImages array={dataProducts.images} />
            <DataProductContainer>
              <h1>{dataProducts.title}</h1>
              <div className="ratingContainer">
                <Rating
                  name="rating"
                  size="large"
                  defaultValue={Math.round(dataProducts.rating * 2) / 2}
                  precision={0.5}
                  readOnly
                />
                <p>{Math.round(dataProducts.rating * 2) / 2}</p>
              </div>
              <h1>$ {dataProducts.price}</h1>

              <Counter stock={dataProducts.stock} price={dataProducts.price} />
              <Button
                className={"btnCart"}
                text={"Add to cart"}
                onClick={AddCart}
              />

              <Button
                className={"btnBack"}
                text={"Back to shop"}
                onClick={() => navigate("/Shop")}
              />
            </DataProductContainer>
          </MainProductContainer>

          <DescriptionProductContainer>
            <h1>Brand</h1>
            <h3>{dataProducts.brand}</h3>
            <h1>Description</h1>
            <p>{dataProducts.description}</p>
          </DescriptionProductContainer>
          {showModal ? (
            <Modal
              title={"Product added"}
              text={"Product added to cart"}
              btnText={"Continue shopping"}
              onClick={() => navigate("/Shop")}
            />
          ) : null}
        </ProductsContainer>
      </Layout>
    </ProductsWrapper>
  );
};

export default Products;
