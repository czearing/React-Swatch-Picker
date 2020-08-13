import * as React from "react";
import { render } from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import App from "./App";

const SwatchPickerWrapper = () => (
  <Fabric>
    <App />
  </Fabric>
);

const rootElement = document.getElementById("root");
render(<SwatchPickerWrapper />, rootElement);
