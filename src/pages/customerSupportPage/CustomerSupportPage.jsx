import CustomerSupportForm from "./components/customerSupportForm/CustomerSupportForm";

const saveForm = (value) => {
console.log(value)
}

const CustomerSupportPage = () => {
  return <CustomerSupportForm onSave={saveForm} />;
};
export default CustomerSupportPage;
