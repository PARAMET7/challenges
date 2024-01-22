import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";


export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
         const response = await fetch(URL);
         console.log("response:", response);
         const data = await response.json();
         console.log("data:", data);

       } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      const interval = setInterval(getISSCoords,100);
      console.log(interval);
      return () => {
        clearInterval(interval);
      };

    } ,[]);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
