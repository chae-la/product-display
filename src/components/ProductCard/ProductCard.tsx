import Button from "../Button/Button";
import "./ProductCard.scss";

type ProductCardProps = {
    image: string;
    product: string;
    brand: string;
    score: number;
};

const ProductCard = ({ image, product, brand, score }: ProductCardProps) => {
  return (
    <div className="product-card-container"> 
      <div className="product-card">
        <img src={image} alt={product} className="product-card__image" />
        <h4 className="product-card__info">{product} - {brand}</h4>
        <h4 className="product-card__info product-card__info--rating">Rating: {score}/10</h4>
        <div className="product-card_button">
          <Button label="More..." variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
