import React, { useState } from 'react';
import css from './SearchBar.module.css';
import downArrow from '/icons/down-arrow1.png';
import locationIcon from '/icons/location.png';
import searchIcon from '/icons/search.png';
import { detectLocation } from '../../components/HomeComponents/PopularPlaces/CurrentLocation/detectLocation';

const SearchBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [recentLocations, setRecentLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState('');

    // Function to handle detecting and saving the location
    const handleDetectLocation = () => {
        detectLocation((location) => {
            setCurrentLocation(location); // Update current location
            if (!recentLocations.includes(location)) {
                setRecentLocations((prev) => [location, ...prev].slice(0, 5)); // Limit to 5 recent locations
            }
        });
    };

    return (
        <div className={css.outerDiv}>
            <div className={css.srch1}>
                <div className={css.iconBox}>
                    <img className={css.locationIcon} src={locationIcon} alt="location pointer" />
                </div>
                <input
                    type="text"
                    placeholder="Place"
                    value={currentLocation}
                    className={css.inpt}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    readOnly
                />
              {/* Vertical Line */}
                <div className={css.iconBox}>
                    <img className={css.downArrow} src={downArrow} alt="down arrow" />
                </div>
                <div className={css.verticalLine}></div>
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
                    <div className={css.dropdown}>
                        <div
                            className={css.dropdownItem}
                            onClick={handleDetectLocation}
                        >
                            🔍 Detect current location
                        </div>
                        <div className={css.dropdownItem}>➕ Add address</div>
                        <div className={css.dropdownHeader}>Recent Locations</div>
                        {recentLocations.map((location, index) => (
                            <div key={index} className={css.dropdownItem}>
                                {location}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
