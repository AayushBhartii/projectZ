// export const detectLocation = (setLocation) => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const { latitude, longitude } = position.coords;
//                 console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

//                 try {
//                     const response = await fetch(
//                         `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//                     );

//                     if (!response.ok) {
//                         throw new Error('Failed to fetch location data');
//                     }

//                     const data = await response.json();

//                     if (data && data.display_name) {
//                         const address = data.display_name;
//                         console.log(`Detected Address: ${address}`);
//                         setLocation(address);
//                         alert(`Detected Location: ${address}`);
//                     } else {
//                         console.error('Address data is missing');
//                         alert('Could not retrieve address. Please try again.');
//                     }
//                 } catch (error) {
//                     console.error('Error fetching address:', error);
//                     alert('An error occurred while detecting the location.');
//                 }
//             },
//             (error) => {
//                 switch (error.code) {
//                     case error.PERMISSION_DENIED:
//                         alert('Location access denied by the user.');
//                         break;
//                     case error.POSITION_UNAVAILABLE:
//                         alert('Location information is unavailable.');
//                         break;
//                     case error.TIMEOUT:
//                         alert('The request to get user location timed out.');
//                         break;
//                     default:
//                         alert('An unknown error occurred.');
//                         break;
//                 }
//             }
//         );
//     } else {
//         alert('Geolocation is not supported by this browser.');
//     }
// };
// // export const detectLocation = (setLocation) => {
// //     // Check if geolocation is supported
// //     if (!navigator.geolocation) {
// //         alert('Geolocation is not supported by this browser.');
// //         return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //         async (position) => {
// //             const { latitude, longitude } = position.coords;
// //             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

// //             try {
// //                 // OpenStreetMap Nominatim API URL with reverse geocoding
// //                 const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`

// //                 const response = await fetch(apiUrl);

// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch location data');
// //                 }

// //                 const data = await response.json();

// //                 // Check if address data is available
// //                 if (data?.display_name) {
// //                     const address = data.display_name;
// //                     console.log(`Detected Address: ${address}`);
// //                     setLocation(address); // Update location in the callback
// //                 } else {
// //                     console.error('Address data is missing');
// //                     alert('Could not retrieve address. Please try again.');
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching address:', error);
// //                 alert('An error occurred while detecting the location.');
// //             }
// //         },
// //         (error) => {
// //             // Handle geolocation errors
// //             const errorMessages = {
// //                 1: 'Location access denied by the user.',
// //                 2: 'Location information is unavailable.',
// //                 3: 'The request to get user location timed out.',
// //             };
// //             alert(errorMessages[error.code] || 'An unknown error occurred.');
// //         },
// //         {
// //             enableHighAccuracy: true, // Request high accuracy
// //             timeout: 10000,          // Timeout after 10 seconds
// //             maximumAge: 0,           // No caching of location
// //         }
// //     );
// // };

export const detectLocation = async (setLocation) => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            try {
                // Replace with your LocationIQ API Key
                // const API_KEY = "pk.44b3e3e47fc068a76bb23d989e281dff"; 
                // const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;

                const API_KEY = "5862e60450fe8c717230595391e2a3aa"; 
                const url = `http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${latitude},${longitude}`

                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch location data");

                const data = await response.json();
                // data[0].label
                // data[0].label
                // data[0].label
                if (data?.data[0].label) {
                    setLocation(data.data[0].label); // Set the exact address
                    console.log(`Detected Address: ${data.data[0].label}`);
                } else {
                    alert("Could not retrieve address. Please try again.");
                }
            } catch (error) {
                console.error("Error fetching address:", error);
                alert("An error occurred while detecting the location.");
            }
        },
        (error) => {
            const errorMessages = {
                1: "Location access denied by the user.",
                2: "Location information is unavailable.",
                3: "The request to get user location timed out.",
            };
            alert(errorMessages[error.code] || "An unknown error occurred.");
        },
        {
            enableHighAccuracy: true, // Get the most accurate location
            timeout: 10000,
            maximumAge: 0,
        }
    );
};
