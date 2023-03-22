import { Link } from "react-router-dom";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h3>Best of Electronics</h3>
        <div className="row">
          {["1", 2, 3, 4, 5].map((item) => (
          <div className="col">  <Product id={item} type="best" />
         </div> ))}
        </div>
        <h3>Discounts for you</h3>
        <div className="row">
          {[6, 7, 8, 9, 10].map((item) => (
          <div className="col">  <Product id={item} type="discount" />
         </div> ))}
        </div>
        <h3>Suggested for you</h3>
        <div className="row">
          {[1, 3, 5, 7, 9].map((item) => (
          <div className="col">  <Product id={item} type="suggest" />
         </div> ))}
        </div>
      </div>
    </div>
  );
}
