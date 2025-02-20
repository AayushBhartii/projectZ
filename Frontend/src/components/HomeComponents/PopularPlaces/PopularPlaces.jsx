import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlacesCard from "../../../utils/Cards/card3/PlacesCard";
import { fetchCityFromIP } from "./LocatioBasedAPI/fetchCityFromIP";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const locations = [
  { place: "Connaught Place", count: 500, category: "dinning-out" },
  { place: "Saket", count: 450, category: "shopping" },
  { place: "Karol Bagh", count: 400, category: "restaurants" },
  { place: "Dwarka", count: 350, category: "local-market" },
  { place: "Vasant Kunj", count: 300, category: "leisure" },
  { place: "Janakpuri", count: 300, category: "cafes" },
  { place: "Greater Kailash", count: 280, category: "dinning-out" },
  { place: "Lajpat Nagar", count: 260, category: "fashion" },
];

const PopularPlaces = () => {
  const PLACES_INCREMENT = 6;
  const [visibleCount, setVisibleCount] = useState(5);
  const [city, setCity] = useState("Your City");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCity = async () => {
      const fetchedCity = await fetchCityFromIP();
      setCity(fetchedCity);
      setLoading(false);
    };

    getCity();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + PLACES_INCREMENT, locations.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - PLACES_INCREMENT, 5));
  };

  const handlePlaceClick = (category) => {
    navigate(`/show-case/?page=${category}`);
  };

  return (
    <div className="w-full my-12 flex flex-col items-center px-4">
      {/* Responsive Title Section */}
      <div className="text-left mb-8 w-full max-w-screen-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          Popular localities in and around{" "}
          <span className="font-bold text-gray-800">{loading ? "Loading..." : city}</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
          Explore the most popular areas with the best amenities around you.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {locations.slice(0, visibleCount).map((location, index) => (
          <div key={index} onClick={() => handlePlaceClick(location.category)} className="cursor-pointer">
            <PlacesCard
              place={location.place}
              count={location.count}
              link={`/showcase/?page=${location.category}`}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            />
          </div>
        ))}

        {/* Show More Button */}
        {visibleCount < locations.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg" onClick={handleShowMore}>
            <PlacesCard
              place={
                <span className="flex gap-2 items-center">
                  See more <RiArrowDropDownLine className="text-black text-2xl h-8 w-8" />
                </span>
              }
              link="#"
              hideArrow={true}
              className="bg-white shadow-md rounded-lg p-4 text-center text-black font-semibold hover:bg-gray-200 flex items-center justify-center"
            />
          </div>
        )}

        {/* Show Less Button */}
        {visibleCount > 5 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg" onClick={handleShowLess}>
            <PlacesCard
              place={
                <span className="flex gap-2 items-center">
                  See less <RiArrowDropUpLine className="text-black text-2xl h-8 w-8" />
                </span>
              }
              link="#"
              hideArrow={true}
              className="bg-white shadow-md rounded-lg p-4 text-center text-black font-semibold hover:bg-gray-200 flex items-center justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPlaces;
