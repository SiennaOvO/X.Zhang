
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-44 pb-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="mono text-xs uppercase tracking-[0.3em] text-purple-500/80 font-medium">
              Researcher / Creative Technologist
            </h2>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
              Xubin Zhang
            </h1>
          </div>
          
          <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-xl">
            I explore the intersection of human behavior and digital systems. 
            Currently focused on building ethical AI interfaces and sustainable 
            digital ecosystems for a more human-centered future.
          </p>

          <div className="pt-4">
            <a 
              href="#" 
              className="inline-flex items-center space-x-3 text-sm font-medium text-white/90 hover:text-purple-400 transition-all group"
            >
              <span>Download my CV</span>
              <span className="w-8 h-[1px] bg-neutral-700 group-hover:bg-purple-500/50 transition-all"></span>
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Subtle neo-cyber frame */}
            <div className="absolute -inset-4 border border-white/5 pointer-events-none group-hover:border-purple-500/20 transition-colors duration-500"></div>
            <div className="absolute -top-4 -left-4 w-2 h-2 border-t border-l border-purple-500/40"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 border-b border-r border-purple-500/40"></div>
            
            <div className="w-64 h-80 bg-neutral-900 overflow-hidden relative transition-all duration-700 ease-in-out">
              <img 
                src="https://picsum.photos/seed/xubin-zhang/600/800" 
                alt="Xubin Zhang" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
