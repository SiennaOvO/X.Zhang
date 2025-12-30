
import React from 'react';
import { THEMATIC_WORK } from '../constants';

const ProjectList: React.FC = () => {
  return (
    <section id="work" className="py-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-4">
            <h3 className="mono text-xs uppercase tracking-[0.3em] text-neutral-500">Selected Work</h3>
            <h2 className="text-3xl font-medium text-white">Current Initiatives</h2>
          </div>
          <span className="text-neutral-600 text-sm mono">01 — 04</span>
        </div>

        {/* Layout changed to 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {THEMATIC_WORK.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-[#0a0a0a] p-8 md:p-10 hover:bg-neutral-900/40 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="mono text-[10px] text-neutral-600 uppercase tracking-widest">{project.year}</span>
                <span className="text-[10px] mono uppercase border border-neutral-800 px-2 py-1 text-neutral-500 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-all">
                  {project.theme}
                </span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h4 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-8 mt-auto flex items-center space-x-2 text-[10px] mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                <span>View project</span>
                <span className="w-4 h-[1px] bg-neutral-800 group-hover:bg-purple-500 transition-all"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
