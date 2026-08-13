import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Exhibitions from './components/Exhibitions/Exhibitions'; 
import Footer from './components/Footer/Footer';
import type { ArtistId } from './data/artists';
import './App.css';
import Contacts from './components/Contacts/Contacts'; 

export default function App() {
  // null = показаны обе половины, 'jeweler' | 'painter' = фокус на одном
  const [activeId, setActiveId] = useState<ArtistId | null>(null);

  const handleSelect = (id: ArtistId) => {
    setActiveId(id);
    // после перерисовки плавно скроллим к портфолио
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="app">
      <Header />
      <Hero activeId={activeId} onSelect={handleSelect} />
      <Portfolio activeId={activeId} onSelect={handleSelect} />
      <Exhibitions />   {/* ← новая секция после работ */}
      <Contacts /> 
      <Footer />
    </div>
  );
}