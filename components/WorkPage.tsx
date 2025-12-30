
import React from 'react';
import { THEMATIC_WORK } from '../constants';

const WorkPage: React.FC = () => {
  return (
    <div className="pt-44 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-24 border-b border-white/5 pb-12">
          <h1 className="text-5xl font-semibold tracking-tight text-white mb-6">Selected Work</h1>
          <p className="text-xl text-neutral-400 leading-relaxed font-light">
            A record of research, experiments, and technical investigations at the 
            intersection of technology and human experience.
          </p>
        </header>

        <div className="space-y-32">
          {THEMATIC_WORK.map((work) => (
            <section key={work.id} className="group">
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="mono text-[10px] uppercase tracking-[0.3em] text-purple-500/80 font-medium">
                      {work.theme}
                    </span>
                    <h2 className="text-3xl font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                      {work.title}
                    </h2>
                  </div>
                  <div className="text-left md:text-right mono text-[11px] text-neutral-500 uppercase tracking-widest whitespace-nowrap pt-2">
                    {work.year}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-3">
                    <p className="text-lg text-neutral-400 leading-relaxed font-light">
                      {work.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 space-y-6">
                    <div className="space-y-1">
                      <h4 className="mono text-[9px] uppercase tracking-widest text-neutral-600">Role</h4>
                      <p className="text-sm text-neutral-300 font-medium">{work.role}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="mono text-[9px] uppercase tracking-widest text-neutral-600">Format</h4>
                      <p className="text-sm text-neutral-300 font-medium">{work.format}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="h-[1px] w-full bg-white/5 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
