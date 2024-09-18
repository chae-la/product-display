import { ChangeEvent, useState } from "react";
import Product from "../../types/Product";
import "./FilterSearch.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductList from "../../components/ProductList/ProductList";
import FilterTab from "../../components/FilterTab/FilterTab";

type FilterSearchProps = {
  products: Product[];
};

const FilterSearch = ({ products }: FilterSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredProducts = products.filter((product) => {
    const { productName, brand, productType } = product;

    const combinedFields = `${productName ?? ""} ${brand ?? ""} ${productType ?? ""}`.toLowerCase();

    return combinedFields.includes(searchTerm);
  });

  return (
    <div className="filter-search">
      <SearchBox name="Products" searchTerm={searchTerm} handleInput={handleInput} />
      
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default FilterSearch;
