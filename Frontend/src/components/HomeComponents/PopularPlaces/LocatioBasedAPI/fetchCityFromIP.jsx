export const fetchCityFromIP = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Failed to fetch location');
        }
        const data = await response.json();
        return data.city || 'Unknown City'; // Fallback if city is not provided
    } catch (error) {
        console.error('Error fetching city:', error);
        return 'Error fetching city'; // Fallback city in case of error
    }
};
