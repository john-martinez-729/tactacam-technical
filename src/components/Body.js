import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "react-bootstrap";
import { Image, Filters } from "./";

const Body = ({
  images,
  hitNextPage,
  loading,
  colorFilter,
  setColorFilter,
  orientationFilter,
  setOrientationFilter,
}) => {
  let loader = null;
  if (loading) {
    loader = (
      <div className="loader-container">
        <div className="lds-hourglass" />
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={hitNextPage}
      hasMore={true}
      scrollThreshold="500px"
      className="inf-scroll"
      endMessage={<div>end</div>}
      loader={loader}
    >
      <>
        <Filters
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
          orientationFilter={orientationFilter}
          setOrientationFilter={setOrientationFilter}
        />
        <div className="wrapper-image">
          {images.map((image, idx) => (
            <Image key={`${image} - ${idx}`} image={image} />
          ))}
        </div>
      </>
    </InfiniteScroll>
  );
};

export default React.memo(Body);
