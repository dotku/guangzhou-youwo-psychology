import React from 'react';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Cases } from './components/Cases';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Services />
      <Cases />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;