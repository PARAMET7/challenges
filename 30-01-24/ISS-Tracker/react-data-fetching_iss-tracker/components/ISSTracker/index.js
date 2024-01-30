import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`Can't fetching data: ${response.statusText}`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data;
};




const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    URL,
    fetcher,
    {
      refreshInterval: 5000, //5 seconds
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      {/* <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      /> */}

      {isValidating && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isValidating && !error && (
        <>
          <Map {...data} />
          <Controls {...data} onRefresh={() => mutate()} />
        </>
      )}
    </main>
  );
}
