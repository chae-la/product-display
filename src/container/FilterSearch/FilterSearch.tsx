import { useState } from "react";
import Product from "../../types/Product";
import "./FilterSearch.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
// import ProductList from "../../components/ProductList/ProductList";
import FilterTab from "../../components/FilterTab/FilterTab";
import Pagination from "../Pagination/Pagination";

type FilterSearchProps = {
  products: Product[];
};

const FilterSearch = ({ products }: FilterSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleFilterChange = (filterType: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterType)) {
        return prevFilters.filter((filter) => filter !== filterType);
      } else {
        return [...prevFilters, filterType];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    const { productName, brand, productType } = product;
    const combinedFields = `${productName ?? ""} ${brand ?? ""} ${
      productType ?? ""
    }`.toLowerCase();

    const matchesSearch = combinedFields.includes(searchTerm);

    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.includes(productType) ||
      selectedFilters.includes(brand);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="filter-search">
      <div className="filter-search__container">
        <SearchBox
          name="Products"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />

        <FilterTab
          handleChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

<div className="filter-search__pagination">
      {filteredProducts.length > 0 ? (
        <Pagination />
      ) : (
        <p>No products found matching your criteria.</p>
      )}
    </div>

</div>
  );
};

export default FilterSearch;
