
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onViewChange('home')}
          className="flex items-center space-x-2 group outline-none"
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-transform"></div>
          <span className="mono text-sm tracking-tighter font-medium uppercase text-white/90">
            X.Zhang
          </span>
        </button>
        
        <div className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'contact') {
                  const footer = document.getElementById('contact');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onViewChange(item.id as ViewState);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }
              }}
              className={`text-sm font-medium transition-colors duration-200 tracking-tight outline-none ${
                currentView === item.id 
                  ? 'text-purple-400' 
                  : 'text-neutral-400 hover:text-purple-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
