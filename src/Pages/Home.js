import data from '../json/configuredata.json'
import DynamicComponent from "../components/DynamicComponent";
import search from "../json/searchconfig.json"
import searc from "../json/search.json"

export default function Home() {
  const pageKey = 'page1';
  
  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey}  />
    </div>
  );
}
