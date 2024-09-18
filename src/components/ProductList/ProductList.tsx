import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product.productName}
          brand={product.brand}
          score={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
