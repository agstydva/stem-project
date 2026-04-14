import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Lightbulb, 
  PenTool, 
  BarChart3, 
  Globe2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Dashboard = () => {
  // State untuk mengontrol slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Daftar gambar background
  const images = [
    '/images/plaza.jpg',
    '/images/unj2.jpeg',
    '/images/unj2.jpg'
  ];

  // Fungsi Navigasi
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Logic Autoplay Slider (Pindah setiap 4 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer jika user klik manual

  const sdgData = [
    { id: 1, title: "Tanpa Kemiskinan", fileName: "icon1.jpg", path: "/education" },
    { id: 2, title: "Tanpa Kelaparan", fileName: "icon2.jpg", path: "/hunger" },
    { id: 3, title: "Kehidupan Sehat", fileName: "icon3.jpg", path: "/health" },
    { id: 4, title: "Pendidikan Berkualitas", fileName: "icon4.jpg", focus: true, path: "/education" },
    { id: 5, title: "Kesetaraan Gender", fileName: "icon5.jpg", path: "/gender" },
    { id: 6, title: "Air Bersih", fileName: "icon6.jpg", path: "/water" },
    { id: 7, title: "Energi Bersih", fileName: "icon7.jpg", path: "/energy" },
    { id: 8, title: "Pekerjaan Layak", fileName: "icon8.jpg", path: "/work" },
    { id: 9, title: "Inovasi & Infrastruktur", fileName: "icon9.jpg", path: "/innovation" },
    { id: 10, title: "Kurangi Kesenjangan", fileName: "icon10.jpg", path: "/inequality" },
    { id: 11, title: "Kota Berkelanjutan", fileName: "icon11.jpg", path: "/cities" },
    { id: 12, title: "Konsumsi Bertanggung Jawab", fileName: "icon12.jpg", path: "/consumption" },
    { id: 13, title: "Iklim", fileName: "icon13.jpg", path: "/climate" },
    { id: 14, title: "Ekosistem Laut", fileName: "icon14.jpg", path: "/oceans" },
    { id: 15, title: "Ekosistem Darat", fileName: "icon15.jpg", path: "/forests" },
    { id: 16, title: "Perdamaian & Keadilan", fileName: "icon16.jpg", path: "/peace" },
    { id: 17, title: "Kemitraan", fileName: "icon17.jpg", path: "/partnerships" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-48 pb-36 px-6 border-b border-slate-100 w-full min-h-[700px] flex items-center overflow-hidden group/hero">
        
        {/* Background Slider Container */}
        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-0 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `
                linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%), 
                linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 80%), 
                url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%' 
            }}
          />
        ))}

        {/* Tombol Navigasi Manual (Muncul saat Hover) */}
        <div className="absolute inset-0 z-30 flex items-center justify-between px-6 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/90 text-slate-800 backdrop-blur-md transition-all duration-300 pointer-events-auto opacity-0 group-hover/hero:opacity-100 -translate-x-4 group-hover/hero:translate-x-0 shadow-lg"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/90 text-slate-800 backdrop-blur-md transition-all duration-300 pointer-events-auto opacity-0 group-hover/hero:opacity-100 translate-x-4 group-hover/hero:translate-x-0 shadow-lg"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === currentSlide ? 'w-12 bg-red-600' : 'w-4 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Overlay Gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/5 blur-[120px] pointer-events-none z-10" />
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto z-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-red-500 animate-pulse"></span>
              <span className="text-red-700 font-mono text-[11px] uppercase tracking-[0.5em] font-black">UNJ STEM Initiative 2026</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-12">
              Quality <br /> 
              <span className="text-red-600">Education.</span>
            </h1>

            <div className="relative group max-w-2xl">
              <div className="absolute -left-8 top-4 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-light tracking-tight">
                Membangun <span className="font-bold text-slate-950">masa depan inklusif</span> melalui akses pendidikan berkualitas yang merata dengan <span className="text-red-600 font-bold italic">integrasi teknologi STEM</span>.
              </p>
              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Goal Cards Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-16 border-b border-slate-100 pb-8">
            <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-3 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-red-500 rounded-full"></span>
              <Globe2 size={16} className="animate-spin-slow text-red-500" /> 17 Global Goals Overview
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
              {sdgData.map((sdg) => (
                <Link 
                  to={sdg.path || "#"} 
                  key={sdg.id} 
                  className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden aspect-square shadow-sm flex items-center justify-center
                    ${sdg.focus 
                      ? 'border-red-600 ring-2 ring-red-100 shadow-lg shadow-red-200 hover:-translate-y-2' 
                      : 'bg-white border-slate-100 hover:shadow-xl hover:border-red-200 hover:-translate-y-2'
                    }`}
                >
                  <img 
                    src={`/images/sdgs/${sdg.fileName}`} 
                    alt={sdg.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/95 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                    <span className="text-[8px] font-mono font-bold text-red-600 uppercase">Goal 0{sdg.id}</span>
                    <h3 className="text-[9px] font-extrabold leading-tight text-slate-900 tracking-tight uppercase">{sdg.title}</h3>
                  </div>
                  {sdg.focus && (
                    <div className="absolute top-1.5 right-1.5 bg-red-600 text-white font-black text-[7px] px-1.5 py-0.5 rounded-full shadow-lg z-10">FOCUS</div>
                  )}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-red-500/10 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                  <img 
                    src="/images/unj2.jpeg" 
                    alt="Kampus UNJ" 
                    className="w-full h-64 object-cover rounded-[1.5rem] mb-6 shadow-inner group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="px-3 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-red-100 text-red-600 rounded-xl">
                        <BarChart3 size={20} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-none">
                        Statistik <span className="text-red-600">Pendidikan</span>
                      </h2>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                      "Data fundamental yang dihimpun dari lingkungan Kampus Hijau sebagai acuan pengembangan framework STEM berkelanjutan."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { label: "Literasi Digital", value: "3.54", color: "bg-blue-600", icon: <Lightbulb size={20}/> },
                { label: "Angka Partisipasi", value: "95.9%", color: "bg-red-600", icon: <Users size={20}/> },
                { label: "Disparitas Desa", value: "18.2%", color: "bg-emerald-600", icon: <Globe2 size={20}/> },
                { label: "STEM Interest", value: "42%", color: "bg-orange-600", icon: <PenTool size={20}/> }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-red-100 hover:-translate-y-1">
                  <div className={`w-11 h-11 ${stat.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-all`}>
                    {stat.icon}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="max-w-7xl mx-auto py-32 px-6 relative">
        <div className="group relative bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-[3rem] p-10 md:p-16 border border-slate-100 overflow-hidden shadow-2xl shadow-slate-100/50 transition-all duration-700 hover:shadow-red-200/40">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-500/[0.04] rounded-full blur-[130px] pointer-events-none group-hover:bg-red-500/[0.07] transition-all duration-700" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600 text-[10px] font-mono font-black px-4 py-1.5 w-fit rounded-full mb-6 tracking-[0.2em] text-white shadow-xl shadow-red-200/50">TARGET SOSIAL 4.4</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight text-slate-950 group-hover:text-red-600 transition-colors">
                Keterampilan Relevan untuk Pekerjaan Layak.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-md font-medium">
                Meningkatkan jumlah remaja dan orang dewasa yang memiliki keterampilan teknis guna mendukung ekosistem kewirausahaan nasional.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-red-200/70 group-hover:rotate-6 transition-transform leading-none">4</div>
                <p className="font-bold text-lg tracking-tight text-slate-950 leading-none">STEM Integration</p>
              </div>
              <ul className="space-y-4">
                {["Digital Literacy Modules", "Vocational Tech Training", "AI-Driven Mentorship"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-1.5 bg-red-600 rounded-full shadow-lg shadow-red-100/80 group-hover/item:scale-110 transition-transform flex items-center justify-center">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover/item:text-red-600 transition-all">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;