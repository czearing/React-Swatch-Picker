import * as React from "react";
import { SwatchPicker } from "./SwatchPicker";

const colorCellsExample1 = [
  { color: "#ca5010", label: "orange" },
  { color: "#038387", label: "cyan" },
  { color: "#8764b8", label: "blueMagenta" },
  { color: "#881798", label: "magenta" },
  { color: "#ffffff", label: "white" }
];

const colorCellsExample2 = [
  { color: "#a4262c", label: "red" },
  { color: "#ca5010", label: "orange" },
  { color: "#986f0b", label: "orangeYellow" },
  { color: "#8cbd18", label: "yellowGreen" },
  { color: "#0b6a0b", label: "green" },
  { color: "#038387", label: "cyan" },
  { color: "#004e8c", label: "cyanBlue" },
  { color: "#881798", label: "magenta" },
  { color: "#9b0062", label: "magentaPink" },
  { color: "#000000", label: "black" },
  { color: "#7a7574", label: "gray" },
  { color: "#69797e", label: "gray20" }
];

export default function App() {
  const [previewColor, setPreviewColor] = React.useState<string>();

  return (
    <div>
      <div>Circle swatch picker:</div>
      <SwatchPicker columnCount={5} circular colors={colorCellsExample1} />
      <div>Square swatch picker with default size of 20px:</div>
      <SwatchPicker columnCount={5} colors={colorCellsExample1} />
      <div>Square swatch picker with custom size of 35px:</div>
      <SwatchPicker columnCount={5} cellSize={35} colors={colorCellsExample1} />
      <div>
        Swatch picker with multiple rows and larger cells that updates its icon
        color and shows a preview color:
      </div>
      <div
        style={{
          color: previewColor,
          fontSize: "24px"
        }}
      >
        Sample Text
      </div>
      <SwatchPicker
        onChange={(ev, newColor) => setPreviewColor(newColor)}
        columnCount={4}
        circular
        cellSize={30}
        gap={3}
        colors={colorCellsExample2}
      />
      <div>Disabled circle swatch picker:</div>
      <SwatchPicker
        disabled
        columnCount={5}
        circular
        colors={colorCellsExample1}
      />
    </div>
  );
}
