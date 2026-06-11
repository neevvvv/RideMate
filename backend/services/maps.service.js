const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    let response;
    try {
        response = await axios.get(
            `https://api.geoapify.com/v1/geocode/search`,
            {
                params: {
                    text: address,
                    limit: 1,
                    apiKey: process.env.GEOAPIFY_API_KEY
                }
            }
        );
    } catch (err) {
        throw new Error('Geocoding service unavailable');
    }

    if (!response.data.features || !response.data.features.length) {
        throw new Error("Location not found");
    }

    const coords = response.data.features[0].geometry.coordinates;

    return {
        ltd: coords[1],
        lng: coords[0]
    };
};

module.exports.getDistanceTime = async (origin, destination) => {

    const originCoords = await module.exports.getAddressCoordinate(origin);
    const destinationCoords = await module.exports.getAddressCoordinate(destination);

    const url =
        `https://router.project-osrm.org/route/v1/driving/` +
        `${originCoords.lng},${originCoords.ltd};` +
        `${destinationCoords.lng},${destinationCoords.ltd}` +
        `?overview=false`;

    let response;
    try {
        response = await axios.get(url, { timeout: 8000 });
    } catch (err) {
        throw new Error('Routing service unavailable');
    }

    if (!response.data.routes || !response.data.routes.length) {
        throw new Error("No route found");
    }

    const route = response.data.routes[0];

    return {
        distance: {
            value: route.distance,
            text: `${(route.distance / 1000).toFixed(1)} km`
        },
        duration: {
            value: route.duration,
            text: `${Math.round(route.duration / 60)} mins`
        }
    };
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input || input.length < 3) return [];

    try {
        const response = await axios.get(
            `https://api.geoapify.com/v1/geocode/autocomplete`,
            {
                params: {
                    text: input,
                    limit: 5,
                    apiKey: process.env.GEOAPIFY_API_KEY
                }
            }
        );

        return response.data.features.map(feature =>
            feature.properties.formatted
        );
    } catch (error) {
        console.error('Autocomplete request failed:', error.message);
        return [];
    }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371],
            },
        },
    });

    return captains;
};
