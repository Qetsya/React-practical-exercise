import { useState } from "react";
import Input from "./Input";
import Textarea from "./TextArea";
import CustomerTopic from "../customerTopic/CustomerTopic";

import styles from "./CustomerForm.module.css";

const CustomerSupportForm = ({ onSave }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const saveForm = () => {
    setNameError("");
    setEmailError("");
    setMessageError("");

    const data = {
      fullName: fullName,
      email: email,
      message: message,
    };

    const error = "This field is required";

    if (fullName && email && message) {
      onSave.push(data);
    } else {
      if (!fullName) {
        setNameError(error);
      }
      if (!email) {
        setEmailError(error);
      }
      if (!message) {
        setMessageError(error);
      }
    }

    console.log(onSave);

    // const isInputEmpty = () => {
    //   if (!fullName) {
    //     const input = document.getElementById("fullName");
    //     input.style.border = "1px solid red";
    //   }
    //   if (!email) {
    //     const input = document.getElementById("email");
    //     input.style.border = "1px solid red";
    //   }
    //   if (!message) {
    //     const input = document.getElementById("message");
    //     input.style.border = "1px solid red";
    //   }
    // };
    // isInputEmpty();
    // console.log(nameError, emailError, messageError);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);

  //   const formData = new FormData(event.target);

  //   console.log("test", Object.fromEntries(formData.entries()))

  //   for (let [key, value] of formData.entries()) {
  //     console.log("Form entries: ", key, value);
  //     saveForm[key] = value;
  //   }

  //   console.log("handleFormSubmit - data: ", saveForm);
  // } NEVEIKIA

  const getName = (value) => {
    const name = value;
    console.log("CustomerSupportForm - getName value " + name);

    if (name) {
      setFullName(name);
    } else {
      setNameError("This field is required");
    }
  };

  const getEmail = (value) => {
    const email = value;
    console.log("CustomerSupportForm - getEmail value " + email);
    if (email) {
      setEmail(email);
    } else {
      setEmailError("This field is required");
    }
  };

  const getMessage = (value) => {
    const message = value;
    console.log("CustomerSupportForm - getMessage value " + message);
    if (message) {
      setMessage(message);
    } else {
      setMessageError("This field is required");
    }
  };

  return (
    <div className={styles.root}>
      <CustomerTopic />
      {/* <form onSubmit={handleFormSubmit}> NEVEIKIA */}
      <div className={styles.form_container}>
        <Input
          onChange={getName}
          required
          placeholder="Full name"
          label="Full name"
          type="text"
          Id="fullName"
          error={nameError}
        />
        {nameError && nameError}
        <Input
          onChange={getEmail}
          required
          placeholder="Email"
          label="Email"
          type="email"
          Id="email"
          error={nameError}
        />
        {emailError && emailError}
        <Textarea
          required
          placeholder="Your message to us"
          label="Your message to us"
          onChange={getMessage}
          Id="message"
          error={nameError}
        />
        {messageError && messageError}
      </div>
      <button type="submit" className={styles.button} onClick={saveForm}>
        Save
      </button>
      {/* </form> */}
    </div>
  );
};

export default CustomerSupportForm;
