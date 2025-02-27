import React, { useState, useEffect, useRef } from "react";
import css from "./SearchBar.module.css";
import downArrow from "/icons/down-arrow1.png";
import locationIcon from "/icons/location.png";
import searchIcon from "/icons/search.png";
import detectLocationIcon from "./detectcurrectlocation.png"; // Image for the detect location button
import { detectLocation } from "../../components/HomeComponents/PopularPlaces/CurrentLocation/detectLocation";
import { MdOutlineAccessTime } from "react-icons/md";

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentLocations, setRecentLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(""); // Track the current location
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Load the stored location and recent locations on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("currentLocation");
    const savedRecentLocations = JSON.parse(
      localStorage.getItem("recentLocations") || "[]"
    );

    if (savedLocation) setCurrentLocation(savedLocation); // Load the current location
    if (savedRecentLocations) setRecentLocations(savedRecentLocations); // Load recent locations
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle detecting and saving the location
  const handleDetectLocation = () => {
    detectLocation((location) => {
      if (location) {
        setCurrentLocation(location); // Update current location
        localStorage.setItem("currentLocation", location); // Persist current location

        if (!recentLocations.includes(location)) {
          const updatedRecentLocations = [location, ...recentLocations].slice(
            0,
            5
          ); // Limit to 5
          setRecentLocations(updatedRecentLocations); // Update state
          localStorage.setItem(
            "recentLocations",
            JSON.stringify(updatedRecentLocations)
          ); // Persist recent locations
        }
      }
    });
  };

  return (
    <div className={css.outerDiv} ref={dropdownRef}>
      <div className={css.srch1}>
        <div className={css.iconBox}>
          <img className={css.icon} src={locationIcon} alt="location pointer" />
        </div>
        <input
          type="text"
          placeholder="Place.."
          value={currentLocation} // Show the current location here
          className={css.inpt}
          onFocus={() => setShowDropdown(true)} // Show dropdown on focus
          readOnly // Prevent user from typing
        />
        <div className={css.iconBox}>
          <img className={css.downArrow} src={downArrow} alt="down arrow" />
        </div>
      </div>
      <hr className={css.hr} />
      <div className={css.srch2}>
        <div className={css.iconBox}>
          <img className={css.icon} src={searchIcon} alt="search icon" />
        </div>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className={css.inpt}
        />
      </div>
      {showDropdown && (
        <div className={css.dropdownBox}>
          <div className={css.dropdown} style={{ width: "70%" }}>
            {/* Detect Location button */}
            <div
              className={`${css.dropdownItem} ${css.detectLocationBtn} p-3 cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md`}
            >
              <img
                src={detectLocationIcon}
                alt="detect location icon"
                onClick={handleDetectLocation} // Detect location when clicked
              />
            </div>
            {/* Recent Locations section */}
            <div className={css.dropdownHeader}>Recent Locations</div>
            {recentLocations.length === 0 ? (
              <div className="p-3 text-sm text-gray-500">
                No recent locations found
              </div>
            ) : (
              recentLocations.map((location, index) => (
                <div
                  key={index}
                  className={`${css.dropdownItem} cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md`}
                >
                  <div className="flex items-center gap-4">
                    <MdOutlineAccessTime className="size-7" />
                    {location}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
