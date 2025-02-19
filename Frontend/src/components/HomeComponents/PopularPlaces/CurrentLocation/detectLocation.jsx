export const detectLocation = (setLocation) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );

                    if (!response.ok) {
                        throw new Error('Failed to fetch location data');
                    }

                    const data = await response.json();

                    if (data && data.display_name) {
                        const address = data.display_name;
                        console.log(`Detected Address: ${address}`);
                        setLocation(address);
                        alert(`Detected Location: ${address}`);
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
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert('Location access denied by the user.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert('Location information is unavailable.');
                        break;
                    case error.TIMEOUT:
                        alert('The request to get user location timed out.');
                        break;
                    default:
                        alert('An unknown error occurred.');
                        break;
                }
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
};
