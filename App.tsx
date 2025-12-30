
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import WorkPage from './components/WorkPage';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-purple-500/30">
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <main className="transition-opacity duration-300">
        {currentView === 'home' ? (
          <>
            <Hero />
            <ProjectList />
          </>
        ) : (
          <WorkPage />
        )}
      </main>
      
      <Footer />
      
      {/* Scroll indicator - decorative but minimal */}
      <div className="fixed bottom-0 right-0 w-1 bg-purple-500/20 z-50 h-0 transition-all duration-300"></div>
    </div>
  );
};

export default App;
