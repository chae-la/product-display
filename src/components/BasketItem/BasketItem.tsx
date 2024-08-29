import "./BasketItem.scss"

type BasketItemProps = {
    image: string;
    title: string;
    price: number;
}


const BasketItem = ({image, title, price} : BasketItemProps) => {
return (

    <div className="basket-item">
        <img className="basket-item__image" src={image}/>
        <h4 className="basket-item__info basket-item__info--title">{title}</h4>
        <h4 className="basket-item__info">£{price}</h4>
    </div>

)

}

export default BasketItem;