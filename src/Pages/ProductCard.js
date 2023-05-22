import data from "../json/card.json";
import DynamicComponent from "../components/DynamicComponent";
import { useParams } from "react-router-dom";

export default function ProductCard() {
  const { id } = useParams();
  const pageKey = "page" + id;

  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey} />
    </div>
  );
}
