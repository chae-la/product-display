import Carousel from "../../components/Carousel/Carousel";
import products from "../../data/products";

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
      {selectedImages.length > 0 ? (
        <Carousel images={selectedImages} />
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default Home;
