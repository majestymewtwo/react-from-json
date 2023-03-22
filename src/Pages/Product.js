import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function Product(props) {
  const [product, setProduct] = useState(null);
  useEffect(() => getProduct(), []);
  const getProduct = () => {
    axios
      .get(`http://localhost:3000/product/${props.id}`)
      .then((response) => setProduct(response.data));
  };
  return (
    <div>
      <div class="container mt-3">
        {product && (
          <div
            class="card" style={{width:'200px'}}
          >
            <div class="card-body">
              <h4 class="card-title">{product.name}</h4>
              <div>
                {props.type == "best" ? (
                  <p class="card-text">Rs.{product.price}</p>
                ) : props.type == "discount" ? (
                  <p>Min {product.discount} dicount</p>
                ) : (
                  <div>
                    <div className="row">
                      <p className="col">{product.ratings}({product.reviewcount})</p>
                    </div>
                    <div className="row ">
                      <p className="col">Rs.{product.price}</p>
                      <p className="col"><span style={{textDecoration: "line-through"}}>Rs.{product.mrp}</span></p>
                      <p className="col">discount {product.discount}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <br />
      </div>
    </div>
  );
}
