import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BottomCTA } from './components/BottomCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131313]">
      <Header />
      <main className="w-full pt-16">
        <Hero />
        <Features />
        <BottomCTA />
      </main>
    </div>
  );
};

export default App;
