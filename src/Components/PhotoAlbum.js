// src/components/PhotoAlbum.js
import React from 'react';

const PhotoAlbum = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Photo Album</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Replace these with actual photos */}
        <img src="https://via.placeholder.com/150" alt="Wedding Photo" />
        {/* Repeat for more photos */}
      </div>
    </div>
  );
}

export default PhotoAlbum;
