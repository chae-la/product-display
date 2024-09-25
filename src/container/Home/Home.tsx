import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import products from "../../data/products";
import "./Home.scss"

const Home = () => {
  const selectedProductIds = [2, 1, 4, 33, 7, 8, 9, 14, 15, 16, 19];

  const getSelectedImages = (ids: number[]): string[] => {
    return ids.reduce<string[]>((acc, id) => {
      const product = products.find((product) => product.productId === id);
      if (product && product.image) {
        acc.push(product.image);
      }
      return acc;
    }, []);
  };

  const selectedImages = getSelectedImages(selectedProductIds);

  return (
    <div className="home">
      <h1>Placeholder Title</h1>
      <div className="home__current-routine">
        <h3 className="home__current-routine home__current-routine--heading">Current Routine</h3>
        {selectedImages.length > 0 ? (
              <Carousel images={selectedImages} productIds={selectedProductIds} />
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
