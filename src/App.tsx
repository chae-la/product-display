import "./App.scss";
import Home from "./components/Home/Home";
// import Nav from "./components/Nav/Nav";
import ProductList from "./components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
// import SearchBox from "./components/SearchBox/SearchBox";
import ProductInfo from "./container/ProductInfo/ProductInfo";
import products from "./data/products";

const App = () => {
  return (
    <>
      {/* <SearchBox /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route
          path="/products/:productId"
          element={<ProductInfo products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
