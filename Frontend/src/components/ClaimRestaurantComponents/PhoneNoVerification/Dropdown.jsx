import React, { useState } from "react";
import styles from "./Dropdown.module.css"; // Import CSS module
import { MdKeyboardArrowDown } from "react-icons/md";
import IndianFlag from "/images/indiaflag.png";

const Dropdown = ({ setCountryCode }) => {
  const [selectedOption, setSelectedOption] = useState({
    countryCode: "+91",
    value: "IND",
    img: IndianFlag,
  });
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { countryCode: "+91", value: "IND", img: IndianFlag },
    { countryCode: "+1", value: "USA", img: "image2.jpg" },
    { countryCode: "+44", value: "UK", img: "image3.jpg" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCountryCode(option.countryCode);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        {selectedOption && (
          <div className={styles.dropdownItem}>
            <img
              src={selectedOption.img}
              alt={selectedOption.value}
              className={styles.optionImage}
            />
            <span className={styles.value}>{selectedOption.value}</span>(
            {selectedOption.countryCode})
            <MdKeyboardArrowDown className={styles.dropdownIcon} />
          </div>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              <img
                src={option.img}
                alt={option.value}
                className={styles.optionImage}
              />
              {option.value} ( {option.countryCode} )
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
