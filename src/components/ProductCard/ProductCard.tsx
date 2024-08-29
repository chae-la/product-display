import Button from "../Button/Button";
import "./ProductCard.scss"

type ProductCardProps = {
    image: string;
    title: string;
    sku: string;
    price: number;

}

const ProductCard = ({image, title,sku,price} : ProductCardProps) => {
return (

    <div className="product-card">
        <img src={image} className="product-card__image"/>
        <h3 className="product-card__info">{title}, {sku}</h3>
        <h3 className="product-card__info">£{price}</h3>
        <div className="product-card_button">
        <Button label="Add To Basket" variant={"primary"} />
        </div>
    </div>

)

}

export default ProductCard;