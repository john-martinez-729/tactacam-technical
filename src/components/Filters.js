import React from "react";
import {
  IoTabletLandscapeOutline,
  IoTabletPortraitOutline,
  IoFilterSharp,
  IoSquareOutline,
} from "react-icons/io5";
import {
  BsCircleHalf,
  BsCircleFill,
  BsCircle,
  BsXCircle,
} from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

const Filters = ({
  colorFilter,
  setColorFilter,
  orientationFilter,
  setOrientationFilter,
}) => {
  let currentColorFilter = null;
  if (colorFilter == "black_and_white") {
    currentColorFilter = <BsCircleHalf />;
  } else if (colorFilter == "white") {
    currentColorFilter = <BsCircle />;
  } else {
    currentColorFilter = <BsCircleFill style={{ color: colorFilter }} />;
  }

  let currentOrientationFilter = null;
  if (orientationFilter == "portrait") {
    currentOrientationFilter = <IoTabletPortraitOutline />;
  } else if (orientationFilter == "landscape") {
    currentOrientationFilter = <IoTabletLandscapeOutline />;
  } else if (orientationFilter == "squarish") {
    currentOrientationFilter = <IoSquareOutline />;
  }

  return (
    <div className="filter-container">
      <Dropdown style={{ marginRight: "1rem" }}>
        <Dropdown.Toggle size="sm" variant="outline-success">
          <IoFilterSharp /> Filters
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.ItemText>Colors</Dropdown.ItemText>
          <Dropdown.Item onClick={() => setColorFilter("black_and_white")}>
            Black & White
            <BsCircleHalf />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("black")}>
            Black
            <BsCircleFill />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("white")}>
            White
            <BsCircle />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("yellow")}>
            Yellow
            <BsCircleFill style={{ color: "yellow" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("orange")}>
            Orange
            <BsCircleFill style={{ color: "orange" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("red")}>
            Red
            <BsCircleFill style={{ color: "red" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("purple")}>
            Purple
            <BsCircleFill style={{ color: "purple" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("magenta")}>
            Magenta
            <BsCircleFill style={{ color: "magenta" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("green")}>
            Green
            <BsCircleFill style={{ color: "green" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("teal")}>
            Teal
            <BsCircleFill style={{ color: "teal" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("blue")}>
            Blue
            <BsCircleFill style={{ color: "blue" }} />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setColorFilter("")}>
            None
            <BsXCircle />
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.ItemText>Orientation</Dropdown.ItemText>
          <Dropdown.Item onClick={() => setOrientationFilter("portrait")}>
            Portrait <IoTabletPortraitOutline />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOrientationFilter("landscape")}>
            Landscape <IoTabletLandscapeOutline />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOrientationFilter("squarish")}>
            Squarish <IoSquareOutline />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOrientationFilter("")}>
            None
            <BsXCircle />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {colorFilter && (
        <div style={{ marginRight: "1rem" }}>{currentColorFilter}</div>
      )}
      {orientationFilter && (
        <div style={{ marginRight: "1rem" }}>{currentOrientationFilter}</div>
      )}
    </div>
  );
};

export default React.memo(Filters);
