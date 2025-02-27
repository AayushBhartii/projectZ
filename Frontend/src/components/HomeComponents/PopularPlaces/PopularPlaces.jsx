import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiArrowRightSLine, RiArrowUpSLine } from "react-icons/ri";

const PopularPlaces = () => {
  const PLACES_INCREMENT = 6;
  const [visibleCount, setVisibleCount] = useState(8);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showingMore, setShowingMore] = useState(false);
  const navigate = useNavigate();

  // Fetch city from IP
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch("http://localhost:4040/api/location");
        if (!response.ok) throw new Error("Failed to fetch location");
        const data = await response.json();
        setCity(data.city);
      } catch (err) {
        setError("Error fetching location");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, []);

  const [locations, setLocations] = useState([]);

  // Fetch locations for the city
  useEffect(() => {
    const fetchLocations = async () => {
      if (!city) return;

      try {
        const response = await fetch(
          `http://localhost:4040/api/addresses/${encodeURIComponent(city)}`
        );
        if (!response.ok) throw new Error("Failed to fetch addresses");
        const data = await response.json();

        const transformedData = data.map((loc) => ({
          place: loc.name,
          count: loc.count,
        }));

        setLocations(transformedData);
      } catch (err) {
        setError("Error fetching locations");
        console.error("Error:", err);
      }
    };

    fetchLocations();
  }, [city]);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + PLACES_INCREMENT, locations.length)
    );
    setShowingMore(true);
  };

  const handleShowLess = () => {
    setVisibleCount(5);
    setShowingMore(false);
  };

  const handlePlaceClick = (placeName) => {
    navigate(`/addresses/${encodeURIComponent(placeName)}`);
  };

  return (
    <div className="w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Title Section - Matching the image styling */}
      <h1 className="text-4xl font-normal text-gray-800 mb-8">
        Popular localities in and around{" "}
        <span className="font-medium">
          {loading ? "Loading..." : city }
        </span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="flex justify-center items-center col-span-full py-8">
            <AiOutlineLoading3Quarters className="animate-spin text-blue-500 h-8 w-8" />
          </div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500 py-8">
            {error}
          </div>
        ) : locations.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8">
            No localities found in {city}
          </div>
        ) : (
          <>
            {locations.slice(0, visibleCount).map((location, index) => (
              <div
                key={index}
                onClick={() => handlePlaceClick(location.place)}
                className="cursor-pointer group"
              >
                <div className="bg-white border border-dark  shadow hover:shadow-md rounded-lg p-2 transition-all duration-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-1">
                        {location.place}
                      </h3>
                      <p className="text-gray-600">
                        {location.count}{" "}
                        {location.count === 1 ? "place" : "places"}
                      </p>
                    </div>
                    <RiArrowRightSLine className="text-2xl text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </div>
                </div>
              </div>
            ))}

            {/* Control Cards */}
            {!showingMore && visibleCount < locations.length && (
              <div onClick={handleShowMore} className="cursor-pointer group">
                <div className="bg-white border border-dark  shadow-sm hover:shadow-md rounded-lg p-6 transition-all duration-200 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">
                      see more
                    </h3>
                  </div>
                  <RiArrowRightSLine className="text-2xl text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </div>
              </div>
            )}

            {showingMore && (
              <div onClick={handleShowLess} className="cursor-pointer group">
                <div className="bg-white border border-dark  shadow-sm hover:shadow-md rounded-lg p-6 transition-all duration-200 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">
                      see less
                    </h3>
                  </div>
                  <RiArrowUpSLine className="text-2xl text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PopularPlaces;