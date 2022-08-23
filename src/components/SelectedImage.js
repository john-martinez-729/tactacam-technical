import React from "react";
import { useParams } from "react-router-dom";

function SelectedImage({ images }) {
  let params = useParams();

  const image = images.find((img) => img.id == params.imageId);
  return (
    <div className="selected-image-container">
      <figure style={{ maxWidth: "500px" }}>
        <img className="selected-image" src={image.urls.full} />
        <figcaption>
          {image.user.username && `Username: ${image.user.username}`}
        </figcaption>
        <figcaption>Likes: {image.likes || 0}</figcaption>
        <figcaption>
          {image.description && `Description: ${image.description}`}
        </figcaption>
      </figure>
    </div>
  );
}

export default React.memo(SelectedImage);
