import React from "react";
import { Link } from "react-router-dom";

function Image({ image }) {
  return (
    <Link to={`/details/${image.id}`}>
      <img className="styled-image" src={image.urls.small} />
    </Link>
  );
}

export default React.memo(Image);
