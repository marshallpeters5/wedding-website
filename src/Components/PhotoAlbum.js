// src/components/PhotoAlbum.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photoData = {
  "2018": [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    // More URLs
  ],
  "2019": [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    // More URLs
  ],
  // Add more years and images as needed
};

const PhotoAlbum = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Photo Album</h1>
      {Object.keys(photoData).map(year => (
        <div key={year} className="mb-8">
          <h2 className="text-xl font-bold text-center mb-4">{year}</h2>
          <div className="mx-auto" style={{ maxWidth: '45%' }}>
            <Slider {...settings}>
              {photoData[year].map((photoUrl, index) => (
                <div key={index}>
                  <img src={photoUrl} alt={`Wedding Photo ${year}`} className="mx-auto" style={{ width: '100%', height: 'auto' }} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoAlbum;

