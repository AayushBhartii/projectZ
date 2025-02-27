


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';
import ClaimForm from './ClaimForm';
import Header from './Header';

export default function RestaurantClaimForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    location: '',
    cuisine: '',
    address: '',
    phone: '',
    email: '',
    proofOfOwnership: null,
    image: '',
    ownerName: '',
    hours: '',
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`http://localhost:4040/api/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Claim submitted successfully!');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Header/>
      <div className="mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Restaurants
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {restaurantData.name}
            </h1>

            <div className="mb-8 overflow-hidden rounded-xl bg-white shadow">
              <div className="relative h-72">
                <img
                  src={restaurantData.image}
                  alt={restaurantData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{restaurantData.name}</h3>
                  <p className="text-white/90">{restaurantData.cuisine} Cuisine</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-600" />
                  <span>{restaurantData.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-indigo-600" />
                  <span>{restaurantData.hours}</span>
                </div>
              </div>
            </div>

            <ClaimForm
              restaurantData={restaurantData}
              setRestaurantData={setRestaurantData}
              handleSubmit={handleSubmit}
              navigate={navigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
