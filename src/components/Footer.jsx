import React from 'react';
import { Layout, ArrowUpRight, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 justify-between items-start gap-12">
          
          {/* Sisi Kiri - Info Proyek & Logo Kampus */}
          <div className="flex flex-col gap-6">
            {/* Judul Proyek */}
            <div className="flex items-center gap-2 mb-2 group cursor-default">
              <div className="bg-red-600 p-1.5 rounded-lg text-white">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-slate-900 font-black text-lg tracking-tighter uppercase">
                EDU<span className="text-red-600">STEM</span> Projects.
              </h3>
            </div>

            {/* Layout: Logo + Teks Deskripsi */}
            <div className="flex items-start gap-5 max-w-md">
              {/* Logo UNJ */}
              <img 
                src="/images/unj-logo.png" 
                alt="Logo Universitas Negeri Jakarta" 
                className="h-16 w-auto object-contain flex-shrink-0 mt-1brightness-110" 
                // brightness-110 memberikan sedikit highlight agar logo terlihat jelas
              />
              
              {/* Teks Deskripsi */}
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Platform edukasi terintegrasi untuk mengeksplorasi 17 agenda global PBB guna menciptakan tatanan dunia yang inklusif dan berkelanjutan.
              </p>
            </div>
          </div>

          {/* Sisi Kanan - Info Pengembang (Tetap) */}
          <div className="flex flex-col md:items-end">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-4">Project Maintainer</p>
            <h4 className="text-slate-900 font-black text-2xl mb-1 tracking-tight">Agastya Dava Nurrahman</h4>
            <p className="text-red-600 text-sm font-mono mb-8">Computer Science Student 2023 @ UNJ</p>
            
            <a 
              href="https://trello.com/your-board" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-2xl text-slate-900 text-xs font-bold tracking-widest hover:border-red-600 hover:shadow-xl hover:shadow-red-50 transition-all duration-300"
            >
              <Layout size={14} className="text-slate-400 group-hover:text-red-600 transition-colors" />
              <span>COLLABORATION BOARD</span>
              <ArrowUpRight size={14} className="text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bagian Bawah - Copyright & Tech Stack (Tetap) */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-slate-400 font-mono tracking-widest">
              POWERED BY <span className="text-slate-900 font-bold">REACT.JS</span> + <span className="text-slate-900 font-bold">TAILWIND CSS</span>
            </p>
          </div>
          
          <p className="text-[10px] text-slate-400 font-mono tracking-tighter">
            &copy; {currentYear} — <span className="text-slate-900 font-bold uppercase">Agastya Dava Nurrahman</span>. STEM RESEARCH FRAMEWORK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;