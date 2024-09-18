import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import Product from "../../types/Product";

type ProductListProps = {
  products : Product[]
}

const ProductList = ({products} : ProductListProps) => {
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
