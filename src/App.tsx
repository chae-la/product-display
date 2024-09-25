import "./App.scss";
import Home from "./container/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductInfo from "./container/ProductInfo/ProductInfo";
import products from "./data/products";
import FilterSearch from "./container/FilterSearch/FilterSearch";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<FilterSearch products={products} />} />
        <Route
          path="/skincare/:productId"
          element={<ProductInfo products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
