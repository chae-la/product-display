import "./ProductInfo.scss";
import Product from "../../types/Product";
import { useParams, useNavigate } from "react-router-dom"; 
import Button from "../../components/Button/Button";

type ProductInfoProps = {
  products: Product[];
};

const ProductInfo = ({ products }: ProductInfoProps) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate(); 

  const product = products.find(p => p.productId === parseInt(productId ?? "", 10));

  if (!product) return <p>No Products with that ID</p>;

  const handleClick = () => {
    navigate("/skincare"); 
  };

  return (
    <div className="product-info">
      <div className="product-info__back" onClick={handleClick}>
        <Button label="Back" variant="primary" />
      </div>
      <div 
        className="product-info__image" 
        style={{ backgroundImage: `url(${product.image})` }} 
      />
      <div className="product-info__container">
        <h3 className="product-info__container product-info__container--heading">
          {product.productName} - {product.brand}
        </h3>
        <h3 className="product-info__container product-info__container--rating">
          Rating: {product.rating}/10
        </h3>
        <p className="product-info__container product-info__container--review">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
