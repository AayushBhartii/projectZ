export const detectLocation = (setLocation) => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            try {
                // OpenStreetMap Nominatim API URL with reverse geocoding
                const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch location data');
                }

                const data = await response.json();

                // Check if address data is available
                if (data?.display_name) {
                    const address = data.display_name;
                    console.log(`Detected Address: ${address}`);
                    setLocation(address); // Update location in the callback
                } else {
                    console.error('Address data is missing');
                    alert('Could not retrieve address. Please try again.');
                }
            } catch (error) {
                console.error('Error fetching address:', error);
                alert('An error occurred while detecting the location.');
            }
        },
        (error) => {
            // Handle geolocation errors
            const errorMessages = {
                1: 'Location access denied by the user.',
                2: 'Location information is unavailable.',
                3: 'The request to get user location timed out.',
            };
            alert(errorMessages[error.code] || 'An unknown error occurred.');
        },
        {
            enableHighAccuracy: true, // Request high accuracy
            timeout: 10000,          // Timeout after 10 seconds
            maximumAge: 0,           // No caching of location
        }
    );
};
