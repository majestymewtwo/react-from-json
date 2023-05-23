import data from "../json/configuredata.json";
import DynamicComponent from "../components/DynamicComponent";
import { useState } from "react";

export default function Home() {
  const pageKey = "page1";
  const [mobile, setMobile] = useState("");
  const onclick1 = {
    alert: () => {
      alert("Hello! I am an alert box!");
    },
    alert2: () => {
      alert("Alert2 Alert2 Alert2");
    },
    mobile: mobile,
    handleMobile: (event) => {
      setMobile(event.target.value);
    },
  };
  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey} onclick1={onclick1} />
    </div>
  );
}
