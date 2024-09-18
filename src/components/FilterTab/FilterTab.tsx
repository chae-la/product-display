import { useState } from "react";
import "./FilterTab.scss";
import RadioButton from "../RadioButton/RadioButton";

type FilterTabProps = {
  handleChange: (filterType: string) => void;
};

const FilterTab = ({ handleChange }: FilterTabProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="filter-tab">
      <img
        src="https://static.thenounproject.com/png/4800805-200.png"
        className="filter-tab__image" onClick={handleClick}
      ></img>
      <div className="filter__container">
        {showFilter && (
          <div className="filter-options">
            <div className="filter-options__product-type">
                <h4 className="filter-options__product-type filter-options__product-type--heading">Product Type</h4>
              <RadioButton
                label="Water Based Cleansers"
                value="Water Based Cleansers"
                groupName="type"
                handleChange={() => handleChange("Water Cleanser")}
              />
              <RadioButton
                label="Oil Based Cleansers"
                value="Oil Based Cleansers"
                groupName="type"
                handleChange={() => handleChange("Oil Cleanser")}
              />
              <RadioButton
                label="Toner"
                value="Toner"
                groupName="type"
                handleChange={() => handleChange("Toner")}
              />
              <RadioButton
                label="Eye Cream"
                value="Eye Cream"
                groupName="type"
                handleChange={() => handleChange("Eye Cream")}
              />
              <RadioButton
                label="Moisturiser"
                value="Moisturiser"
                groupName="type"
                handleChange={() => handleChange("Moisturiser")}
              />
              <RadioButton
                label="Serum"
                value="Serum"
                groupName="type"
                handleChange={() => handleChange("Serum")}
              />
              <RadioButton
                label="Sunscreen"
                value="Sunscreen"
                groupName="type"
                handleChange={() => handleChange("Sunscreen")}
              />
              <RadioButton
                label="Spot Patch"
                value="Spot Patch"
                groupName="type"
                handleChange={() => handleChange("Spot Patch")}
              />
              <RadioButton
                label="Scalp Care"
                value="Scalp Care"
                groupName="type"
                handleChange={() => handleChange("Scalp Care")}
              />
              <RadioButton
                label="Essence"
                value="Essence"
                groupName="type"
                handleChange={() => handleChange("Essence")}
              />
              <RadioButton
                label="Hand Cream"
                value="Hand Cream"
                groupName="type"
                handleChange={() => handleChange("Hand Cream")}
              />
              <RadioButton
                label="Hair Mask"
                value="Hair Mask"
                groupName="type"
                handleChange={() => handleChange("Hair Mask")}
              />
            </div>
            <div className="filter-options__brand">
                <h4 className="filter-options__brand filter-options__brand--heading">Brand</h4>
              <RadioButton
                label="Etude House"
                value="Etude House"
                groupName="brand"
                handleChange={() => handleChange("Etude House")}
              />
              <RadioButton
                label="Skin1004"
                value="Skin1004"
                groupName="brand"
                handleChange={() => handleChange("Skin1004")}
              />
              <RadioButton
                label="Dr. Althea"
                value="Dr. Althea"
                groupName="brand"
                handleChange={() => handleChange("Dr. Althea")}
              />
              <RadioButton
                label="CosRx"
                value="CosRx"
                groupName="brand"
                handleChange={() => handleChange("CosRx")}
              />
              <RadioButton
                label="Anua"
                value="Anua"
                groupName="brand"
                handleChange={() => handleChange("Anua")}
              />
              <RadioButton
                label="Avene"
                value="Avene"
                groupName="brand"
                handleChange={() => handleChange("Avene")}
              />
              <RadioButton
                label="Epiduo"
                value="Epiduo"
                groupName="brand"
                handleChange={() => handleChange("Epiduo")}
              />
              <RadioButton
                label="Numbuzin"
                value="Numbuzin"
                groupName="brand"
                handleChange={() => handleChange("Numbuzin")}
              />
              <RadioButton
                label="Paula's Choice"
                value="Paula's Choice"
                groupName="brand"
                handleChange={() => handleChange("Paula's Choice")}
              />
              <RadioButton
                label="Peach Slices"
                value="Peach Slices"
                groupName="brand"
                handleChange={() => handleChange("Peach Slices")}
              />
              <RadioButton
                label="I'm From"
                value="I'm From"
                groupName="brand"
                handleChange={() => handleChange("I'm From")}
              />
              <RadioButton
                label="Coxir"
                value="Coxir"
                groupName="brand"
                handleChange={() => handleChange("Coxir")}
              />
              <RadioButton
                label="Some By Mi"
                value="Some By Mi"
                groupName="brand"
                handleChange={() => handleChange("Some By Mi")}
              />
              <RadioButton
                label="Haruharu Wonder"
                value="Haruharu Wonder"
                groupName="brand"
                handleChange={() => handleChange("Haruharu Wonder")}
              />
              <RadioButton
                label="Purito"
                value="Purito"
                groupName="brand"
                handleChange={() => handleChange("Purito")}
              />
              <RadioButton
                label="Biore"
                value="Biore"
                groupName="brand"
                handleChange={() => handleChange("Biore")}
              />
              <RadioButton
                label="Canmake"
                value="Canmake"
                groupName="brand"
                handleChange={() => handleChange("Canmake")}
              />
              <RadioButton
                label="Shiseido"
                value="Shiseido"
                groupName="brand"
                handleChange={() => handleChange("Shiseido")}
              />
              <RadioButton
                label="Beauty Of Joseon"
                value="Beauty Of Joseon"
                groupName="brand"
                handleChange={() => handleChange("Beauty Of Joseon")}
              />
              <RadioButton
                label="B.Lab"
                value="B.Lab"
                groupName="brand"
                handleChange={() => handleChange("B.Lab")}
              />
              <RadioButton
                label="Heimish"
                value="Heimish"
                groupName="brand"
                handleChange={() => handleChange("Heimish")}
              />
              <RadioButton
                label="Kose"
                value="Kose"
                groupName="brand"
                handleChange={() => handleChange("Kose")}
              />
              <RadioButton
                label="Pyunkang Yul"
                value="Pyunkang Yul"
                groupName="brand"
                handleChange={() => handleChange("Pyunkang Yul")}
              />
              <RadioButton
                label="Medicube"
                value="Medicube"
                groupName="brand"
                handleChange={() => handleChange("Medicube")}
              />
              <RadioButton
                label="Aromatica"
                value="Aromatica"
                groupName="brand"
                handleChange={() => handleChange("Aromatica")}
              />
              <RadioButton
                label="Rohto Mentholatum"
                value="Rohto Mentholatum"
                groupName="brand"
                handleChange={() => handleChange("Rohto Mentholatum")}
              />
              <RadioButton
                label="CeraVe"
                value="CeraVe"
                groupName="brand"
                handleChange={() => handleChange("CeraVe")}
              />
              <RadioButton
                label="E45"
                value="E45"
                groupName="brand"
                handleChange={() => handleChange("E45")}
              />
              <RadioButton
                label="Versed"
                value="Versed"
                groupName="brand"
                handleChange={() => handleChange("Versed")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
