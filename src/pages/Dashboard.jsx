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
  ChevronRight,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Zap,
  Heart,
  GraduationCap
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
  }, [currentSlide]);

  const sdgData = [
    { id: 1, title: "Tanpa Kemiskinan", fileName: "icon1.jpg", path: "/education" },
    { id: 2, title: "Tanpa Kelaparan", fileName: "icon2.jpg", path: "/hunger" },
    { id: 3, title: "Kehidupan Sehat", fileName: "icon3.jpg", focus: true, path: "/health" },
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
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-rose-500/20 selection:text-rose-400 overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-44 pb-28 px-8 border-b border-slate-900/40 w-full min-h-[750px] flex items-center overflow-hidden group/hero">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-0 ${
              index === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ 
              backgroundImage: `
                linear-gradient(to bottom, rgba(7, 9, 14, 0.4) 40%, rgba(7, 9, 14, 1) 100%), 
                linear-gradient(to right, rgba(7, 9, 14, 1) 25%, rgba(7, 9, 14, 0.6) 50%, rgba(7, 9, 14, 0) 90%), 
                url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%' 
            }}
          />
        ))}

        <div className="absolute inset-0 z-30 flex items-center justify-between px-8 pointer-events-none">
          <button onClick={prevSlide} className="p-3 rounded-xl bg-slate-950/60 hover:bg-rose-500 text-white backdrop-blur-md transition-all duration-500 pointer-events-auto opacity-0 group-hover/hero:opacity-100 -translate-x-4 group-hover/hero:translate-x-0 shadow-2xl border border-slate-800/40 hover:border-rose-400/40">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-xl bg-slate-950/60 hover:bg-rose-500 text-white backdrop-blur-md transition-all duration-500 pointer-events-auto opacity-0 group-hover/hero:opacity-100 translate-x-4 group-hover/hero:translate-x-0 shadow-2xl border border-slate-800/40 hover:border-rose-400/40">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3.5 z-30">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1 transition-all duration-700 rounded-full ${i === currentSlide ? 'w-10 bg-rose-500' : 'w-3 bg-slate-800 hover:bg-slate-700'}`} />
          ))}
        </div>

        <div className="absolute top-0 right-0 w-2/5 h-full bg-rose-500/5 blur-[160px] pointer-events-none z-10" />
        
        <div className="relative max-w-7xl mx-auto z-20 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-10 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>
              <span className="text-rose-400 font-mono text-[10px] uppercase tracking-[0.6em] font-bold">UNJ STEM Initiative 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 font-sans">
              Quality <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500">Education.</span>
            </h1>
            <div className="relative group max-w-2xl">
              <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-light tracking-tight">
                Membangun <span className="font-semibold text-white">masa depan inklusif</span> melalui akses pendidikan berkualitas yang merata dengan <span className="text-rose-400 font-semibold italic">integrasi teknologi STEM</span>.
              </p>
              <div className="mt-10 h-1 w-20 bg-gradient-to-r from-rose-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Goal Cards Grid */}
      <section className="max-w-7xl mx-auto py-24 px-8 relative">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-14 border-b border-slate-900/50 pb-8">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-[0.25em] flex items-center gap-3.5">
              <span className="h-5 w-[3px] bg-rose-500 rounded-full"></span>
              <Globe2 size={15} className="text-rose-500 animate-spin-slow" /> 17 Global Goals Overview
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4.5">
            {sdgData.map((sdg) => (
              <Link 
                to={sdg.path || "#"} 
                key={sdg.id} 
                className={`group relative rounded-2xl border transition-all duration-500 ease-out cursor-pointer overflow-hidden aspect-square flex items-center justify-center
                  ${sdg.focus 
                    ? 'border-rose-500/80 bg-rose-950/10 ring-2 ring-rose-500/20 shadow-xl shadow-rose-950/30 hover:-translate-y-2' 
                    : 'bg-slate-950/40 border-slate-900/80 hover:shadow-2xl hover:border-rose-500/40 hover:-translate-y-2'
                  }`}
              >
                <img 
                  src={`/images/sdgs/${sdg.fileName}`} 
                  alt={sdg.title}
                  className="w-full h-full object-contain p-4.5 transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-slate-950/95 p-3.5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md">
                  <span className="text-[8px] font-mono font-bold text-rose-500 uppercase tracking-widest">Goal 0{sdg.id}</span>
                  <h3 className="text-[10px] font-black leading-tight text-white tracking-tight uppercase mt-1">{sdg.title}</h3>
                </div>
                {sdg.focus && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-mono text-[7px] font-black px-2 py-0.5 rounded shadow-lg z-10 tracking-wider">FOCUS</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Section - Bento Box Style */}
      <section className="bg-slate-950/40 py-28 px-8 border-y border-slate-900/50 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-rose-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left Column (Highlight card) */}
            <div className="lg:col-span-5 flex">
              <div className="relative group w-full flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-rose-800 rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition-all duration-700" />
                <div className="relative bg-[#0d121f] p-5 rounded-3xl border border-slate-800/80 shadow-2xl flex flex-col justify-between overflow-hidden w-full">
                  <div>
                    <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-inner relative">
                      <img src="/images/unj2.jpeg" alt="Kampus UNJ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-3 bg-rose-500/10 text-rose-400 rounded-2xl border border-rose-500/20"><BarChart3 size={22} /></div>
                      <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                        Statistik <span className="text-rose-500">Pendidikan</span>
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light italic">"Data fundamental yang dihimpun dari lingkungan Kampus Hijau sebagai acuan pengembangan framework STEM berkelanjutan."</p>
                </div>
              </div>
            </div>

            {/* Right Column (4 Cards Bento Grid) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { label: "Literasi Digital", value: "3.54", color: "from-rose-500/20 to-rose-800/10 hover:border-rose-500/30", iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20", icon: <Lightbulb size={20}/> },
                { label: "Angka Partisipasi", value: "95.9%", color: "from-amber-500/20 to-amber-800/10 hover:border-amber-500/30", iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20", icon: <Users size={20}/> },
                { label: "Disparitas Desa", value: "18.2%", color: "from-emerald-500/20 to-emerald-800/10 hover:border-emerald-500/30", iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", icon: <Globe2 size={20}/> },
                { label: "STEM Interest", value: "42%", color: "from-blue-500/20 to-blue-800/10 hover:border-blue-500/30", iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20", icon: <PenTool size={20}/> }
              ].map((stat, idx) => (
                <div key={idx} className={`group bg-gradient-to-br ${stat.color} p-8 rounded-3xl border border-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-10 shadow-md ${stat.iconColor} border group-hover:scale-110 transition-transform duration-500`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                    <p className="text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="max-w-7xl mx-auto py-28 px-8 relative">
        <div className="group relative bg-gradient-to-br from-slate-950 via-[#0a0e1a] to-[#0f1424] rounded-3xl p-10 md:p-16 border border-slate-900 shadow-2xl transition-all duration-700">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[130px] pointer-events-none group-hover:bg-rose-500/[0.04] transition-all duration-700" />
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-mono font-bold px-4 py-1.5 w-fit rounded-lg mb-8 tracking-[0.25em] uppercase">TARGET SOSIAL 4.4 & 3.4</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight text-white group-hover:text-rose-400 transition-colors duration-500">Keterampilan Digital & Esensi Kesehatan Mental-Fisik.</h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light">Mendorong pemenuhan target kompetensi digital kerja (SDG 4.4) sekaligus mengintervensi pencegahan stres kognitif dan kelelahan ergonomis layar (SDG 3.4) di Indonesia.</p>
            </div>
            <div className="bg-slate-950/60 p-8 rounded-2xl border border-slate-900 shadow-inner backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-900 pb-5">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-xl shadow-rose-950/40 group-hover:rotate-6 transition-transform leading-none">3-4</div>
                <p className="font-bold text-base tracking-tight text-white leading-none">Dual SDG Focus Integration</p>
              </div>
              <ul className="space-y-4.5">
                {["Ergonomic Digital Literacy", "Vocational Health & Tech Training", "Mental-Wellbeing Tracker"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full shadow-inner group-hover/item:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <ArrowRight size={10} />
                    </div>
                    <span className="text-sm font-semibold text-slate-400 group-hover/item:text-rose-400 transition-all">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why SDG 4 & Target 2030 Cards */}
      <section className="max-w-7xl mx-auto pb-28 px-8 relative">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="group/why bg-slate-950/40 p-6 md:p-8 rounded-3xl border border-slate-900/60 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-rose-500/20 hover:-translate-y-1.5 transition-all duration-500">
            <div>
              <div className="w-full h-56 bg-slate-900 rounded-2xl mb-6 overflow-hidden border border-slate-800 shadow-inner relative">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Urgensi SDG 4" className="w-full h-full object-cover group-hover/why:scale-105 transition-transform duration-700 filter brightness-90" />
                <div className="absolute top-4 left-4 bg-rose-500 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded shadow-md uppercase tracking-wider">Global Urgency</div>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-4">Mengapa <span className="text-rose-500">SDG 4 & SDG 3</span> Beriringan?</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light mb-4">Pendidikan berkualitas tidak akan terserap maksimal jika kesehatan fisik dan mental pelajar diabaikan. Kelelahan mata (CVS) dan dehidrasi akibat duduk terlalu lama adalah penghambat tersembunyi produktivitas generasi muda Indonesia.</p>
              <p className="text-sm text-slate-400 leading-relaxed font-light">Proyek ini mentransformasi edukasi IT dengan menyuntikkan kesadaran ergonomi harian demi mempersiapkan angkatan kerja yang unggul sekaligus sehat sejahtera.</p>
            </div>
          </div>

          <div className="group/target bg-slate-950/40 p-6 md:p-8 rounded-3xl border border-slate-900/60 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-rose-500/20 hover:-translate-y-1.5 transition-all duration-500">
            <div>
              <div className="w-full h-56 bg-slate-900 rounded-2xl mb-6 overflow-hidden border border-slate-800 shadow-inner relative">
                <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80" alt="Target SDGs 2030" className="w-full h-full object-cover group-hover/target:scale-105 transition-transform duration-700 filter brightness-90" />
                <div className="absolute top-4 left-4 bg-slate-800 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded shadow-md uppercase tracking-wider">Agenda Milestones</div>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-6">Target Utama <span className="text-rose-500">SDGs Indonesia</span></h3>
              <div className="space-y-4 text-sm text-slate-400 font-light">
                <div className="flex gap-4 items-start">
                  <span className="font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded text-xs">3.4</span>
                  <p className="leading-relaxed">Mereduksi sepertiga dari kematian prematur akibat penyakit tidak menular melalui intervensi pencegahan serta mempromosikan kesehatan mental dan kesejahteraan.</p>
                </div>
                <div className="flex gap-4 items-start border-t border-slate-900 pt-4">
                  <span className="font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded text-xs">4.4</span>
                  <p className="leading-relaxed font-semibold text-white">Meningkatkan jumlah remaja dan orang dewasa secara signifikan yang memiliki keterampilan teknis mumpuni untuk pekerjaan layak serta kewirausahaan digital.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* National Data Metrics */}
      <section className="max-w-7xl mx-auto pb-28 px-8 relative">
        <div className="border-t border-slate-900/60 pt-20">
          <div className="flex flex-col mb-14">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-[0.25em] flex items-center gap-3.5 mb-4">
              <span className="h-5 w-[3px] bg-rose-500 rounded-full"></span>
              <BarChart3 size={15} className="text-rose-500" /> SDG 3 & 4 National Data Metrics
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">5 Fakta Utama <span className="text-rose-500">Pendidikan & Kesehatan Kerja</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { no: "01", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80", title: "Partisipasi Sekolah Menengah", desc: "Angka Partisipasi Murni (APM) jenjang SMA/SMK/Sederajat di Indonesia telah mencapai nilai 73,15%. Akselerasi saat ini difokuskan penuh untuk mereduksi kesenjangan kualitas antar-daerah.", source: "(Pusat Data Kemendikbudristek, 2023)" },
              { no: "02", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80", title: "Kesenjangan Literasi Digital", desc: "Indeks Literasi Digital nasional berada pada skor 3,54 dari skala 5, namun terdapat disparitas akses teknologi antara wilayah rural dan urban sebesar 18,2% yang memengaruhi kesiapan kerja talenta muda.", source: "(Kementerian PPN/Bappenas, 2023)" },
              { no: "03", url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=500&q=80", title: "Minat Ekosistem STEM", desc: "Keterlibatan aktif talenta muda dalam rumpun ilmu STEM nasional berada di angka 42%. Tantangan terbesar kurikulum vokasi saat ini adalah menyelaraskan teori dengan kebutuhan praktis industri digital.", source: "(Kementerian PPN/Bappenas, 2024)" },
              { no: "04", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80", title: "Stres Pembelajaran Digital", desc: "Pengerjaan tugas di depan layar komputer secara konstan memicu Computer Vision Syndrome (CVS) dan stres kognitif pada 65% mahasiswa magang teknologi, yang menghambat optimalisasi transfer pengetahuan kerja.", source: "(Kementerian Kesehatan RI, 2024)" },
              { no: "05", url: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=500&q=80", title: "Tingkat Hidrasi Pelajar IT", desc: "Lebih dari 58% pelajar bidang teknologi mengalami dehidrasi ringan selama proses pengerjaan proyek karena absennya pengingat berkala, berimbas langsung pada penurunan konsentrasi kognitif belajar.", source: "(Badan Pusat Statistik, 2024)" }
            ].map((item, idx) => (
              <div key={idx} className="group/card bg-slate-950/40 p-6 rounded-3xl border border-slate-900/60 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-rose-500/20 hover:-translate-y-1.5 transition-all duration-500">
                <div>
                  <div className="w-full h-44 bg-slate-900 rounded-xl mb-5 overflow-hidden border border-slate-800 shadow-inner">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 filter brightness-90" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-rose-500 mb-2.5 tracking-wider">KEY DATA {item.no}</div>
                  <h4 className="text-lg font-black text-white tracking-tight mb-2.5 leading-tight group-hover/card:text-rose-400 transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-500 block mt-6 italic">{item.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEPARATED SWOT MATRIX SECTION (GOAL 3 & GOAL 4) ================= */}
      <section className="max-w-7xl mx-auto pb-28 px-8 relative space-y-20">
        
        <div className="flex flex-col mb-14">
          <h2 className="text-xs font-mono text-slate-400 uppercase tracking-[0.25em] flex items-center gap-3.5 mb-4">
            <span className="h-5 w-[3px] bg-rose-500 rounded-full"></span>
            <ClipboardList size={15} className="text-rose-500" /> Executive Research Framework
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Analisis SWOT Komparatif <span className="text-rose-500">Konteks Indonesia</span>
          </h3>
        </div>

        {/* --- 1. MATRIKS SWOT: SDG 3 (KEHIDUPAN SEHAT & SEJAHTERA) --- */}
        <div className="group/swot3 relative bg-gradient-to-br from-slate-950 via-[#0a0e1a] to-[#0d1221] rounded-3xl p-10 md:p-14 border border-slate-900 shadow-2xl">
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-rose-500/10 border border-rose-500/20 text-[10px] font-mono font-bold px-4 py-1.5 w-fit rounded-lg text-rose-400 flex items-center gap-2 tracking-[0.2em] uppercase">
                <Heart size={12} className="fill-rose-500" /> SDG 3 Matriks Kesehatan Kerja
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* STRENGTHS - SDG 3 */}
              <div className="group/s3 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-emerald-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500&auto=format&fit=crop" alt="Health Technology Integration" className="w-full h-full object-cover group-hover/s3:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg"><ShieldCheck size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Kekuatan (S)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Sistem deteksi pencegahan kelelahan (CVS) dan dehidrasi dikembangkan berbasis web ringan sehingga ramah performa perangkat.</p>
                </div>
              </div>

              {/* WEAKNESSES - SDG 3 */}
              <div className="group/w3 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-amber-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1551846044-c464ef2fb1ab?q=80&w=500&auto=format&fit=crop" alt="User Compliance Challenge" className="w-full h-full object-cover group-hover/w3:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg"><AlertTriangle size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Kelemahan (W)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Sangat bergantung pada kepatuhan personal individu pengguna untuk mematuhi instruksi jeda istirahat berkala.</p>
                </div>
              </div>

              {/* OPPORTUNITIES - SDG 3 */}
              <div className="group/o3 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-blue-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500&auto=format&fit=crop" alt="National Health Campaign" className="w-full h-full object-cover group-hover/o3:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"><TrendingUp size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Peluang (O)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Kementerian Kesehatan RI gencar mengampanyekan standarisasi ergonomi fisik bagi angkatan kerja digital nasional.</p>
                </div>
              </div>

              {/* THREATS - SDG 3 */}
              <div className="group/t3 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-rose-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500&auto=format&fit=crop" alt="Overwork Hustle Culture" className="w-full h-full object-cover group-hover/t3:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg"><Zap size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Ancaman (T)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Budaya kerja lembur ekstrem (*hustle culture*) di industri tech startup sering memicu pengabaian sinyal kesehatan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. MATRIKS SWOT: SDG 4 (PENDIDIKAN BERKUALITAS) --- */}
        <div className="group/swot4 relative bg-gradient-to-br from-slate-950 via-[#0a0e1a] to-[#0d1221] rounded-3xl p-10 md:p-14 border border-slate-900 shadow-2xl">
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold px-4 py-1.5 w-fit rounded-lg text-white flex items-center gap-2 tracking-[0.2em] uppercase">
                <GraduationCap size={14} className="text-white" /> SDG 4 Matriks Edukasi Vokasi
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* STRENGTHS - SDG 4 */}
              <div className="group/s4 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-emerald-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop" alt="Digital Modules Learning" className="w-full h-full object-cover group-hover/s4:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg"><ShieldCheck size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Kekuatan (S)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Platform menyediakan materi modul penunjang literasi IT fungsional yang inklusif dan mudah diakses lintas institusi.</p>
                </div>
              </div>

              {/* WEAKNESSES - SDG 4 */}
              <div className="group/w4 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-amber-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" alt="Visual Assets Limitations" className="w-full h-full object-cover group-hover/w4:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg"><AlertTriangle size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Kelemahan (W)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Keterbatasan variasi aset visual interaktif interdisipliner tingkat lanjut karena limitasi resource internal.</p>
                </div>
              </div>

              {/* OPPORTUNITIES - SDG 4 */}
              <div className="group/o4 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-blue-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop" alt="Government Education Acceleration" className="w-full h-full object-cover group-hover/o4:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"><TrendingUp size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Peluang (O)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Adanya program akselerasi transformasi digital dari Kemendikbudristek untuk perluasan modul ajar STEM fungsional.</p>
                </div>
              </div>

              {/* THREATS - SDG 4 */}
              <div className="group/t4 bg-slate-950/40 p-5 rounded-2xl border border-slate-900 shadow-xl hover:border-rose-500/25 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-full h-36 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500&auto=format&fit=crop" alt="Digital Infrastructure Gap" className="w-full h-full object-cover group-hover/t4:scale-105 transition-transform duration-500 filter brightness-90" />
                  </div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg"><Zap size={16} /></div>
                    <h4 className="text-sm font-black text-white tracking-tight">Ancaman (T)</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">Disparitas kualitas infrastruktur jaringan internet stabil yang masif antara wilayah perkotaan dengan daerah 3T.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Referensi Akademik */}
      <section className="max-w-7xl mx-auto pb-32 px-8 relative">
        <div className="bg-[#0b0f19] p-8 rounded-3xl border border-slate-900 shadow-inner">
          <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-6">Referensi Akademik (APA Style)</h4>
          <div className="text-xs text-slate-400 space-y-4 font-light leading-relaxed">
            <p className="pl-6 -indent-6">Badan Pusat Statistik. (2024). <em>Statistik Pemuda Indonesia 2024</em>. Jakarta: Badan Pusat Statistik.</p>
            <p className="pl-6 -indent-6">Kementerian Kesehatan RI. (2024). <em>Laporan Pemantauan Profil Kesehatan Kerja Digital dan Ergonomi Nasional</em>. Jakarta: Direktorat K3 Kemenkes RI.</p>
            <p className="pl-6 -indent-6">Kementerian PPN/Bappenas. (2023). <em>Laporan Evaluasi Rencana Aksi Nasional Pilar Pembangunan Sosial SDGs</em>. Jakarta: Sekretariat Nasional SDGs Indonesia.</p>
            <p className="pl-6 -indent-6">Kementerian PPN/Bappenas. (2024). <em>Matriks Indikator Pendidikan Berkualitas dan Akselerasi Keterampilan Kerja Menuju 2030</em>. Jakarta: Sekretariat Nasional SDGs Indonesia.</p>
            <p className="pl-6 -indent-6">Pusat Data dan Teknologi Informasi Kemendikbudristek. (2023). <em>Analisis Capaian Indikator Pendidikan Menengah dan Kejuruan Indonesia</em>. Jakarta: Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Dashboard;