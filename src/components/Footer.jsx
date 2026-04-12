import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 justify-between items-start gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-tighter">STEM Project: SDGs</h3>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Platform dikembangkan untuk memenuhi tugas mata kuliah STEM dengan standar pengembangan web industri modern.
            </p>
          </div>

          {/* Right Side - Dev Info */}
          <div className="flex flex-col md:items-end">
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mb-4">Project Maintainer</p>
            <h4 className="text-white font-medium text-xl mb-1">Agastya Dava</h4>
            <p className="text-blue-500 text-sm font-mono mb-6">Computer Science Student @ UNJ</p>
            
            <a 
              href="https://trello.com/your-board" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 text-white text-sm border-b border-slate-800 pb-2 hover:border-blue-500 transition-all"
            >
              <span>COLLABORATION BOARD (TRELLO)</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-600 font-mono italic">
            BUILT WITH REACT & TAILWIND CSS
          </p>
          <p className="text-[10px] text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} — AGASTYA DAVA NURRAHMAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;