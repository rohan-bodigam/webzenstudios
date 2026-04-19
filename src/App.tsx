import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';

import Contact from './components/Contact';
import Preloader from './components/Preloader';

const App: React.FC = () => {

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        
        <Contact />
      </main>
    </>
  );
};

export default App;
