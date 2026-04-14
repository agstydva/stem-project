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

            {/* Layout: Logo UNJ + Teks Deskripsi */}
            <div className="flex items-start gap-5 max-w-md">
              <img 
                src="/images/unj-logo.png" 
                alt="Logo Universitas Negeri Jakarta" 
                className="h-16 w-auto object-contain flex-shrink-0 mt-1 brightness-110" 
              />
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Platform edukasi terintegrasi untuk mengeksplorasi 17 agenda global PBB guna menciptakan tatanan dunia yang inklusif dan berkelanjutan.
              </p>
            </div>
          </div>

          {/* Sisi Kanan - Info Pengembang & Logo SDGs */}
          <div className="flex flex-col md:items-end">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-4">Project Maintainer</p>
            <h4 className="text-slate-900 font-black text-2xl mb-1 tracking-tight text-right">Agastya Dava Nurrahman</h4>
            <p className="text-red-600 text-sm font-mono mb-8 text-right">Computer Science Student 2023 @ UNJ</p>
            
            <div className="flex flex-col md:items-end gap-8">
              {/* Collaboration Board Button */}
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

              {/* Logo SDGs - Dipindahkan ke sini (Bawah Button) */}
              <div className="pt-2">
                <img 
                  src="/images/goals-sdgs.png" 
                  alt="Sustainable Development Goals Logo" 
                  className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-95" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah - Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-[10px] text-slate-400 font-mono tracking-tighter text-center">
            &copy; {currentYear} — <span className="text-slate-900 font-bold uppercase">Agastya Dava Nurrahman</span>. STEM SDGS PROJECTS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;