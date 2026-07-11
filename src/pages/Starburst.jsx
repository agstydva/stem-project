import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { HelpCircle, Maximize2, X } from 'lucide-react';

const Starburst = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openImageModal = (imagePath) => {
    setActiveImage(imagePath);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      <Navbar />

      {/* Header Halaman */}
      <header className="relative pt-44 pb-16 px-6 border-b border-slate-100 bg-white w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">STAGE 3.1: ANALYSIS METHOD</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
              Starbursting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-700">Model.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
              Memetakan aspek pertanyaan fundamental (Who, How, What, Where, Why) secara mendalam untuk menyempurnakan kegunaan dan validasi solusi EduStem.
            </p>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-20 px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg"><HelpCircle size={16} /></div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">STARBURSTING METHOD</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                Starbursting: Analisis Pertanyaan Kritis
              </h2>
            </div>
            
            <button 
              onClick={() => openImageModal('/images/starburst.png')}
              className="w-fit py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
            >
              <Maximize2 size={14} /> LIHAT STARBURST PENUH
            </button>
          </div>
          
          <p className="text-sm text-slate-500 leading-relaxed mb-10 font-medium">
            Pendekatan Starbursting berfokus pada perumusan pertanyaan alih-alih jawaban untuk melahirkan pemahaman holistik tentang kebutuhan pekerja digital di era saat ini.
          </p>

          <div 
            onClick={() => openImageModal('/images/starburst.png')}
            className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 p-4 flex items-center justify-center cursor-pointer group/starimg"
          >
            <img 
              src="/images/starburst.png" 
              alt="Starbursting Model" 
              className="w-full max-w-4xl h-auto rounded-xl object-contain shadow-md transition-transform duration-700 group-hover/starimg:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/0 group-hover/starimg:bg-slate-950/10 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover/starimg:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] font-bold tracking-widest px-5 py-3 rounded-xl border border-slate-100 shadow-lg transition-opacity duration-300 flex items-center gap-2">
                <Maximize2 size={12} /> KLIK UNTUK MEMPERBESAR
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          <div 
            onClick={closeImageModal} 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <div className="relative bg-white w-full max-w-5xl h-[80vh] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-slate-100 p-4 flex items-center justify-center">
            <button 
              onClick={closeImageModal}
              className="absolute top-6 right-6 p-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all hover:scale-105 z-20"
            >
              <X size={18} />
            </button>
            <img 
              src={activeImage} 
              alt="Starbursting Model Full" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Starburst;
