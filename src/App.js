
import {  useState } from "react";
import "./css/Card.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Layout from "./Pages/Layout";

import { MyContext } from "./context/inputCopy";
import ProductCard from "./Pages/ProductCard";
function App() {
  const [inputValue, setInputValue] = useState(" ");

  return (
    <MyContext.Provider value={{ val: [inputValue, setInputValue] }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='otp' element={<Product />} />
            <Route path='product' element={<ProductCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
