import data from '../json/configuredata.json'
import DynamicComponent from "../components/DynamicComponent";

export default function Home() {
  const pageKey = 'page2';
  return (
    <div>
      <DynamicComponent config={data} pageKey={pageKey}/>
    </div>
  );
}
