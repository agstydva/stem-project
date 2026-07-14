import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  ArrowLeft, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Globe, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Education = () => {
  const targets = [
    "Menjamin akses pendidikan dasar dan menengah gratis.",
    "Meningkatkan keterampilan teknis dan kejuruan untuk pekerjaan layak.",
    "Menghapus disparitas gender dalam akses pendidikan.",
    "Membangun fasilitas pendidikan yang inklusif dan aman."
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 pb-20 selection:bg-red-100 selection:text-red-600">
      
      {/* Premium Navbar with Interactive Back Button */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link 
            to="/" 
            className="group relative flex items-center gap-3 py-2 px-5 -ml-5 rounded-full transition-all duration-300 overflow-hidden active:scale-95"
          >
            {/* Sliding Background Effect on Hover */}
            <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            
            <div className="relative z-10 flex items-center gap-3">
              {/* Animated Icon Circle */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 group-hover:bg-red-500 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                <ArrowLeft 
                  size={16} 
                  className="text-slate-500 group-hover:text-white transition-all duration-300 group-hover:-translate-x-1" 
                />
              </div>
              
              {/* Text Link */}
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                Back to Dashboard
              </span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Adjusted Hero Section - Balanced Typography */}
      <header className="pt-32 pb-16 px-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-white to-white">
        <ScrollReveal variant="fade-right" duration={800} className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-red-500 text-white rounded-xl shadow-lg shadow-red-100">
              <BookOpen size={20} />
            </div>
            <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase">Goal 04 Overview</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Quality <span className="text-red-500">Education.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Membangun fondasi masa depan melalui akses pendidikan yang <span className="text-slate-800 font-bold">inklusif</span> dan merata dengan dukungan <span className="text-red-500 font-bold">ekosistem digital</span>.
          </p>
        </ScrollReveal>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        
        {/* Left: Interactive Target Cards */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Focus Targets</h2>
            <div className="h-1 w-8 bg-red-100 rounded-full"></div>
          </div>
          
          <div className="grid gap-3">
            {targets.map((target, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 80} duration={600}>
                <div className="group p-6 rounded-3xl border border-slate-100 bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500">
                  <div className="flex gap-4 items-start">
                    <div className="p-1.5 rounded-lg bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-base font-bold text-slate-600 leading-snug group-hover:text-slate-900 transition-colors">
                      {target}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: Soft Styled Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Mission Card - Gradient Softness */}
          <ScrollReveal variant="fade-left" duration={800}>
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-red-100 relative overflow-hidden group">
              <Sparkles className="absolute top-6 right-6 text-red-300/20 group-hover:rotate-12 transition-transform duration-700" size={48} />
              <div className="relative z-10">
                <GraduationCap size={40} className="mb-6 text-red-100" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Misi UNJ STEM</h3>
                <p className="text-red-50 leading-relaxed mb-8 text-base font-medium opacity-90">
                  Akselerasi adaptasi kurikulum berbasis teknologi untuk mencetak talenta digital yang kompetitif di Kampus Hijau.
                </p>
                <div className="flex items-center justify-between p-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div>
                    <p className="text-2xl font-black text-white leading-none">2026</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-70">Milestone</p>
                  </div>
                  <button className="bg-white text-red-600 px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-50 transition-colors shadow-sm">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Clean Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal variant="zoom-in" delay={100} duration={600} className="h-full">
              <div className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all text-center group h-full">
                <Users size={20} className="mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-black text-slate-900 mb-1">98%</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Inklusivitas</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="zoom-in" delay={200} duration={600} className="h-full">
              <div className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all text-center group h-full">
                <Globe size={20} className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-black text-slate-900 mb-1">4.0</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Digital Index</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* Soft Footer Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <ScrollReveal variant="zoom-in" duration={800}>
          <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                Ayo Wujudkan <span className="text-red-500 italic text-2xl">Pendidikan Berkualitas.</span>
              </h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto font-medium text-sm leading-relaxed">
                Bagian dari inisiatif UNJ STEM untuk masa depan Indonesia yang lebih cerdas dan inklusif.
              </p>
              <button className="px-8 py-4 bg-red-500 text-white rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-red-600 transition-all shadow-lg shadow-red-100 hover:-translate-y-1 active:scale-95">
                Bergabung Sekarang
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Education;