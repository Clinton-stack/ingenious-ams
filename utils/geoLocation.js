import React from 'react'

export async function geoLocation(location) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
    const data = await response.json();
    console.log("data", data)
    if (data.length > 0) {
      return [data[0].lat, data[0].lon];
    } else {
      throw new Error("Location not found");
    }
}