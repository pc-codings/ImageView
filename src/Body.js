import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";


const Body = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  const loadImages = async (pageNumber) => {
    // Construct the API URL based on the current search term and page number
    const apiUrl = searchTerm
      ? `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f8a6380dc8427567cec5e04316fe11aa&tags=${searchTerm}&format=json&nojsoncallback=1&page=${pageNumber}`
      : `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f8a6380dc8427567cec5e04316fe11aa&tag=cat&format=json&nojsoncallback=1&page=${pageNumber}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const newImages = data.photos.photo;

      if (newImages.length === 0) {
        setHasMore(false); // No more images to load
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setPage(pageNumber + 1);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
    loadImages(1);
  }, [searchTerm]);
  return (
    <div className="showImage">
      <Header onSearch={setSearchTerm} />
      <div className="card-container">
      {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={() => loadImages(page)}
        hasMore={hasMore}
        loader={<h4>Loading more images...</h4>}
      />
    </div>
  );
  
};

export default Body;
