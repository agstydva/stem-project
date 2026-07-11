import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import { 
  Lightbulb, 
  BrainCircuit, 
  Maximize2,
  X,
  Download
} from 'lucide-react';

const Ideation = () => {
  // State untuk lightbox modal gambar penuh
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 selection:bg-red-100 selection:text-red-600">
      
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-red-500 text-white rounded-xl shadow-lg shadow-red-100">
              <Lightbulb size={20} />
            </div>
            <div className="h-px w-8 bg-red-200"></div>
            <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase">Phase 02: Ideation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Strategic <span className="text-red-500">Solutions.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Mentransformasi tantangan pendidikan menjadi ide konkret melalui pendekatan desain yang berpusat pada pengguna dan efisiensi teknologi.
          </p>
        </div>

        {/* Mindmap Section */}
        <section className="mt-20">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg"><BrainCircuit size={16} /></div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">VISUAL MAPPING</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  Mindmap Solusi untuk Permasalahan Tersebut
                </h2>
              </div>
              
              {/* Tombol Lihat Gambar Penuh */}
              <button 
                onClick={openModal}
                className="w-fit py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
              >
                <Maximize2 size={14} /> LIHAT GAMBAR PENUH
              </button>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mb-10 font-medium">
              Pemetaan gagasan menyeluruh mengenai penjaminan kesehatan mental dan fisik di lingkungan kerja digital, mencakup perilaku sehat, ergonomi, dukungan teknologi, dan keseimbangan emosional.
            </p>

            <div 
              onClick={openModal}
              className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 p-4 flex items-center justify-center cursor-pointer group/img"
            >
              <img 
                src="/images/mindmap.png" 
                alt="Mindmap Solusi" 
                className="w-full max-w-5xl h-auto rounded-xl object-contain shadow-md transition-transform duration-700 group-hover/img:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] font-bold tracking-widest px-5 py-3 rounded-xl border border-slate-100 shadow-lg transition-opacity duration-300 flex items-center gap-2">
                  <Maximize2 size={12} /> KLIK UNTUK MEMPERBESAR
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div 
            onClick={closeModal} 
            className="absolute inset-0 bg-slate-900/85 backdrop-blur-md transition-opacity duration-300"
          />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-6xl h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col z-10 border border-slate-100">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <h3 className="font-black text-slate-950 tracking-tight text-sm md:text-base leading-none">
                  Mindmap Solusi untuk Permasalahan Tersebut
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a 
                  href="/images/mindmap.png" 
                  download="mindmap_solusi.png"
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 rounded-xl transition-all border border-slate-200/50 flex items-center gap-2 text-xs font-mono font-bold"
                  title="Unduh Mindmap"
                >
                  <Download size={16} /> <span className="hidden sm:inline">UNDUH</span>
                </a>
                
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl transition-all border border-red-100/50"
                  title="Tutup Gambar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 bg-slate-900 overflow-auto p-6 flex items-center justify-center">
              <img 
                src="/images/mindmap.png" 
                alt="Mindmap Solusi HD" 
                className="max-w-none w-full h-auto object-contain" 
              />
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Ideation;