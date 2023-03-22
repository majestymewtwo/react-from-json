// import axios from "axios";
// import { createElement, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Layout from "./Pages/Layout";

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => fetch(), []);
  // const fetch = () => {
  //   axios
  //     .get(`http://localhost:3000/component`)
  //     .then((response) => setData(response.data));
  // };
  // function Greeting({ name }) {
  //   return createElement(name.tag, { className: "greeting" }, name.content);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
