import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Maximize2, X, Globe, ExternalLink, RefreshCw, Layers } from 'lucide-react';

const Prototyping = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [iframeKey, setIframeKey] = useState(0); // Untuk trigger reload iframe

  const figmaScreenshots = [
    {
      id: 1,
      title: "Halaman Login / Selamat Datang",
      desc: "Antarmuka otentikasi bersih dengan latar belakang ruang kerja modern dan form minimalis.",
      path: "/images/figma_3.png"
    },
    {
      id: 2,
      title: "Dashboard Kesehatan Kerja",
      desc: "Panel utama memantau durasi duduk, tatap layar, hidrasi harian, serta log aktivitas K3.",
      path: "/images/figma_2.png"
    },
    {
      id: 3,
      title: "Kalender Aktivitas Mingguan",
      desc: "Kalender interaktif untuk melacak riwayat pemenuhan target produktivitas sehat mingguan.",
      path: "/images/figma_1.png"
    },
    {
      id: 4,
      title: "Pengaturan Informasi Pribadi",
      desc: "Form edit profil pengguna untuk menyesuaikan nama, tanggal lahir, dan preferensi akun.",
      path: "/images/figma_4.png"
    },
    {
      id: 5,
      title: "Modal Istirahat Mata (20-20-20)",
      desc: "Pop-up pintar pengingat berkala untuk mereduksi kelelahan mata dengan metode 20-20-20.",
      path: "/images/figma_5.png"
    },
    {
      id: 6,
      title: "Desain Logo WorkWell Digital",
      desc: "Identitas brand resmi untuk platform WorkWell Digital dengan tagline Stay Fit While You Sit.",
      path: "/images/figma_6.png"
    }
  ];

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

  const handleReload = () => {
    setIframeKey(prev => prev + 1);
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
              <span className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">STAGE 3: FIGMA & DEVELOPMENT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
              Purwarupa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-700">Prototype.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
              Menampilkan transformasi desain visual dari Figma mockups langsung menjadi produk aplikasi web fungsional yang siap dijalankan.
            </p>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-20 px-6 space-y-24 relative z-10">
        
        {/* SECTION 1: FIGMA SCREENSHOTS GRID */}
        <section className="space-y-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest block">UI/UX INTERFACE DESIGN</span>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">Figma Purwarupa (High-Fidelity)</h2>
              <p className="text-sm text-slate-500 font-medium">Klik pada gambar untuk memperbesar tangkapan layar purwarupa Figma.</p>
            </div>
            
            <a 
              href="https://www.figma.com/design/apdx9OqOeE5eYxOtpS46ke/STEM-Prototype?node-id=0-1&t=Z3VMvQGYFVZ7sEtI-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit py-4 px-6 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5"
            >
              <ExternalLink size={14} /> BUKA DESAIN DI FIGMA
            </a>
          </div>

          {/* Grid Layout of Screenshots */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {figmaScreenshots.map((item, idx) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-3xl border border-slate-100 p-5 shadow-sm hover:shadow-xl hover:border-red-100/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div 
                    onClick={() => openImageModal(item.path, item.title)}
                    className="relative w-full h-56 bg-slate-50 rounded-2xl mb-5 overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center cursor-pointer group/imgcontainer"
                  >
                    <img 
                      src={item.path} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover/imgcontainer:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover/imgcontainer:bg-slate-950/5 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover/imgcontainer:opacity-100 bg-white/95 backdrop-blur-md text-slate-900 font-mono text-[9px] font-bold tracking-widest px-4 py-2.5 rounded-xl border border-slate-100 shadow-md transition-opacity duration-300 flex items-center gap-2">
                        <Maximize2 size={10} /> KLIK UNTUK MEMPERBESAR
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-black text-slate-950 tracking-tight mb-2 leading-tight group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 text-[9px] font-mono font-bold text-slate-400">
                  FIGMA BOARD MOCKUP #{item.id}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: LIVE WEB APP EMBED */}
        <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden group max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">LIVE DEMO IMPLEMENTATION</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                WorkWell: Aplikasi Web Hasil Akhir
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleReload}
                className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs font-mono font-bold px-4 py-3"
                title="Reload App"
              >
                <RefreshCw size={14} /> RELOAD
              </button>
              <a 
                href="https://workwell-stem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
              >
                <Globe size={14} /> BUKA DI TAB BARU
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Di bawah ini adalah aplikasi web <strong>WorkWell</strong> yang telah di-deploy ke Vercel secara langsung. Anda dapat berinteraksi penuh dengan dashboard kesehatan kognitif-fisik, mengatur timer screen-time, mencatat hidrasi air, dan menggunakan panduan peregangan dinamis dari dalam frame di bawah ini.
          </p>

          <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-2xl bg-slate-950 h-[650px]">
            <iframe 
              key={iframeKey}
              src="https://workwell-stem.vercel.app/" 
              title="WorkWell Live Web Application Embed"
              className="w-full h-full border-none bg-white"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </section>

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
              alt={modalTitle} 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Prototyping;