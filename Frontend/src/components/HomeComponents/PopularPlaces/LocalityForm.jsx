



import React, { useState, useCallback } from 'react';
import { MapPin, Navigation, Save } from 'lucide-react';

const LocalityForm = () => {
  const [locationHierarchy, setLocationHierarchy] = useState({
    country: '',
    state: '',
    district: '',
    city: '',
    other: '',
    postcode: '',
    road: '',
    landmark: ''
  });
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Location not detected');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrentLocation = useCallback(() => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude.toFixed(6));
        setLongitude(longitude.toFixed(6));

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const { address } = data;
          setLocationHierarchy({
            country: address.country || '',
            state: address.state || '',
            district: address.county || '',
            city: address.city || address.town || address.village || '',
            other: address.suburb || '',
            postcode: address.postcode || '',
            road: address.road || '',
            landmark: address.attraction || address.building || ''
          });

          setCurrentLocation(data.display_name || 'Location name not available');
        } catch (error) {
          console.error('Error fetching location details:', error);
          setCurrentLocation('Error retrieving location details.');
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        console.error('Error fetching geolocation:', error);
        alert('Unable to fetch location. Please check your permissions.');
        setIsLoading(false);
      }
    );
  }, []);

  const handleLocationChange = (level, value) => {
    setLocationHierarchy((prev) => ({
      ...prev,
      [level]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!latitude || !longitude) {
      alert('Please provide both latitude and longitude for the location.');
      setIsLoading(false);
      return;
    }

    alert('Locality form submitted successfully!');
    console.log({
      name,
      count,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude],
        hierarchy: locationHierarchy
      }
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <MapPin className="mr-3 text-blue-600" /> Create a New Locality
        </h2>

        <div className="mb-6">
          <button
            onClick={fetchCurrentLocation}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Navigation className="mr-2" />
            {isLoading ? 'Detecting Location...' : 'Detect Current Location'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Country', 'State', 'District', 'City', 'Other', 'Postcode', 'Road', 'Landmark'].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-semibold text-gray-600 mb-1">{field}</label>
                <input
                  type="text"
                  value={locationHierarchy[field.toLowerCase()]}
                  onChange={(e) => handleLocationChange(field.toLowerCase(), e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Locality Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter locality name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Number of Places</label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter place count"
                required
                min="0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Latitude</label>
              <input
                type="number"
                step="any"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter latitude"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Longitude</label>
              <input
                type="number"
                step="any"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter longitude"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            <Save className="mr-2" />
            {isLoading ? 'Saving...' : 'Create Locality'}
          </button>
        </form>

        {currentLocation !== 'Location not detected' && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Detected Location</h3>
            <div className="space-y-1">
              <p className="text-gray-600 truncate">
                <strong>Location:</strong> {currentLocation}
              </p>
              <p className="text-gray-600">
                <strong>Latitude:</strong> {latitude}
              </p>
              <p className="text-gray-600">
                <strong>Longitude:</strong> {longitude}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalityForm;
