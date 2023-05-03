import data from '../json/configuredata.json'
import DynamicComponent from "../components/DynamicComponent";

export default function Product() {
  const pageKey = 'page2';
  
  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey}  />
    </div>
  );
}
