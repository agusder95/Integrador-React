import React, { useState } from "react";
import { UserMenuWrapper } from "./styles";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, clearData } from "../../redux/reducers/userSlice";
import { clearCart, removeItemCart } from "../../redux/reducers/cartSlice";

const UserMenu = ({ close }) => {
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const user = useSelector((state) => state.userInfo);
  const userDispatch = useDispatch();
  const productsDispatch = useDispatch();
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

  return (
    <UserMenuWrapper>
      <button className="closeBtn" onClick={() => close()}>
        X
      </button>
      <p>{user.login ? user.user : "Login"}</p>
      <Button text={user.login ? "Logout" : "Login"} onClick={btnLogin} />

      {user.login ? (
        <p onClick={() => setDeleteAccount(true)}>Delete Account</p>
      ) : null}
      {deleteAccount ? (
        <>
          <div className="deleteAccount">
            <Button text="Yes" onClick={() => setConfirmDelete(true)} />

            <Button
              text="No"
              onClick={() => (setDeleteAccount(false), setConfirmDelete(false))}
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
    </UserMenuWrapper>
  );
};

export default UserMenu;
