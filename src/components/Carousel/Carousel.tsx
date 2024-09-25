import { useState } from "react";
import "./Carousel.scss";
import rightArrow from "../../assets/images/right-arrow.png";
import leftArrow from "../../assets/images/left-arrow.png";

type CarouselProps = {
    images :string[];
}

const Carousel = ({images} : CarouselProps) => {
const [counter, setCounter] = useState<number>(0);

const handleIncrement = () => {
    if (counter === images.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(images.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
    <button
      className="carousel__arrow carousel__arrow--left"
      aria-label="Navigate left"
      onClick={handleDecrement}
    >
      <img src={leftArrow} alt="Left arrow" />
    </button>
    <img src={images[counter]} alt="" className="carousel__image" />
    <button
      className="carousel__arrow carousel__arrow--right"
      aria-label="Navigate right"
      onClick={handleIncrement}
    >
      <img src={rightArrow} alt="Right arrow" />
    </button>
  </div>
  )


}

export default Carousel;