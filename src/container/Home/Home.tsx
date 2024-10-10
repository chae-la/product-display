import Carousel from "../../components/Carousel/Carousel";
import products from "../../data/products";
import "./Home.scss";

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
  <div className="home__heading-container">
    <h1 className="home__heading">Help My Skin-to-Care</h1>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="home__blob">
      <path
        fill="rgb(217, 241, 230)"
        d="M45,-58.8C58.8,-52,70.7,-39.4,73.9,-25.1C77.1,-10.8,71.6,5.4,65.7,20.7C59.8,36,53.6,50.6,42.5,58.4C31.5,66.3,15.8,67.5,0.7,66.6C-14.4,65.6,-28.8,62.6,-44.7,56.3C-60.5,50,-77.7,40.4,-85.6,25.6C-93.5,10.7,-92.1,-9.4,-82.6,-23.2C-73.1,-37,-55.5,-44.6,-40.4,-50.9C-25.2,-57.3,-12.6,-62.4,1.5,-64.5C15.6,-66.6,31.3,-65.6,45,-58.8Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>

  <h4 className="home__description">
    Just someone who had too much time, a knowledge of building websites and
    has tried a lot of products to document and review all the products I have used.
  </h4>

  <div className="home__current-routine">
    <h3 className="home__current-routine--heading">
      Current Routine
    </h3>
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
