import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { TourDates } from './components/TourDates';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <TourDates />
      <Footer />
    </div>
  );
}

export default App;
