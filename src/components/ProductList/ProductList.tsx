import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products.json";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.sku} 
          image={product.image} 
          title={product.title} 
          sku={product.sku} 
          price={product.price} 
        />
      ))}
    </div>
  );
};

export default ProductList;
