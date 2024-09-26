import { useState } from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
import whiteCross from "../../assets/images/white-cross.png";
import { Link } from "react-router-dom";

type ProductCardProps = {
  image: string;
  product: string;
  brand: string;
  score: number;
  description: string;
  productId: number;
};

const ProductCard = ({
  image,
  product,
  brand,
  score,
  description,
  productId,
}: ProductCardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

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
      <Link to={`/skincare/${productId}`} className="product-card__even-more">
        <Button label="Review" variant="primary" />
      </Link>
    </>
  );

  let contentClassName = "product-card__content";
  if (showBack) contentClassName += " product-card__content--back";

  return (
    <div className="product-card">
      <Link to={`/skincare/${productId}`}>
        <img src={image} alt={product} className="product-card__image" />
      </Link>
      <div className={contentClassName}>
        <h4 className="product-card__info">
          {product} - {brand}
        </h4>
        <h4 className="product-card__info">{score}/10</h4>
        {showBack ? backContent : frontContent}
      </div>
    </div>
  );
};

export default ProductCard;
