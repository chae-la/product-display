import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Product from "../../types/Product";
import { motion } from "framer-motion";
import "./ProductList.scss";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  const [visibleIds, setVisibleIds] = useState<number[]>([]);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const productId = Number(entry.target.getAttribute("data-id"));

          if (entry.isIntersecting) {
            setVisibleIds((prev) => [...prev, productId]);
          } else {
            setVisibleIds((prev) => prev.filter((id) => id !== productId));
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="product-list">
      {products.map((product, index) => {
        const isVisible = visibleIds.includes(product.productId);

        return (
          <motion.div
            key={product.productId}
            ref={(el) => (itemRefs.current[index] = el)}
            data-id={product.productId}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className="product-list__item"
          >
            <ProductCard
              product={product.productName}
              brand={product.brand}
              score={product.rating}
              image={product.image}
              description={product.description}
              productId={product.productId}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductList;
