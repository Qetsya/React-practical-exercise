import Input from "./Input";
import Textarea from "./TextArea";
import CustomerTopic from "../customerTopic/CustomerTopic";

import styles from "./CustomerForm.module.css";

import {useSaveForm} from "./hooks/useSaveForm";

const CustomerSupportForm = ({onSave}) => {
  const {
    fullName,
    email,
    message,
    nameError,
    emailError,
    messageError,
    saveForm,
    getEmail,
    getName,
    getMessage,
    formData
  } = useSaveForm();

  onSave(formData);

  return (
    <div className={styles.root}>
      <CustomerTopic />
      <div className={styles.form_container}>
        <Input
          onChange={getName}
          required
          placeholder="Full name"
          label="Full name"
          type="text"
          Id="fullName"
          error={nameError}
          value={fullName}
        />
        {nameError && nameError}
        <Input
          onChange={getEmail}
          required
          placeholder="Email"
          label="Email"
          type="email"
          Id="email"
          error={emailError}
          value={email}
        />
        {emailError && emailError}
        <Textarea
          required
          placeholder="Your message to us"
          label="Your message to us"
          onChange={getMessage}
          Id="message"
          error={messageError}
          value={message}
        />
        {messageError && messageError}
      </div>
      <button type="submit" className={styles.button} onClick={saveForm}>
        Save
      </button>
    </div>
  );
};

export default CustomerSupportForm;
