import React, { useState } from "react";
import {
  LoginContainer,
  LoginWrapper,
  ButtonContainer,
  TabContent,
  TabPanel,
  Form,
  PassContainer,
} from "./styles";
import Layout from "../../components/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [active, setActive] = useState("tab1");
  const [seePass, SetSeePass] = useState(false);
  const [seeConfPass, SetSeeConfPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      adult: false,
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
        .required("Required"),
      lName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      userName: Yup.string()
        .max(7, "Must be 7 characters or less")
        .required("Required"),
      password: Yup.string()
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
      confirmPassword: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      adult: Yup.boolean().oneOf(
        [true],
        "You must be at least 18 years of age"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClick = (value) => {
    setActive(value);
  };
  return (
    <LoginWrapper>
      <Layout>
        <LoginContainer>
          <ButtonContainer>
            <button
              onClick={() => handleClick(`tab1`)}
              className={active === "tab1" ? "active" : ""}
            >
              Login
            </button>
            <button
              onClick={() => handleClick(`tab2`)}
              className={active === "tab2" ? "active" : ""}
            >
              Register
            </button>
          </ButtonContainer>
          <TabContent>
            <TabPanel className={active === "tab1" ? "active" : ""}>
              <Form onSubmit={() => console.log(values)}>
                <input type="text" name="user" placeholder="User" />
                <PassContainer>
                  <input
                    type={seePass ? "text" : "password"}
                    name="Password"
                    placeholder="Password"
                  />
                  <button
                    className="showPass"
                    type="button"
                    onClick={() => SetSeePass(!seePass)}
                  >
                    {seePass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PassContainer>
                <Button text={"Login"} className={"btnRegLog"} type={"submit"} />
              </Form>
            </TabPanel>
            <TabPanel className={active === "tab2" ? "active" : ""}>
              <Form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  {...formik.getFieldProps("fName")}
                />
                {formik.touched.fName && formik.errors.fName ? (
                  <p>{formik.errors.fName}</p>
                ) : null}
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lName")}
                />
                {formik.touched.lName && formik.errors.lName ? (
                  <p>{formik.errors.lName}</p>
                ) : null}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  {...formik.getFieldProps("userName")}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <p>{formik.errors.userName}</p>
                ) : null}
                <PassContainer>
                  <input
                    type={seePass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  <button
                    className="showPass"
                    type="button"
                    onClick={() => SetSeePass(!seePass)}
                  >
                    {seePass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PassContainer>
                {formik.touched.password && formik.errors.password ? (
                  <p>{formik.errors.password}</p>
                ) : null}
                <PassContainer>
                  <input
                    type={seeConfPass ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <button
                    className="showPass"
                    type="button"
                    onClick={() => SetSeeConfPass(!seeConfPass)}
                  >
                    {seeConfPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PassContainer>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p>{formik.errors.confirmPassword}</p>
                ) : null}
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="adult"
                    {...formik.getFieldProps("adult")}
                  />
                  <label htmlFor="adult">I`m 18 years or older</label>
                </div>
                {formik.touched.adult && formik.errors.adult ? (
                  <p>{formik.errors.adult}</p>
                ) : null}
                <Button text="Register" type="submit" className={"btnRegLog"} />
              </Form>
            </TabPanel>
          </TabContent>
        </LoginContainer>
      </Layout>
    </LoginWrapper>
  );
};

export default Login;
