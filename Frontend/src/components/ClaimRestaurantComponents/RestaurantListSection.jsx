import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Search, Store, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const RestaurantListSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  // Fetch restaurants and cuisines
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4040/api/restaurants"
        );
        if (Array.isArray(response.data)) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
          setCuisines([...new Set(response.data.map((r) => r.cuisine))]);
        } else {
          console.error("API response is not an array:", response.data);
          setRestaurants([]);
          setFilteredRestaurants([]);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setRestaurants([]);
        setFilteredRestaurants([]);
      }
    };
    fetchRestaurants();
  }, []);

  // Filter restaurants based on search query and cuisine
  const filterRestaurants = () => {
    return restaurants.filter((restaurant) => {
      const searchQueryLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQueryLower ||
        restaurant.name.toLowerCase().includes(searchQueryLower) ||
        restaurant.address.toLowerCase().includes(searchQueryLower);
      const matchesCuisine =
        !selectedCuisine || restaurant.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    });
  };

  // Handle search input and button
  const handleSearch = (value) => setSearchQuery(value);

  const handleSearchClick = () => {
    setHasSearched(true);
    const results = filterRestaurants();
    setFilteredRestaurants(results);
  };

  // Clear filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCuisine("");
    setHasSearched(false);
    setFilteredRestaurants(restaurants);
  };

  // Handle restaurant claim
  const handleClaimRestaurant = (id) => {
    if (id) navigate(`/claim-restaurant/${id}`);
    else console.error("Restaurant ID is missing.");
  };

  return (
    <div className=" bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Find and Claim Your Restaurant
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Search our database of restaurants and take control of your business
            listing today.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                placeholder="Search by name or location..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            

            {/* Search Button */}
            <button
              onClick={handleSearchClick}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Search
            </button>

            {/* Clear Button */}
            {(searchQuery || selectedCuisine) && (
              <button
                onClick={clearFilters}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-5xl mx-auto">
          {hasSearched ? (
            filteredRestaurants.length === 0 ? (
              <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Results Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or cuisine filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRestaurants.map((restaurant) => (
                  <div
                    key={restaurant._id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{restaurant.address}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        {restaurant.cuisine} Cuisine
                      </div>
                      <div className="flex items-center justify-between">
                        {restaurant.status === "claimed" ? (
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Claimed
                          </span>
                        ) : (
                          <button
                            onClick={() =>
                              handleClaimRestaurant(restaurant._id)
                            }
                            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                          >
                            Claim Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
              <Store className="mx-auto h-16 w-16 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Start Exploring
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Use the search above to find restaurants and claim your listing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListSection;
