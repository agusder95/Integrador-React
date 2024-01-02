import React, { useState } from "react";
import {
  ForgotPassContainer,
  ForgotPassWrapper,
  FomrConatainer,
  Form,
  PassContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../../components/layout";
import { NewPassword } from "../../redux/reducers/userSlice";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [repeat, setRepeat] = useState(false);
  const [seePass, SetSeePass] = useState(false);
  const [seeConfPass, SetSeeConfPass] = useState(false);

  const changuePassord = (values) => {
    if (
      values.username === userInfo.user ||
      (values.username === userInfo.email &&
        values.newPassword !== userInfo.pass)
    ) {
      let oldUser = JSON.parse(localStorage.getItem("userData"));
      dispatch(NewPassword(values.newPassword));
      oldUser.pass = values.newPassword;
      setRepeat(false);
      Promise.resolve(localStorage.setItem("userData", JSON.stringify(oldUser)))
        .then(() => {
          navigate("/Shop");
        })
        .catch((error) => {
          console.log(error);
        });
    } else setRepeat(true);
  };

  const formikRegister = useFormik({
    initialValues: {
      username: "",
      newPassword: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      newPassword: Yup.string()
        .min(8, "Must be 8 characters or more")
        .matches(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
          "Password must contain at least one special character"
        )
        .matches(
          /[A-Z]+/,
          "Password must contain at least one uppercase letter"
        )
        .matches(/[1-9]/, "Password must contain at least one number")
        .required("Required"),
      repeatPassword: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      changuePassord(values);
    },
  });

  return (
    <ForgotPassWrapper>
      <Layout>
        <ForgotPassContainer>
          <FomrConatainer>
            <h1>Changue Password</h1>
            <Form onSubmit={formikRegister.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="User or Email"
                {...formikRegister.getFieldProps("username")}
              />
              {formikRegister.touched.username &&
              formikRegister.errors.username ? (
                <p>{formikRegister.errors.username}</p>
              ) : null}
              <PassContainer>
                <input
                  type={seePass ? "text" : "password"}
                  name="newPassword"
                  placeholder="Enter your new password"
                  {...formikRegister.getFieldProps("newPassword")}
                />
                <button
                  className="showPass"
                  type="button"
                  onClick={() => SetSeePass(!seePass)}
                >
                  {seePass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </PassContainer>
              {formikRegister.touched.newPassword &&
              formikRegister.errors.newPassword ? (
                <p>{formikRegister.errors.newPassword}</p>
              ) : null}
              <PassContainer>
                <input
                  type={seeConfPass ? "text" : "password"}
                  name="repeatPassword"
                  placeholder="Repeat your new password"
                  {...formikRegister.getFieldProps("repeatPassword")}
                />
                <button
                  className="showPass"
                  type="button"
                  onClick={() => SetSeeConfPass(!seeConfPass)}
                >
                  {seeConfPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </PassContainer>
              {formikRegister.touched.repeatPassword &&
              formikRegister.errors.repeatPassword ? (
                <p>{formikRegister.errors.repeatPassword}</p>
              ) : null}
              {repeat ? <p>Wrong user or email or password</p> : null}
              <Button type="submit" text="Changue" className={"btnChangue"} />
            </Form>
          </FomrConatainer>
        </ForgotPassContainer>
      </Layout>
    </ForgotPassWrapper>
  );
};

export default ForgotPass;
