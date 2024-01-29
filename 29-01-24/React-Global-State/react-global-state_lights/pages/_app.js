import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initLights);

  const lightCount = lights.filter((light) => light.isOn).length;
  console.log("lightCount=> ", lightCount);

  function handleToggle(lightId) {
    setLights((lights) =>
      lights.map((l) =>
        l.id === lightId ? { ...l, isOn: !l.isOn } : l
      )
    );
  }


  function handleAdd() {
    const LightsOn = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(LightsOn);
  }


  function handleSubtract() {
    const LightsOff = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(LightsOff);
  }


  return (
    <Layout>
      <GlobalStyle />
      <Component
      {...pageProps}

      lights={lights}
      handleToggle={handleToggle}
      lightCount={lightCount}
      handleAdd={handleAdd}
      handleSubtract={handleSubtract}

       />
    </Layout>
  );
}
