import { useState } from "react";

const formData = [];

export const useSaveForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const error = "This field is required";

  const saveForm = () => {
    setNameError("");
    setEmailError("");
    setMessageError("");

    const data = {
      fullName: fullName,
      email: email,
      message: message,
    };

    if (fullName && email && message) {
      formData.push(data);
      setFullName("");
      setEmail("");
      setMessage("");
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
    console.log(formData);
  };

  const getName = (value) => {
    const name = value;
    // console.log("CustomerSupportForm - getName value " + name);
    if (name) {
      setFullName(name);
    } else {
      setNameError("This field is required");
    }
  };

  const getEmail = (value) => {
    const email = value;
    // console.log("CustomerSupportForm - getEmail value " + email);
    if (email) {
      setEmail(email);
    } else {
      setEmailError("This field is required");
    }
  };

  const getMessage = (value) => {
    const message = value;
    // console.log("CustomerSupportForm - getMessage value " + message);
    if (message) {
      setMessage(message);
    } else {
      setMessageError("This field is required");
    }
  };

  return {
    fullName,
    email,
    message,
    nameError,
    emailError,
    messageError,
    saveForm,
    getName,
    getEmail,
    getMessage,
    formData,
  };
};
