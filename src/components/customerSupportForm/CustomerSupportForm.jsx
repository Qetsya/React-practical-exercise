import { useState } from "react";
import Input from "./Input";
import Textarea from "./TextArea";
import CustomerTopic from "../customerTopic/CustomerTopic";

import style from "./CustomerForm.module.css";

const CustomerSupportForm = ({ saveForm }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSave = () => {
    const data = {
      fullName: fullName,
      email: email,
      message: message,
    };
    saveForm.push(data);
    console.log(saveForm)

    const isInputEmpty = () => {
      // Kaip iskelti -- BLOGAI 
      if (fullName === "") {
        const input = document.getElementById("fullName");
        input.style.border = "1px solid red";
      }
      if (email === "") {
        const input = document.getElementById("email");
        input.style.border = "1px solid red";
      }
      if (message === "") {
        const input = document.getElementById("message");
        input.style.border = "1px solid red";
      }
    };
    isInputEmpty();
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
    setFullName(name);
  };

  const getEmail = (value) => {
    const email = value;
    console.log("CustomerSupportForm - getEmail value " + email);
    setEmail(email);
  };

  const getMessage = (value) => {
    const message = value;
    console.log("CustomerSupportForm - getMessage value " + message);
    setMessage(message);
  };

  return (
    <div className={style.root}>
      <CustomerTopic />
      {/* <form onSubmit={handleFormSubmit}> NEVEIKIA */}
      <Input
        onChange={getName}
        required
        placeholder="Full name"
        label="Full name"
        type="text"
        Id="fullName"
        // error="This field is required" padaryt su state
      />
      <Input
        onChange={getEmail}
        required
        placeholder="Email"
        label="Email"
        type="email"
        Id="email"
        // error="This field is required"
      />
      <Textarea
        required
        placeholder="Your message to us"
        label="Your message to us"
        onChange={getMessage}
        Id="message"
        // error="This field is required"
      />
      <button type="submit" className={style.button} onClick={onSave}>
        Save
      </button>
      {/* </form> */}
    </div>
  );
};

export default CustomerSupportForm;
