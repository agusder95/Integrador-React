import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addUser, setLogin } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState("tab1");
  const [seePass, SetSeePass] = useState(false);
  const [seeConfPass, SetSeeConfPass] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  const dispatchUser = useDispatch();
  const userData = useSelector((state) => state.userInfo);

  const addNewUser = (values) => {
    console.log(values.userName, values.password);
    dispatchUser(
      addUser({
        user: values.userName,
        pass: values.password,
        email: values.email,
      })
    );
    dispatchUser(setLogin(true));
    /* Local Store Data Login */
    Promise.resolve(localStorage.setItem("userData", JSON.stringify(userData)))
      .then(() => {
        navigate("/Shop");
      })
      .catch((error) => {
        console.error("Failed to save user data:", error);
      });
  };

  useEffect(() => {
    /* Local Store Data Login */
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData.login]);


  const loginUser = (e) => {
    e.preventDefault();
    const inputUser = e.target.user.value;
    const inputPass = e.target.userPassword.value;

    if (
      /* Import Local Store Data Login */
      /* const storedData = localStorage.getItem('userData');
    const userDataLocSto = storedData ? JSON.parse(storedData) : null; */

      inputUser === userData.user &&
      inputPass ===
        userData.pass /*  || (inputUser === userDataLocSto.user && inputPass === userDataLocSto.pass) */
    ) {
      dispatchUser(setLogin(true));
      console.log("Login");
      setErrorLogin(false);
      navigate("/Shop");
    } else {
      setErrorLogin(true);
    }
  };

  const formikReg = useFormik({
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
      addNewUser(values);
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
              <Form onSubmit={loginUser}>
                <input type="text" name="user" placeholder="User" />
                <PassContainer>
                  <input
                    type={seePass ? "text" : "password"}
                    name="userPassword"
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
                {errorLogin ? <p>Wrong user or password</p> : null}
                <Button
                  text={"Login"}
                  className={"btnRegLog"}
                  type={"submit"}
                />
              </Form>
            </TabPanel>
            <TabPanel className={active === "tab2" ? "active" : ""}>
              <Form onSubmit={formikReg.handleSubmit}>
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  {...formikReg.getFieldProps("fName")}
                />
                {formikReg.touched.fName && formikReg.errors.fName ? (
                  <p>{formikReg.errors.fName}</p>
                ) : null}
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  {...formikReg.getFieldProps("lName")}
                />
                {formikReg.touched.lName && formikReg.errors.lName ? (
                  <p>{formikReg.errors.lName}</p>
                ) : null}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...formikReg.getFieldProps("email")}
                />
                {formikReg.touched.email && formikReg.errors.email ? (
                  <p>{formikReg.errors.email}</p>
                ) : null}
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  {...formikReg.getFieldProps("userName")}
                />
                {formikReg.touched.userName && formikReg.errors.userName ? (
                  <p>{formikReg.errors.userName}</p>
                ) : null}
                <PassContainer>
                  <input
                    type={seePass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    {...formikReg.getFieldProps("password")}
                  />
                  <button
                    className="showPass"
                    type="button"
                    onClick={() => SetSeePass(!seePass)}
                  >
                    {seePass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PassContainer>
                {formikReg.touched.password && formikReg.errors.password ? (
                  <p>{formikReg.errors.password}</p>
                ) : null}
                <PassContainer>
                  <input
                    type={seeConfPass ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...formikReg.getFieldProps("confirmPassword")}
                  />
                  <button
                    className="showPass"
                    type="button"
                    onClick={() => SetSeeConfPass(!seeConfPass)}
                  >
                    {seeConfPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </PassContainer>
                {formikReg.touched.confirmPassword &&
                formikReg.errors.confirmPassword ? (
                  <p>{formikReg.errors.confirmPassword}</p>
                ) : null}
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="adult"
                    {...formikReg.getFieldProps("adult")}
                  />
                  <label htmlFor="adult">I`m 18 years or older</label>
                </div>
                {formikReg.touched.adult && formikReg.errors.adult ? (
                  <p>{formikReg.errors.adult}</p>
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
