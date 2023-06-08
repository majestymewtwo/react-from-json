import data from "../json/configuredata.json";
import DynamicComponent from "../components/DynamicComponent";
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [pageKey, setPageKey] = useState("Phone");

  const functions = {
    value: [phone, email],
    handleEmailChange: (e) => {
      setEmail(e.target.value);
    },
    handlePhoneChange: (e) => {
      setPhone(e.target.value);
    },
    handlePaymentProceed: () => {
      setPageKey("PaymentOptions");
    },
    handleGoBackToPhone: () => {
      setPageKey("Phone");
    },
    handleCard: () => {
      setPageKey("CardPayment");
    },
    handleNetBanking: () => {
      setPageKey("NetBanking");
    },
    handleGoBackToOption: () => {
      setPageKey("PaymentOptions");
    },
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#e5ebf0]'>
      <DynamicComponent
        config={data}
        pageKey={pageKey}
        eventListeners={functions}
      />
    </div>
  );
}
