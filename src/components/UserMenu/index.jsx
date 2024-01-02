import React, { useState } from "react";
import {
  ListContainer,
  LoginUserContaienr,
  UserDataContainer,
  UserMenuContainer,
  UserMenuWrapper,
  ListProduct,
  ProductListContainer,
} from "./styles";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, clearData } from "../../redux/reducers/userSlice";
import { clearCart, removeItemCart } from "../../redux/reducers/cartSlice";
import Image from "../Image";
import Modal from "../Modal";
import CartCounter from "../CartCounter";

const UserMenu = ({ close }) => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [buyModal, setBuyModal] = useState(false);

  const user = useSelector((state) => state.userInfo);
  const userDispatch = useDispatch();
  const productsDispatch = useDispatch();
  const products = useSelector((state) => state.cartInfo.cartItems);
  const totalPrice = useSelector((state) => state.cartInfo.totalPrice);

  const navigate = useNavigate();
  const btnLogin = () => {
    if (user.login) {
      const changueLogin = JSON.parse(localStorage.getItem("userData"));
      changueLogin.login = false;
      userDispatch(setLogin(false));
      Promise.resolve(
        localStorage.setItem("userData", JSON.stringify(changueLogin))
      )
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Failed to save user data:", error);
        });
    } else {
      navigate("/Login");
    }
  };

  const btnDeleteAccount = () => {
    localStorage.clear();
    userDispatch(clearData());
    productsDispatch(clearCart());
    setDeleteAccount(false);
    navigate("/");
  };

  const handleRemoveItem = (product) => {
    productsDispatch(removeItemCart(product));

    const actualCart = JSON.parse(localStorage.getItem("cartItems"));
    let newCart = actualCart.filter((item) => item.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const deleteAllProducts = () => {
    productsDispatch(clearCart());
    localStorage.removeItem("cartItems");
  };

  const buyProducts = () => {
    setBuyModal(true);
  };

  const finishPurchase = () => {
    productsDispatch(clearCart());
    localStorage.removeItem("cartItems");
    navigate("/");
  };

  return (
    <UserMenuWrapper>
      <UserMenuContainer>
        <button className="closeBtn" onClick={() => close()}>
          X
        </button>

        {!user.login ? (
          <LoginUserContaienr>
            <p>Login or Register</p>
            <Button text="Login" onClick={btnLogin} className={"btnLogin"} />
          </LoginUserContaienr>
        ) : (
          <UserDataContainer>
            <p>{user.user}</p>

            <ListContainer $empty={products.length === 0 || null}>
              {!products ? null : (
                <>
                  {products.map((product, index) => (
                    <ListProduct key={index}>
                      <ProductListContainer>
                        <div className="productInfo">
                          <div className="ProductImgContainer">
                            <Image src={product.image} alt={product.title} />
                          </div>
                          <div className="NamePrice">
                            <p>
                              {product.title.slice(0, 18) +
                                (product.title.length > 15 ? "..." : "")}
                            </p>
                            <div className="price">
                              <CartCounter actualProduct={product} />
                            </div>
                          </div>
                        </div>

                        <Button
                          text="X"
                          className={"btnRmb"}
                          onClick={() => handleRemoveItem(product)}
                        />
                      </ProductListContainer>
                    </ListProduct>
                  ))}
                  {products.length === 0 ? null : (
                    <>
                      <Button
                        text="Delete All"
                        className={"deleteAll"}
                        onClick={deleteAllProducts}
                      />
                      <p>Total: ${totalPrice}</p>
                      <Button
                        text="Buy"
                        className={"btnBuy"}
                        onClick={buyProducts}
                      />
                    </>
                  )}
                </>
              )}
            </ListContainer>
            <p onClick={btnLogin}>
              <b>Logout</b>
            </p>
            <p onClick={() => setDeleteAccount(true)}>Delete Account</p>
            {deleteAccount ? (
              <>
                <div className="deleteAccount">
                  <Button
                    className={"btnAcnt"}
                    text="Yes"
                    onClick={() => setConfirmDelete(true)}
                  />

                  <Button
                    className={"btnAcnt"}
                    text="No"
                    onClick={() => (
                      setDeleteAccount(false), setConfirmDelete(false)
                    )}
                  />
                </div>
                {confirmDelete ? (
                  <p>
                    Confirm delete your account?{" "}
                    <b onClick={() => btnDeleteAccount()}>YES</b>
                  </p>
                ) : null}
              </>
            ) : null}
          </UserDataContainer>
        )}
      </UserMenuContainer>
      {buyModal ? (
        <Modal
          title="Fishish Purchase"
          text="Check your email for the purchase details and payment"
          btnText="Home"
          onClick={finishPurchase}
        />
      ) : null}
    </UserMenuWrapper>
  );
};

export default UserMenu;
