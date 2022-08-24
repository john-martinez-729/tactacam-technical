import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details, SelectedImage, Body } from "./components";
import { Navbar, Container } from "react-bootstrap";

import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [colorFilter, setColorFilter] = useState("");
  const [orientationFilter, setOrientationFilter] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    fetchImages(true);
  }, []);

  useEffect(() => {
    if (page == 1) {
      fetchImages(true);
    } else if (page == 0) {
      setPage(1);
    } else {
      fetchImages();
    }
  }, [page]);

  useEffect(() => {
    setImages([]);
    setPage(0);
  }, [colorFilter, orientationFilter]);

  const fetchImages = async (firstFetch) => {
    setLoading(true);
    const apiUrl = "https://api.unsplash.com";
    const accessKey = "chfzaVGm8SRRfTzoe9KgrVNwxZ6CiLdm2s0QaALK-Ts";
    let url = `${apiUrl}/search/photos?client_id=${accessKey}&query=fishing&page=${page}`;
    if (colorFilter) url += `&color=${colorFilter}`;
    if (orientationFilter) url += `&orientation=${orientationFilter}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.total > 0) {
      setImages([...images, ...data.results]);
      if (firstFetch && windowDimensions.height > 900) {
        // for large screens, this will automatically hit the next page to allow scrolling
        hitNextPage();
      }
      setLoading(false);
    }
  };

  const hitNextPage = () => {
    setPage(page + 1);
  };

  const Topbar = () => {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container style={{ padding: "0.5rem" }}>
          <Navbar.Brand href="/">
            <img src={logo} height="30" alt="Tactacam Image Search Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  };

  return (
    <BrowserRouter>
      <Topbar />
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Body
                images={images}
                hitNextPage={hitNextPage}
                loading={loading}
                colorFilter={colorFilter}
                setColorFilter={setColorFilter}
                orientationFilter={orientationFilter}
                setOrientationFilter={setOrientationFilter}
              />
            }
          />
          <Route path="/details" element={<Details images={images} />}>
            <Route
              path=":imageId"
              element={<SelectedImage images={images} />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default React.memo(App);
