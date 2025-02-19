import React from "react";
import css from "./FilterPopupWindow.module.css";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const FilterPopupWindow = ({
  isOpen = true,
  setIsOpen,
  handlePopupWindowFilter,
}) => {
  const sorts = [
    { id: "popularity", label: "Popularity", value: "popularity" },
    { id: "recommanded", label: "Recommanded", value: "recommanded" },
    {
      id: "earliestArrival",
      label: "Earliest Arrival",
      value: "earliestArrival",
    },
    { id: "rating", label: "Rating", value: "rating" },
    { id: "lowToHigh", label: "Cost: Low to High", value: "lowToHigh" },
    { id: "highToLow", label: "Cost: High to Low", value: "highToLow" },
    { id: "distance", label: "Distance", value: "distance" },
  ];
  const cuisines = [
    { id: "american", label: "American Classics", value: "american" },
    { id: "mexican", label: "Mexican/Latin American", value: "mexican" },
    { id: "italian", label: "Italian", value: "italian" },
    { id: "chinese", label: "Chinese", value: "chinese" },
    { id: "japanese", label: "Japanese", value: "japanese" },
    { id: "thai", label: "Thai", value: "thai" },
    { id: "korean", label: "Korean", value: "korean" },
    { id: "vietnamese", label: "Vietnamese", value: "vietnamese" },
    { id: "indian", label: "Indian", value: "indian" },
    { id: "mediterranean", label: "Mediterranean", value: "mediterranean" },
    { id: "seafood", label: "Seafood", value: "seafood" },
    { id: "fusion", label: "Global Fusion", value: "fusion" },
    { id: "desserts", label: "Desserts & Snacks", value: "desserts" },
    { id: "chains", label: "Popular Chains in North America", value: "chains" },
  ];
  const dietary = [
    { id: "vegan", label: "Vegan", value: "vegan" },
    { id: "halal", label: "Halal", value: "halal" },
    { id: "glutenFree", label: "Gluten-Free", value: "glutenFree" },
    { id: "vegetarian", label: "Vegetarian", value: "vegetarian" },
    { id: "dairyFree", label: "Dairy-Free", value: "dairyFree" },
    { id: "nutFree", label: "Nut-Free", value: "nutFree" },
  ];

  const rating = [
    { id: "raing4.5plus", label: "Rating 4.5+", value: "raing4.5plus" },
    { id: "raing4.0plus", label: "Rating 4.0+", value: "raing4.0plus" },
    { id: "raing3.5plus", label: "Rating 3.5+", value: "raing3.5plus" },
  ];

  const price = [
    { id: "lessThanX", label: "Less Than Rs.X", value: "lessThanX" },
    { id: "300-600", label: "Rs.300 to 600", value: "300-600" },
    { id: "moreThanX", label: "More Than Rs.X", value: "moreThanX" },
  ];

  const moreFilters = [
    {
      id: "wheelchairAccessible",
      label: "Wheelchair Accessible",
      value: "wheelchairAccessible",
    },
    { id: "creditCard", label: "Credit Card", value: "creditCard" },
    { id: "buffet", label: "Buffet", value: "buffet" },
    { id: "happyHours", label: "Happy Hours", value: "happyHours" },
    { id: "servesAlcohol", label: "Serves Alcohol", value: "servesAlcohol" },
    { id: "sundayBrunch", label: "Sunday Brunch", value: "sundayBrunch" },
    {
      id: "dessertsAndBakes",
      label: "Desserts and Bakes",
      value: "dessertsAndBakes",
    },
    { id: "luxuryDining", label: "Luxury Dining", value: "luxuryDining" },
    { id: "cafes", label: "Cafés", value: "cafes" },
    { id: "fineDining", label: "Fine Dining", value: "fineDining" },
    { id: "wifi", label: "Wifi", value: "wifi" },
    { id: "outdoorSeating", label: "Outdoor Seating", value: "outdoorSeating" },
    { id: "onlineBookings", label: "Online Bookings", value: "onlineBookings" },
    { id: "hygieneRated", label: "Hygiene Rated", value: "hygieneRated" },
    { id: "openNow", label: "Open Now", value: "openNow" },
    { id: "pubsAndBars", label: "Pubs & Bars", value: "pubsAndBars" },
  ];

  let [renderComp, setRenderComp] = useState(
    <RadioOptionBox
      option={sorts}
      handlePopupWindowFilter={handlePopupWindowFilter}
    />
  );
  let [enableTab, setEnableTab] = useState("sort");

  const handleClick = (selectedFilter) => {
    switch (selectedFilter) {
      case "sort":
        setEnableTab(selectedFilter);
        setRenderComp(
          <RadioOptionBox
            option={sorts}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "cuisines":
        setEnableTab(selectedFilter);
        setRenderComp(
          <CheckBoxOptionBox
            option={cuisines}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "price":
        setEnableTab(selectedFilter);
        setRenderComp(
          <CheckBoxOptionBox
            option={price}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "rating":
        setEnableTab(selectedFilter);
        setRenderComp(
          <RadioOptionBox
            option={rating}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "dietary":
        setEnableTab(selectedFilter);
        setRenderComp(
          <CheckBoxOptionBox
            option={dietary}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "costForTwo":
        setEnableTab(selectedFilter);
        setRenderComp(
          <CheckBoxOptionBox
            option={price}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      case "moreFilters":
        setEnableTab(selectedFilter);
        setRenderComp(
          <CheckBoxOptionBox
            option={moreFilters}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
        break;
      default:
        setEnableTab("sort");
        setRenderComp(
          <RadioOptionBox
            option={sorts}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        );
    }
  };

  const filterTabs = [
    { label: "Sort", value: "sort" },
    { label: "Price Range", value: "price" },
    { label: "Cuisines", value: "cuisines" },
    { label: "Dietary", value: "dietary" },
    { label: "Cost For Two", value: "costForTwo" },
    { label: "More Filters", value: "moreFilters" },
  ];

  return (
    <>
      {isOpen && (
        <div className={css.filterWindow}>
          <div className={css.filterBoxWrapper}>
            <div className={css.header}>
              <h2>Filter</h2>
              <MdClose
                onClick={() => setIsOpen((prev) => !prev)}
                className={css.closeBtn}
              />
            </div>
            <div className={css.container}>
              <ul className={css.sidebar}>
                {filterTabs.map((el, idx) => (
                  <li
                    key={idx}
                    className={`${css.tab} ${
                      enableTab === el.value && css.active
                    }`}
                  >
                    <div
                      className={css.option}
                      onClick={() => handleClick(el.value)}
                    >
                      {el.label}
                    </div>
                  </li>
                ))}
              </ul>

              <div className={css.main}>{renderComp}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const RadioOptionBox = ({ option, handlePopupWindowFilter }) => {
  return (
    <>
      <form className={css.radioOptions}>
        <p>Sort By</p>
        {option.map((el, idx) => (
          <div className={css.sortChose} key={idx}>
            <input
              type="radio"
              id={el.id}
              name="sort"
              value={el.value}
              onChange={(evt) => handlePopupWindowFilter(evt)}
            />
            <label htmlFor={el.id}>{el.label}</label>
          </div>
        ))}
      </form>
    </>
  );
};

const CheckBoxOptionBox = ({ option, handlePopupWindowFilter }) => {
  return (
    <>
      <form className={css.checkBoxOptions}>
        <p>Filter By</p>
        {option.map((el, idx) => (
          <div className={css.cuisineChose} key={idx}>
            <input
              type="checkbox"
              id={el.id}
              name={el.value}
              value={el.value}
              onChange={(evt) => handlePopupWindowFilter(evt)}
            />
            <label htmlFor={el.id}>{el.label}</label>
          </div>
        ))}
      </form>
    </>
  );
};

export default FilterPopupWindow;
