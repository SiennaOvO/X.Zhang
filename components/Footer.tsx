
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-medium text-white leading-tight">
              Let's build something <br />
              <span className="text-neutral-500 italic">meaningful.</span>
            </h2>
            <p className="text-neutral-400 font-light max-w-sm">
              Open for research collaborations, creative partnerships, or just a coffee and a conversation about the future.
            </p>
          </div>
          
          <div className="flex flex-col justify-end space-y-12">
            <div className="space-y-4">
              <h4 className="mono text-[10px] uppercase tracking-[0.4em] text-neutral-500">Contact</h4>
              <a 
                href="mailto:hello@xubinzhang.com" 
                className="text-2xl font-light text-white hover:text-purple-400 transition-colors border-b border-white/10 pb-2 inline-block"
              >
                hello@xubinzhang.com
              </a>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="mono text-xs text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="mono text-xs text-neutral-600 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="mono text-xs text-neutral-600 hover:text-white transition-colors">ResearchGate</a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] mono text-neutral-700 uppercase tracking-widest">
          <span>&copy; 2024 Xubin Zhang</span>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Built with precision</span>
            <div className="w-1 h-1 bg-purple-500/50 rounded-full"></div>
            <span>Based in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
