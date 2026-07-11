import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Eye, 
  Code, 
  ArrowUpRight, 
  CheckCircle2,
  Maximize2,
  X,
  Download,
  HelpCircle,
  Activity,
  FileText
} from 'lucide-react';
import Navbar from '../components/Navbar'; 

const Prototyping = () => {
  // State untuk lightbox modal gambar penuh
  const [activeImage, setActiveImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openImageModal = (imagePath, title) => {
    setActiveImage(imagePath);
    setModalTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setActiveImage(null);
    setModalTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Header Halaman */}
      <header className="relative pt-48 pb-20 px-6 border-b border-slate-100 bg-white w-full flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/5 blur-[120px] pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto z-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-red-500"></span>
              <span className="text-red-700 font-mono text-[11px] uppercase tracking-[0.5em] font-black">STAGE 3: PROTOTYPE BUILD</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-700">Prototyping.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
              Mentransformasikan konsep abstrak menjadi modul web fungsional berkecepatan tinggi yang adaptif untuk menjamin kenyamanan ergonomis dan pemantauan hidrasi secara real-time.
            </p>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-24 px-6 relative space-y-28 z-10">


        {/* Section 3: Starbursting & Lean Canvas */}
        <section className="space-y-16">
          
          {/* Starbursting Card */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg"><HelpCircle size={16} /></div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">STARBURSTING METHOD</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  Starbursting Model: Analisis Pertanyaan Kritis
                </h2>
              </div>
              
              <button 
                onClick={() => openImageModal('/images/starburst.png', 'Starbursting Model')}
                className="w-fit py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
              >
                <Maximize2 size={14} /> LIHAT STARBURST PENUH
              </button>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mb-10 font-medium">
              Pendekatan Starbursting memetakan aspek pertanyaan fundamental (Who, How, What, Where, Why) secara mendalam untuk menyempurnakan kegunaan dan validitas solusi EduStem.
            </p>

            <div 
              onClick={() => openImageModal('/images/starburst.png', 'Starbursting Model')}
              className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 p-4 flex items-center justify-center cursor-pointer group/starimg"
            >
              <img 
                src="/images/starburst.png" 
                alt="Starbursting Model" 
                className="w-full max-w-5xl h-auto rounded-xl object-contain shadow-md transition-transform duration-700 group-hover/starimg:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover/starimg:bg-slate-950/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/starimg:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] font-bold tracking-widest px-5 py-3 rounded-xl border border-slate-100 shadow-lg transition-opacity duration-300 flex items-center gap-2">
                  <Maximize2 size={12} /> KLIK UNTUK MEMPERBESAR
                </span>
              </div>
            </div>
          </div>

          {/* Lean Canvas Card */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-950 text-white rounded-lg"><Activity size={16} /></div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">BUSINESS MODEL CANVAS</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  Lean Canvas: Model Solusi Bisnis EduStem
                </h2>
              </div>
              
              <button 
                onClick={() => openImageModal('/leancanvas.pdf', 'Lean Canvas Model')}
                className="w-fit py-3.5 px-6 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
              >
                <Maximize2 size={14} /> LIHAT LEAN CANVAS PENUH
              </button>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl mb-10 font-medium">
              Lean Canvas memetakan 9 aspek strategis (termasuk Problem, Solution, Unique Value Proposition, dan Cost Structure) untuk merancang kelayakan jangka panjang dan implementasi platform EduStem secara berkelanjutan.
            </p>

            <div 
              onClick={() => openImageModal('/leancanvas.pdf', 'Lean Canvas Model')}
              className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-100 p-8 flex flex-col items-center justify-center cursor-pointer group/leanimg min-h-[300px]"
            >
              <FileText size={64} className="text-slate-400 group-hover/leanimg:text-red-600 transition-colors duration-300 mb-4" />
              <span className="text-sm font-bold text-slate-700">Dokumen Lean Canvas (PDF)</span>
              <span className="text-xs text-slate-400 mt-1">Klik untuk membuka peninjau dokumen</span>

              <div className="absolute inset-0 bg-slate-950/0 group-hover/leanimg:bg-slate-950/5 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/leanimg:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 font-mono text-[10px] font-bold tracking-widest px-5 py-3 rounded-xl border border-slate-100 shadow-lg transition-opacity duration-300 flex items-center gap-2">
                  <Maximize2 size={12} /> BUKA PENINJAU PDF
                </span>
              </div>
            </div>
          </div>

        </section>



      </main>

      {/* Lightbox Modal Popup */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div 
            onClick={closeImageModal} 
            className="absolute inset-0 bg-slate-900/85 backdrop-blur-md transition-opacity duration-300"
          />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-6xl h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col z-10 border border-slate-100">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <h3 className="font-black text-slate-950 tracking-tight text-sm md:text-base leading-none">
                  {modalTitle}
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a 
                  href={activeImage} 
                  download 
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 rounded-xl transition-all border border-slate-200/50 flex items-center gap-2 text-xs font-mono font-bold"
                  title="Unduh Gambar"
                >
                  <Download size={16} /> <span className="hidden sm:inline">UNDUH</span>
                </a>
                
                {/* Close Button */}
                <button 
                  onClick={closeImageModal}
                  className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl transition-all border border-red-100/50"
                  title="Tutup Gambar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 bg-slate-900 overflow-auto p-6 flex items-center justify-center">
              {activeImage.endsWith('.pdf') ? (
                <iframe 
                  src={`${activeImage}#toolbar=0`} 
                  title={modalTitle} 
                  className="w-full h-full border-none bg-white rounded-xl"
                />
              ) : (
                <img 
                  src={activeImage} 
                  alt={modalTitle} 
                  className="max-w-none w-full h-auto object-contain" 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              )}
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Prototyping;