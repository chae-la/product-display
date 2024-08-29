import { useState } from "react";
import "./Basket.scss"

const Basket = () => {
    const [showBasket, setShowBasket] = useState<boolean>(false);

    const handleClick = () => {
        setShowBasket(!showBasket)
    }

return(
    <div className="basket">
        <h2 onClick={handleClick}>Your Basket</h2>
    {/* all items shown here */}
    <h4 className="basket__total">Total : £{}</h4>
    </div>
)

}

export default Basket;