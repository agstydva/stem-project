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
    <div className="min-h-screen bg-white text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-48 pb-36 px-6 border-b border-slate-100 w-full min-h-[700px] flex items-center overflow-hidden group/hero">
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

        <div className="absolute inset-0 z-30 flex items-center justify-between px-6 pointer-events-none">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/20 hover:bg-white/90 text-slate-800 backdrop-blur-md transition-all duration-300 pointer-events-auto opacity-0 group-hover/hero:opacity-100 -translate-x-4 group-hover/hero:translate-x-0 shadow-lg">
            <ChevronLeft size={32} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/20 hover:bg-white/90 text-slate-800 backdrop-blur-md transition-all duration-300 pointer-events-auto opacity-0 group-hover/hero:opacity-100 translate-x-4 group-hover/hero:translate-x-0 shadow-lg">
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-red-600' : 'w-4 bg-slate-300 hover:bg-slate-400'}`} />
          ))}
        </div>

        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/5 blur-[120px] pointer-events-none z-10" />
        
        <div className="relative max-w-7xl mx-auto z-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-red-500 animate-pulse"></span>
              <span className="text-red-700 font-mono text-[11px] uppercase tracking-[0.5em] font-black">UNJ STEM Initiative 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-12">
              Digital Wellness <br /> 
              <span className="text-red-600">& Education.</span>
            </h1>
            <div className="relative group max-w-2xl">
              <div className="absolute -left-8 top-4 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-light tracking-tight">
                Membangun <span className="font-bold text-slate-950">masa depan karir digital</span> yang terampil, sehat, dan produktif melalui <span className="text-red-600 font-bold italic">integrasi inovatif teknologi STEM</span> secara berkelanjutan.
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
              <Globe2 size={16} className="text-red-500 animate-spin-slow" /> 17 Global Goals Overview
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

          {/* About SDG Section */}
          <div className="mt-20 border-t border-slate-100 pt-16 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Globe2 size={16} /></div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest font-black">INTRODUCTION</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
                About SDG (Sustainable Development Goals)
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                Sustainable Development Goals (SDGs) atau Tujuan Pembangunan Berkelanjutan adalah 17 target global yang diinisiasi oleh Perserikatan Bangsa-Bangsa (PBB) sebagai cetak biru bersama untuk perdamaian dan kemakmuran bagi manusia dan planet bumi, baik saat ini maupun di masa depan. Diadopsi pada tahun 2015, SDGs menyerukan aksi mendesak oleh semua negara untuk mengatasi kemiskinan, kesenjangan sosial, perubahan iklim, serta meningkatkan kesehatan dan pendidikan.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                Dalam riset ini, fokus diformulasikan secara khusus pada interaksi antara <strong>SDG 3: Kehidupan Sehat dan Sejahtera (Target 3.4)</strong> serta <strong>SDG 4: Pendidikan Berkualitas (Target 4.4)</strong> untuk merumuskan integrasi STEM dalam penjaminan kenyamanan fisik, keseimbangan mental, dan kesiapan karir tenaga kerja digital Indonesia.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-64 h-64">
                {/* Neutral subtle glow underlay */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-slate-500/5 to-slate-600/5 rounded-[2.5rem] opacity-35 blur-xl transition-all duration-500 group-hover:opacity-60" />
                {/* Premium neutral card container */}
                <div className="relative w-full h-full bg-slate-50/70 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:shadow-xl group-hover:border-slate-200 group-hover:-translate-y-1 overflow-hidden">
                  <img 
                    src="/images/goals-sdgs.png" 
                    alt="SDGs Global Goals Logo" 
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
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
                  <img src="/images/unj2.jpeg" alt="Kampus UNJ" className="w-full h-64 object-cover rounded-[1.5rem] mb-6 shadow-inner group-hover:scale-105 transition-transform duration-700" />
                  <div className="px-3 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-red-100 text-red-600 rounded-xl"><BarChart3 size={20} /></div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-none">
                        Statistik <span className="text-red-600">Pendidikan</span>
                      </h2>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium italic">"Data fundamental yang dihimpun dari lingkungan Kampus Hijau sebagai acuan pengembangan framework STEM berkelanjutan."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { 
                  label: "Literasi Digital", 
                  value: "3.54", 
                  color: "bg-blue-600", 
                  icon: <Lightbulb size={20}/>,
                  desc: "Skala 1-5. Data Survei Indeks Literasi Digital Nasional Kemenkominfo, mengukur kecakapan digital pilar dasar."
                },
                { 
                  label: "Angka Partisipasi", 
                  value: "95.9%", 
                  color: "bg-red-600", 
                  icon: <Users size={20}/>,
                  desc: "Berdasarkan rilis BPS 2023 mengenai Angka Partisipasi Sekolah (APS) jenjang pendidikan menengah."
                },
                { 
                  label: "Disparitas Desa", 
                  value: "18.2%", 
                  color: "bg-emerald-600", 
                  icon: <Globe2 size={20}/>,
                  desc: "Selisih aksesibilitas & fasilitas penunjang pendidikan digital daerah pelosok versus perkotaan (Bappenas)."
                },
                { 
                  label: "STEM Interest", 
                  value: "42%", 
                  color: "bg-orange-600", 
                  icon: <PenTool size={20}/>,
                  desc: "Survei minat & ketertarikan mahasiswa Kampus Hijau UNJ dalam ekosistem karir bidang sains & teknologi."
                }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-red-100 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className={`w-11 h-11 ${stat.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-all`}>{stat.icon}</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter mb-4">{stat.value}</p>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed border-t border-slate-100/50 pt-4 mt-auto">{stat.desc}</p>
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
              <div className="bg-red-600 text-[10px] font-mono font-black px-4 py-1.5 w-fit rounded-full mb-6 tracking-[0.2em] text-white shadow-xl shadow-red-200/50">TARGET SOSIAL 4.4 & 3.4</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight text-slate-950 group-hover:text-red-600 transition-colors">Keterampilan Digital & Esensi Kesehatan Mental-Fisik.</h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-md font-medium">Mendorong pemenuhan target kompetensi digital kerja (SDG 4.4) sekaligus mengintervensi pencegahan stres kognitif dan kelelahan ergonomis layar (SDG 3.4) di Indonesia.</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-red-200/70 group-hover:rotate-6 transition-transform leading-none">3-4</div>
                <p className="font-bold text-lg tracking-tight text-slate-950 leading-none">Dual SDG Focus Integration</p>
              </div>
              <ul className="space-y-4">
                {["Ergonomic Digital Literacy", "Vocational Health & Tech Training", "Mental-Wellbeing Tracker"].map((item, i) => (
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

      {/* Why SDG 4 & Target 2030 Cards */}
      <section className="max-w-7xl mx-auto pb-24 px-6 relative">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group/why bg-white p-6 md:p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-100 hover:-translate-y-2 transition-all duration-500">
            <div>
              <div className="w-full h-52 bg-slate-100 rounded-[2rem] mb-6 overflow-hidden border border-slate-100 shadow-inner relative">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Urgensi SDG 4" className="w-full h-full object-cover group-hover/why:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-red-600 text-white font-mono text-[9px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">Global Urgency</div>
              </div>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-4">Mengapa <span className="text-red-600">SDG 4 & SDG 3</span> Beriringan?</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">Pendidikan berkualitas tidak akan terserap maksimal jika kesehatan fisik dan mental pelajar diabaikan. Kelelahan mata (CVS) dan dehidrasi akibat duduk terlalu lama adalah penghambat tersembunyi produktivitas generasi muda Indonesia.</p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">Proyek ini mentransformasi edukasi IT dengan menyuntikkan kesadaran ergonomi harian demi mempersiapkan angkatan kerja yang unggul sekaligus sehat sejahtera.</p>
            </div>
          </div>

          <div className="group/target bg-gradient-to-br from-slate-50 via-white to-red-50/10 p-6 md:p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-100 hover:-translate-y-2 transition-all duration-500">
            <div>
              <div className="w-full h-52 bg-slate-100 rounded-[2rem] mb-6 overflow-hidden border border-slate-100 shadow-inner relative">
                <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80" alt="Target SDGs 2030" className="w-full h-full object-cover group-hover/target:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-slate-950 text-white font-mono text-[9px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">Agenda Milestones</div>
              </div>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-6">Target Utama <span className="text-red-600">SDGs Indonesia</span></h3>
              <div className="space-y-4 text-sm text-slate-600 font-normal">
                <div className="flex gap-4 items-start">
                  <span className="font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-lg text-xs">3.4</span>
                  <p className="leading-relaxed">Mereduksi sepertiga dari kematian prematur akibat penyakit tidak menular melalui intervensi pencegahan serta mempromosikan kesehatan mental dan kesejahteraan.</p>
                </div>
                <div className="flex gap-4 items-start border-t border-slate-100 pt-3">
                  <span className="font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-lg text-xs">4.4</span>
                  <p className="leading-relaxed font-semibold text-slate-950">Meningkatkan jumlah remaja dan orang dewasa secara signifikan yang memiliki keterampilan teknis mumpuni untuk pekerjaan layak serta kewirausahaan digital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Data Metrics */}
      <section className="max-w-7xl mx-auto pb-24 px-6 relative">
        <div className="border-t border-slate-100 pt-16">
          <div className="flex flex-col mb-12">
            <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-3 relative mb-3">
              <span className="absolute -left-4 top-0 h-full w-1 bg-red-500 rounded-full"></span>
              <BarChart3 size={16} className="text-red-500" /> SDG 3 & 4 National Data Metrics
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Capaian Indikator SDGs Nasional</h3>
          </div>

          {/* 5 Fakta Utama Pendidikan */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-red-600 rounded-full" />
              <h4 className="text-2xl font-black text-slate-900">5 Fakta Utama Pendidikan (SDG 4.4)</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { no: "ED-01", url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80", title: "Tingginya Angka Pengangguran Lulusan Vokasi", desc: "Lulusan SMK dan Diploma masih menyumbang Tingkat Pengangguran Terbuka (TPT) yang relatif tinggi, menunjukkan adanya ketidaksesuaian antara kompetensi lulusan dan kebutuhan industri.", source: "(Badan Pusat Statistik, 2024)" },
                { no: "ED-02", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80", title: "Kesenjangan Literasi Digital di Daerah 3T", desc: "Keterbatasan akses internet dan literasi digital di daerah Tertinggal, Terdepan, dan Terluar (3T) masih menghambat pemerataan keterampilan digital.", source: "(Kemendikbudristek, 2023)" },
                { no: "ED-03", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80", title: "Perluasan Akses Pendidikan Tinggi melalui KIP Kuliah", desc: "Program KIP Kuliah membantu mahasiswa dari keluarga kurang mampu memperoleh pendidikan tinggi dan keterampilan yang relevan dengan dunia kerja.", source: "(Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, 2024)" },
                { no: "ED-04", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80", title: "Pertumbuhan EdTech dan Pembelajaran Daring", desc: "Meningkatnya penggunaan platform EdTech and kursus daring memberikan akses yang lebih luas bagi masyarakat untuk meningkatkan keterampilan digital dan vokasional.", source: "(Kemendikbudristek, 2023; UNESCO, 2023)" },
                { no: "ED-05", url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", title: "Kesenjangan Keterampilan dan Kebutuhan Industri", desc: "Transformasi digital meningkatkan permintaan terhadap keterampilan digital, analitis, dan teknologi, sehingga pengembangan keterampilan (upskilling dan reskilling) menjadi semakin penting bagi tenaga kerja Indonesia.", source: "(World Economic Forum, 2025; ILO, 2024)" }
              ].map((item, idx) => (
                <div key={idx} className="group/card bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-100 hover:-translate-y-2 transition-all duration-500">
                  <div>
                    <div className="w-full h-32 bg-slate-100 rounded-[1.2rem] mb-4 overflow-hidden border border-slate-50 shadow-inner">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-red-600 mb-1">FACT {item.no}</div>
                    <h5 className="text-sm font-black text-slate-950 tracking-tight mb-2 leading-tight group-hover/card:text-red-600 transition-colors">{item.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 block mt-4 italic">{item.source}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Fakta Utama Pekerja */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-slate-900 rounded-full" />
              <h4 className="text-2xl font-black text-slate-900">5 Fakta Utama Pekerja (SDG 3.4)</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { no: "WK-01", url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80", title: "Tingginya Angka Penyakit Tidak Menular (PTM)", desc: "Sekiritar 73% kematian di Indonesia disebabkan oleh penyakit tidak menular seperti penyakit jantung, stroke, diabetes, dan kanker, sehingga upaya pencegahan menjadi fokus utama SDG 3.4.", source: "(Kementerian Kesehatan RI, 2023; WHO, 2023)" },
                { no: "WK-02", url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80", title: "Meningkatnya Tantangan Kesehatan Mental", desc: "Gangguan kesehatan mental pada usia produktif, termasuk mahasiswa dan pekerja muda, semakin meningkat dan berdampak pada produktivitas serta kualitas hidup.", source: "(Kementerian Kesehatan RI, 2023; WHO, 2022)" },
                { no: "WK-03", url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80", title: "Gaya Hidup Sedenter di Era Digital", desc: "Durasi duduk yang lama dan kurangnya aktivitas fisik akibat pekerjaan berbasis komputer meningkatkan risiko penyakit tidak menular dan gangguan muskuloskeletal.", source: "(WHO, 2022)" },
                { no: "WK-04", url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80", title: "Penguatan Program GERMAS", desc: "Pemerintah Indonesia terus mendorong Gerakan Masyarakat Hidup Sehat (GERMAS) untuk meningkatkan aktivitas fisik, pola makan sehat, serta pencegahan penyakit melalui perubahan perilaku masyarakat.", source: "(Kementerian Kesehatan RI, 2017)" },
                { no: "WK-05", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80", title: "Tantangan Kesehatan Pekerja Digital", desc: "Berdasarkan penelitian lapangan, 77,2% responden mengalami stres kerja sedang–tinggi, 77,3% mengalami keluhan fisik, and 72,7% mendukung adanya dashboard pengingat kesehatan sebagai solusi preventif.", source: "(Hasil Survei Kelompok 8, 2026)" }
              ].map((item, idx) => (
                <div key={idx} className="group/card bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-100 hover:-translate-y-2 transition-all duration-500">
                  <div>
                    <div className="w-full h-32 bg-slate-100 rounded-[1.2rem] mb-4 overflow-hidden border border-slate-50 shadow-inner">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-red-600 mb-1">FACT {item.no}</div>
                    <h5 className="text-sm font-black text-slate-950 tracking-tight mb-2 leading-tight group-hover/card:text-red-600 transition-colors">{item.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 block mt-4 italic">{item.source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referensi Akademik */}
      <section className="max-w-7xl mx-auto pb-32 px-6 relative">
        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
          <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-6">Referensi Akademik</h4>
          <div className="text-xs text-slate-600 space-y-4 font-normal leading-relaxed">
            <p className="pl-6 -indent-6">Badan Pusat Statistik. (2024). <em>Statistik Pemuda Indonesia 2024: Tingkat Pengangguran Terbuka</em>. Jakarta: Badan Pusat Statistik.</p>
            <p className="pl-6 -indent-6">International Labour Organization. (2024). <em>Global Employment Trends for Youth 2024: Technology Integration and Future Skills</em>. Geneva: ILO.</p>
            <p className="pl-6 -indent-6">Kelompok 8 Riset STEM UNJ. (2026). <em>Survei Empati Penjaminan Kesehatan Fisik & Mental Pekerja di Era Digital</em>. Jakarta: Universitas Negeri Jakarta.</p>
            <p className="pl-6 -indent-6">Kementerian Kesehatan RI. (2023). <em>Laporan Nasional Riset Kesehatan Dasar (Riskesdas) 2023</em>. Jakarta: Badan Kebijakan Pembangunan Kesehatan Kemenkes RI.</p>
            <p className="pl-6 -indent-6">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2023). <em>Peta Jalan Literasi Digital Nasional & Akses Pendidikan di Daerah 3T</em>. Jakarta: Pusdatin Kemendikbudristek.</p>
            <p className="pl-6 -indent-6">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2024). <em>Laporan Evaluasi Nasional Program Kartu Indonesia Pintar (KIP) Kuliah</em>. Jakarta: Puslapdik Kemendikbudristek.</p>
            <p className="pl-6 -indent-6">UNESCO. (2023). <em>Technology in Education: A Tool on Whose Terms? Global Education Monitoring Report</em>. Paris: UNESCO.</p>
            <p className="pl-6 -indent-6">World Economic Forum. (2025). <em>The Future of Jobs Report 2025</em>. Geneva: World Economic Forum.</p>
            <p className="pl-6 -indent-6">World Health Organization. (2022). <em>Physical Activity and Sedentary Behaviour in Digital Workspaces: Guidance</em>. Geneva: World Health Organization.</p>
            <p className="pl-6 -indent-6">World Health Organization. (2023). <em>Noncommunicable Diseases Country Profiles: Indonesia 2023</em>. Geneva: World Health Organization.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Dashboard;