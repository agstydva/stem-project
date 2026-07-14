import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import { Activity, Maximize2, X } from 'lucide-react';

const LeanCanvas = () => {
  const [activePdf, setActivePdf] = useState(null);

  const openPdfModal = (pdfPath) => {
    setActivePdf(pdfPath);
    document.body.style.overflow = 'hidden';
  };

  const closePdfModal = () => {
    setActivePdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      <Navbar />

      {/* Header Halaman */}
      <header className="relative pt-44 pb-16 px-6 border-b border-slate-100 bg-white w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <ScrollReveal variant="fade-right" duration={800}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                <span className="text-slate-950 font-mono text-xs font-bold tracking-[0.4em] uppercase">STAGE 3.2: BUSINESS MODELING</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
                Lean <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700">Canvas.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
                Memetakan 9 aspek strategis bisnis (Problem, Solution, Unique Value Proposition, Cost Structure, dsb.) platform EduStem secara berkelanjutan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-20 px-6 relative z-10">
        <ScrollReveal variant="zoom-in" duration={800}>
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-950 text-white rounded-lg"><Activity size={16} /></div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">BUSINESS MODEL CANVAS</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  Lean Canvas: Model Kelayakan Solusi
                </h2>
              </div>
              
              <button 
                onClick={() => openPdfModal('/leancanvas.pdf')}
                className="w-fit py-3.5 px-6 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
              >
                <Maximize2 size={14} /> LIHAT LEAN CANVAS PENUH
              </button>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-10 font-medium">
              Struktur Lean Canvas membantu menjamin bahwa WorkWell dikembangkan dengan strategi bisnis yang konkret, memetakan risiko, saluran distribusi, dan keunggulan kompetitif.
            </p>

            <div 
              onClick={() => openPdfModal('/leancanvas.pdf')}
              className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 p-4 h-[600px] flex items-center justify-center cursor-pointer group/pdfimg"
            >
              {/* Inline PDF Preview using iframe */}
              <iframe 
                src="/leancanvas.pdf#toolbar=0" 
                title="Lean Canvas Document Preview"
                className="w-full h-full rounded-xl border-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover/pdfimg:bg-slate-950/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/pdfimg:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] font-bold tracking-widest px-5 py-3 rounded-xl border border-slate-100 shadow-lg transition-opacity duration-300 flex items-center gap-2">
                  <Maximize2 size={12} /> BUKA PENINJAU PDF PENUH
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Fullscreen PDF Modal Overlay */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          <div 
            onClick={closePdfModal} 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <h3 className="font-mono text-xs font-bold text-slate-400 tracking-wider">LEAN CANVAS DOCUMENT VIEW</h3>
              <button 
                onClick={closePdfModal}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-all"
              >
                <X size={16} />
              </button>
            </div>
            <iframe 
              src={activePdf} 
              title="Lean Canvas Document PDF Viewer"
              className="w-full h-full border-none flex-grow"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeanCanvas;
