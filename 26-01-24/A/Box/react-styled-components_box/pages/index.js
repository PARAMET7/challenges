import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "/Users/eyl/Desktop/spiced-bootcamp/challenges1/26-01-24/A/Box/react-styled-components_box/components/BoxWithClassName/BoxWithStyledComponents.js";

import StyleContaine from "../components/BoxWithClassName/StyleContaine.js";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <StyleContaine>
        <BoxWithClassName />
        <BoxWithClassName isBlack />

        <BoxWithStyledComponents />
        <BoxWithStyledComponents $isBlack="isBlack" />
      </StyleContaine>
    </div>
  );
}
