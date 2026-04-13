import React from 'react';
import { Users, Lightbulb, PenTool, BarChart3, Globe2, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const sdgData = [
    { id: 1, title: "Tanpa Kemiskinan", fileName: "icon1.jpg" },
    { id: 2, title: "Tanpa Kelaparan", fileName: "icon2.jpg" },
    { id: 3, title: "Kehidupan Sehat", fileName: "icon3.jpg" },
    { id: 4, title: "Pendidikan Berkualitas", fileName: "icon4.jpg", focus: true },
    { id: 5, title: "Kesetaraan Gender", fileName: "icon5.jpg" },
    { id: 6, title: "Air Bersih", fileName: "icon6.jpg" },
    { id: 7, title: "Energi Bersih", fileName: "icon7.jpg" },
    { id: 8, title: "Pekerjaan Layak", fileName: "icon8.jpg" },
    { id: 9, title: "Inovasi & Infrastruktur", fileName: "icon9.jpg" },
    { id: 10, title: "Kurangi Kesenjangan", fileName: "icon10.jpg" },
    { id: 11, title: "Kota Berkelanjutan", fileName: "icon11.jpg" },
    { id: 12, title: "Konsumsi Bertanggung Jawab", fileName: "icon12.jpg" },
    { id: 13, title: "Iklim", fileName: "icon13.jpg" },
    { id: 14, title: "Ekosistem Laut", fileName: "icon14.jpg" },
    { id: 15, title: "Ekosistem Darat", fileName: "icon15.jpg" },
    { id: 16, title: "Perdamaian & Keadilan", fileName: "icon16.jpg" },
    { id: 17, title: "Kemitraan", fileName: "partnership.png" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Hero Section - FIXED: Contain and Better Fade */}
      <header className="relative pt-48 pb-32 px-6 bg-slate-50 border-b border-slate-100">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-700"
          style={{ 
            backgroundImage: `
              linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%), 
              linear-gradient(to right, rgba(255,255,255,1) 20%, rgba(255,255,255,0.4) 100%), 
              url('/images/plaza.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/5 blur-[120px] pointer-events-none" />
        
        {/* Kontainer Utama - Menjaga teks tetap rapi di tengah */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-red-500 animate-pulse"></span>
              <span className="text-red-700 font-mono text-xs uppercase tracking-[0.3em] font-bold">UNJ STEM Initiative 2026</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-950 leading-[0.85] tracking-tighter mb-10">
              Quality <br /> <span className="text-red-600">Education.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal max-w-2xl bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
              Membangun masa depan inklusif melalui akses pendidikan berkualitas yang merata dengan integrasi teknologi STEM.
            </p>
          </div>
        </div>
      </header>

      {/* Goal Cards Grid - FIXED: Centered and Scaled */}
      <section className="max-w-7xl mx-auto py-20 px-6 relative">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-6">
            <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-3 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-red-500 rounded-full"></span>
              <Globe2 size={14} className="animate-spin-slow text-red-500" /> 17 Global Goals Overview
            </h2>
          </div>
          
          {/* Menggunakan grid-cols-auto-fit agar kartu mengecil/membesar dengan rapi */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {sdgData.map((sdg) => (
              <div 
                key={sdg.id} 
                className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden aspect-square shadow-sm
                  ${sdg.focus 
                    ? 'border-red-600 ring-2 ring-red-100 shadow-md shadow-red-200 hover:-translate-y-2' 
                    : 'bg-white border-slate-100 hover:shadow-xl hover:border-red-200 hover:-translate-y-2'
                  }`}
              >
                <img 
                  src={`/images/sdgs/${sdg.fileName}`} 
                  alt={sdg.title}
                  className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-white/90 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                  <span className="text-[8px] font-mono font-bold text-red-600 uppercase">
                    Goal 0{sdg.id}
                  </span>
                  <h3 className="text-[9px] font-extrabold leading-tight text-slate-900 tracking-tight uppercase">
                    {sdg.title}
                  </h3>
                </div>

                {sdg.focus && (
                  <div className="absolute top-1.5 right-1.5 bg-red-600 text-white font-black text-[7px] px-1.5 py-0.5 rounded-full shadow-md z-10">
                    FOCUS
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Section - Wrapped in Max-Width Container */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <div className="p-3 bg-red-100 text-red-600 w-fit rounded-xl mb-6 shadow-inner border border-red-200">
                <BarChart3 size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tight leading-tight">Statistik <br/>Pendidikan</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 font-light italic">"Data fundamental yang menjadi acuan dalam pengembangan kerangka kerja STEM."</p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { label: "Literasi Digital", value: "3.54", color: "bg-blue-600", icon: <Lightbulb size={20}/> },
                { label: "Angka Partisipasi", value: "95.9%", color: "bg-red-600", icon: <Users size={20}/> },
                { label: "Disparitas Desa", value: "18.2%", color: "bg-emerald-600", icon: <Globe2 size={20}/> },
                { label: "STEM Interest", value: "42%", color: "bg-orange-600", icon: <PenTool size={20}/> }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-red-100">
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

      {/* Target Focus Section - Wrapped in Max-Width Container */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="group bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl transition-all duration-700">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600 text-[10px] font-mono font-black px-4 py-1 w-fit rounded-full mb-6 tracking-[0.2em]">TARGET SOSIAL 4.4</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight group-hover:text-red-50 transition-colors">
                Keterampilan Relevan untuk Pekerjaan Layak.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Meningkatkan jumlah remaja dan orang dewasa yang memiliki keterampilan teknis guna mendukung ekosistem kewirausahaan nasional.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-5">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg">4</div>
                <p className="font-bold text-lg tracking-tight">STEM Integration</p>
              </div>
              <ul className="space-y-4 text-slate-300">
                {["Digital Literacy Modules", "Vocational Tech Training", "AI-Driven Mentorship"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-1 bg-red-500/10 rounded-full group-hover/item:bg-red-500 transition-colors border border-red-500/20">
                      <ArrowRight size={12} className="text-red-500 group-hover/item:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-light group-hover/item:text-white transition-all">{item}</span>
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