import { SelectedImage } from "./";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";
function Details({ images }) {
  return (
    <div className="details-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Button variant="outline-success" size="sm">
            Go back
          </Button>
        </div>
      </Link>
      <div>
        <SelectedImage images={images} />
      </div>
    </div>
  );
}

export default React.memo(Details);
