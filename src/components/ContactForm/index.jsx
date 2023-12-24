import React, { useState } from "react";
import { ContactFormWrapper, Form, ErrorInput } from "./styles";
import Button from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../Modal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
        .required("Required"),
      lName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      /* alert(JSON.stringify(values, null, 2)); */

      setShowModal(true);
    },
  });

  return (
    <ContactFormWrapper>
      <h1>Contact Us</h1>
      <p className="test" style={{ color: "black" }}>
        fdfdsfd
      </p>
      <Form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          {...formik.getFieldProps("fName")}
        />
        {formik.touched.fName && formik.errors.fName ? (
          <ErrorInput>{formik.errors.fName}</ErrorInput>
        ) : null}
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          {...formik.getFieldProps("lName")}
        />
        {formik.touched.lName && formik.errors.lName ? (
          <ErrorInput>{formik.errors.lName}</ErrorInput>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorInput>{formik.errors.email}</ErrorInput>
        ) : null}
        <textarea
          name="message"
          placeholder="Message"
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorInput>{formik.errors.message}</ErrorInput>
        ) : null}
        <Button
          className={"contactFormBtn"}
          text={"Send Message"}
          type={"submit"}
        />
      </Form>
      {showModal ? (
        <Modal btnText={"Back to Home"} title={"Thank You!"} text={"We'll get back to you soon"} page={"/"} />
      ) : null}
    </ContactFormWrapper>
  );
};

export default ContactForm;
