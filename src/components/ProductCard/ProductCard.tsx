import { useState } from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
import whiteCross from "../../assets/images/white-cross.png"

type ProductCardProps = {
    image: string;
    product: string;
    brand: string;
    score: number;
    description : string;
};

const ProductCard = ({ image, product, brand, score, description }: ProductCardProps) => {

  const [showBack, setShowBack] = useState<boolean>(false);

  const handleClick = () => {
    setShowBack(!showBack);
  }

  const frontContent = (
    <div onClick={handleClick} className="product-card__button">
      <Button label="More" variant="primary" />
    </div>
  );

  const backContent = (
    <>
      <img
        src={whiteCross}
        className="product-card__cross"
        onClick={handleClick}
        alt="Close text"
      />
      {description
        .split(".")
        .map((sentence, index) => <p key={index}>{`${sentence}.`}</p>)
        .slice(0, -1)}
    </>
  );

  let contentClassName = "product-card__content";
  if(showBack) contentClassName += " product-card__content--back"

  return (
    <div className="product-card">
      <img src={image} alt={product} className="product-card__image"/>
      <div className={contentClassName}>
        <h4 className="product-card__info">{product} - {brand}</h4>
        <h4 className="product-card__info">{score}/10</h4>
        {showBack ? backContent : frontContent}
      </div>
    </div>
  );
};

export default ProductCard;
