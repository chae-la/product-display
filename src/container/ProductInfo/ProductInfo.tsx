import "./ProductInfo.scss";
import Product from "../../types/Product";
import { useParams } from "react-router-dom";

type ProductInfoProps = {
  products: Product[];
};

const ProductInfo = ({ products }: ProductInfoProps) => {
    const { productId } = useParams<{ productId: string }>();

    
    const product = products.find(p => p.productId === parseInt(productId ?? "", 10));
  if (product === undefined) return <p>No Products with that ID</p>;

  return (
    <div className="product-info">
      <img src={product.image} className="product-info__image" />
      <div className="product-info__container">
        <h3 className="product-info__container product-info__container--heading">
          {product.productName} - {product.brand}
        </h3>
        <h3 className="product-info__container product-info__container--heading">
          {product.rating}
        </h3>
        <p className="product-info__container product-info__container--review">Lorem ipsum etcetc...</p>
      </div>
    </div>
  );
};

export default ProductInfo;
