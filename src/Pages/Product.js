import data from '../json/configuredata.json'
import DynamicComponent from "../components/DynamicComponent";

export default function Product() {
  const pageKey = 'page2';
  const onclick1 = {
    alert: () => {
      alert("Hello! I am an alert box!");
    },
    alert2: () => {
      alert("Alert2 Alert2 Alert2");
    },
   
  
   
  };
  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey} onclick1={onclick1} />
    </div>
  );
}
