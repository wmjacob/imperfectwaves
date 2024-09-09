import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AlbumSale } from './components/AlbumSale';
import { TourDates } from './components/TourDates';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AlbumSale />
      <TourDates />
      <Footer />
    </div>
  );
}

export default App;
