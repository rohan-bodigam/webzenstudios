import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Team />
        <Contact />
      </main>
    </>
  );
};

export default App;
