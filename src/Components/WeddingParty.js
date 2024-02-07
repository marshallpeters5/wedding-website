// src/components/WeddingParty.js
import React from 'react';

const WeddingParty = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Wedding Party</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Wedding party members */}
        <div>
          <img src="https://via.placeholder.com/100" alt="Member Name" />
          <p>Parks Peters</p>
          <p>Officiant | Gay of Honor</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/100" alt="Member Name" />
          <p>Member Name</p>
          <p>Role</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/100" alt="Member Name" />
          <p>Member Name</p>
          <p>Role</p>
        </div>
        {/* Repeat for other members */}
      </div>
    </div>
  );
}

export default WeddingParty;
