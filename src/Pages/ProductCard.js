import data from "../json/card.json";
import "../css/Card.css";
import DynamicComponent from "../components/DynamicComponent";

export default function ProductCard() {
  return (
    <div className='container'>
      <DynamicComponent config={data} pageKey={"page1"} />
      <DynamicComponent config={data} pageKey={"page2"} />
      <DynamicComponent config={data} pageKey={"page3"} />
      <DynamicComponent config={data} pageKey={"page4"} />
    </div>
  );
}
