import CustomerSupportForm from "./components/customerSupportForm/CustomerSupportForm";

const data = [];

const CustomerSupportPage = () => {
  return <CustomerSupportForm onSave={data} />;
};
export default CustomerSupportPage;
