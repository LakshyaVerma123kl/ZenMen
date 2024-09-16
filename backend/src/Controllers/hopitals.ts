import { Request, Response } from "express";
import { loadEnvFile } from "process";
loadEnvFile();

const getNearByHospitals = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { lat, lng } = req.query;
  const apiKey = process.env.GOOGLE_MAP_API_KEY;
  const radius = 5000; // 5 km
  const type = "hospital";
  const keyword = "urologist";

  const url = `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:5000,${28.6403077},${77.2749852});out;`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    res.status(500).json({ message: "Error fetching hospitals" });
  }
};

const getGeoCodes = async (req: Request, res: Response): Promise<void> => {
  const { address } = req.query;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address as string
  )}&format=json&limit=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
      res.status(200).json({ lat, lon });
    } else {
      console.log("No results found.");
      res.status(404).json({ message: "No results found" });
    }
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    res.status(500).json({ message: "Error fetching geocode data" });
  }
};

export { getNearByHospitals, getGeoCodes };
