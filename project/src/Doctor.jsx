import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defaultCenter = {
  lat: 28.6403077,
  lng: 77.2749852,
};

const Doctor = () => {
  const [hospitals, setHospitals] = useState([]);
  const [location, setLocation] = useState(defaultCenter);
  const [myLocation, setMyLocation] = useState(defaultCenter);
  const [place, setPlace] = useState("");

  const getNearbyHospitals = async (latitude, longitude) => {
    try {
      console.log("map here");

      const response = await fetch(
        `http://localhost:3000/api/gethospitals?lat=${latitude}&lng=${longitude}`
      );
      const data = await response.json();
      const hospitalData = data.elements.map((hospital) => ({
        name: hospital.tags.name || "Unnamed Hospital",
        lat: hospital.lat,
        lon: hospital.lon,
      }));
      console.log(data);

      setHospitals(hospitalData);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  const handleSearch = async () => {
    const url = `http://localhost:3000/api/getGeoCodes?address=${place}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.lat === undefined || data.lon === undefined) return;
    setLocation({ lat: data.lat, lng: data.lon });
  };

  useEffect(() => {
    const getfetch = () => {
      navigator.geolocation.getCurrentPosition(success, error);

      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ lat: latitude, lng: longitude });
        setMyLocation({ lat: latitude, lng: longitude });
        getNearbyHospitals(latitude, longitude);
      }

      function error() {
        console.log("Unable to retrieve your location");
      }
    };
    getfetch();
  }, []);

  useEffect(() => {
    if (location.lat && location.lng) {
      getNearbyHospitals(location.lat, location.lng);
    }
  }, [location]);

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6 h-full">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Find Your Doctor Near You
        </h1>
        <div className="relative max-w-sm md:max-w-md mx-auto">
          <input
            type="text"
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Search for a doctor, hospital, or city..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={handleSearch}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm md:text-base cursor-pointer"
          />
        </div>
      </div>
      <div>
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={15}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <RecenterMap location={location} />
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={[hospital.lat, hospital.lon]}>
              <Popup>{hospital.name}</Popup>
            </Marker>
          ))}
          <Marker position={[myLocation.lat, myLocation.lng]}>
            <Popup>My Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

const RecenterMap = ({ location }) => {
  const map = useMap();
  console.log(location);
  if (
    location.lat === null ||
    location.lat === undefined ||
    location.lng === undefined ||
    location.lng === null
  )
    return;
  useEffect(() => {
    map.setView([location.lat, location.lng], map.getZoom());
  }, [location, map]);
  return null;
};

export default Doctor;
