import { useState } from "react";
import Input from "./Input";
import Textarea from "./TextArea";
import CustomerTopic from "../customerTopic/CustomerTopic";

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
    console.log(saveForm);
  };

  const getName = (event) => {
    setFullName(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <CustomerTopic />
      <Input
        onChange={getName}
        required
        placeholder={"Full name"}
        label={"Full name"}
        type={"text"}
        Id={fullName}
      />
      <Input
        onChange={getEmail}
        required
        placeholder={"Email"}
        label={"Email"}
        type={"email"}
        Id={email}
      />
      <Textarea
        required
        placeholder={"Your message to us"}
        label={"Your message to us"}
        onChange={getMessage}
        Id={message}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default CustomerSupportForm;
