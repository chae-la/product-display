import { useState } from "react";
import "./FilterTab.scss";
import RadioButton from "../RadioButton/RadioButton";

type FilterTabProps = {
  handleChange: (filterType: string) => void;
  selectedFilters: string[]; 
};

const FilterTab = ({ handleChange, selectedFilters }: FilterTabProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  const productTypes = [
    "Water Based Cleansers", "Oil Based Cleansers", "Toner", "Eye Cream", 
    "Moisturiser", "Serum", "Sunscreen", "Spot Patch", "Scalp Care", 
    "Essence", "Hand Cream", "Hair Mask"
  ];

  const brands = [
    "Etude House", "Skin1004", "Dr Althea", "CosRx", "Anua", "Avene", "Epiduo", 
    "Numbuzin", "Paula's Choice", "Peach Slices", "I'm From", "Coxir", "Some By Mi", 
    "Haruharu Wonder", "Purito", "Kao", "Canmake", "Shiseido", "Beauty Of Joseon", 
    "B.Lab", "Heimish", "Kose", "Pyunkang Yul", "Medicube", "Aromatica", 
    "Rohto Mentholatum", "CeraVe", "E45", "Versed"
  ];

  return (
    <div className="filter-tab">
      <img
        src="https://static.thenounproject.com/png/4800805-200.png"
        className="filter-tab__image" onClick={handleClick}
      />
      <div className="filter__container">
        {showFilter && (
          <div className="filter-options">
            <div className="filter-options__product-type">
              <h4 className="filter-options__product-type--heading">Product Type</h4>
              {productTypes.map((type) => (
                <RadioButton
                  key={type}
                  label={type}
                  value={type}
                  groupName="type"
                  handleChange={() => handleChange(type)}
                  checked={selectedFilters.includes(type)} 
                />
              ))}
            </div>
            <div className="filter-options__brand">
              <h4 className="filter-options__brand--heading">Brand</h4>
              {brands.sort((a, b) => a.localeCompare(b)).map((brand) => (
                <RadioButton
                  key={brand}
                  label={brand}
                  value={brand}
                  groupName="brand"
                  handleChange={() => handleChange(brand)}
                  checked={selectedFilters.includes(brand)} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
