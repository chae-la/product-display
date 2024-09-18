import "./App.scss";
import Home from "./components/Home/Home";
// import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import ProductInfo from "./container/ProductInfo/ProductInfo";
import products from "./data/products";
import FilterSearch from "./container/FilterSearch/FilterSearch";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<FilterSearch products={products} />} />
        <Route
          path="/products/:productId"
          element={<ProductInfo products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
