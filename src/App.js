// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import OurStory from './Components/OurStory';
import PhotoAlbum from './Components/PhotoAlbum';
import WeddingParty from './Components/WeddingParty';
import Honeymoon from './Components/Honeymoon';
import TravelInformation from './Components/TravelInformation';
import Registry from './Components/Registry';
import FAQ from './Components/FAQ';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/photo-album">Photo Album</Link>
        <Link to="/wedding-party">Wedding Party</Link>
        <Link to="/honeymoon">Honeymoon</Link>
        <Link to="/travel-information">Travel Information</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/photo-album" element={<PhotoAlbum />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/travel-information" element={<TravelInformation />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
