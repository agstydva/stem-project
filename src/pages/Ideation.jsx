import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import komponen Navbar Anda di sini (sesuaikan path foldernya)
import Navbar from '../components/Navbar'; 
import { 
  Lightbulb, 
  Zap, 
  Rocket, 
  BrainCircuit, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';

const Ideation = () => {
  return (
    <div className="min-h-screen bg-white text-slate-700 pb-20 selection:bg-red-100 selection:text-red-600">
      
      {/* 2. Panggil komponen Navbar di sini menggantikan nav lama */}
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

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* How Might We Card - Light Version */}
          {/* How Might We Card - Light Version */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-red-100 relative overflow-hidden group">
              <Sparkles className="absolute -bottom-4 -right-4 text-white/10 group-hover:rotate-12 transition-transform duration-700" size={160} />
              
              <div className="relative z-10">
                
                {/* --- AWAL GAMBAR --- */}
                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
                    alt="Ideation Concept Placeholder" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* --- AKHIRGAMBAR --- */}

                <p className="text-red-100 font-mono text-[9px] uppercase tracking-[0.3em] mb-6 font-bold opacity-80">The Challenge Statement</p>
                <h2 className="text-2xl md:text-3xl font-black leading-tight mb-8">
                  "Bagaimana kita bisa menyediakan simulasi STEM yang interaktif tanpa memerlukan perangkat high-end?"
                </h2>
                <div className="flex items-center gap-4 text-red-100/80">
                  <BrainCircuit size={28} strokeWidth={1.5} />
                  <p className="text-xs font-medium italic">Brainstorming process based on SDG 4.4 Target.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Path */}
          <div className="lg:col-span-7 space-y-4">
            {[
              { 
                title: "Lightweight Web Module", 
                desc: "Arsitektur web yang dioptimasi untuk render cepat pada perangkat dengan spesifikasi rendah dan koneksi internet terbatas.",
                icon: <Zap size={20} />,
                color: "text-orange-500",
                bg: "bg-orange-50",
                tag: "TECHNOLOGY"
              },
              { 
                title: "Peer-to-Peer Learning", 
                desc: "Sistem distribusi materi pendidikan terdesentralisasi untuk memudahkan akses resource antar institusi pendidikan.",
                icon: <Sparkles size={20} />,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
                tag: "COMMUNITY"
              },
              { 
                title: "AI-Powered Mentor", 
                desc: "Integrasi asisten virtual berbasis Large Language Model untuk membantu bimbingan teknis secara personal dan real-time.",
                icon: <Rocket size={20} />,
                color: "text-blue-500",
                bg: "bg-blue-50",
                tag: "INTELLIGENCE"
              }
            ].map((idea, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl hover:shadow-red-500/5 hover:border-red-100 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className={`w-12 h-12 ${idea.bg} ${idea.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      {idea.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-slate-400 group-hover:text-red-500 transition-colors tracking-widest uppercase">
                        Idea 0{idx + 1} — {idea.tag}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                        {idea.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed text-sm max-w-md font-medium">
                        {idea.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Idea Footer - Soft Version */}
        <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Proposed Final Concept</h3>
            <p className="text-slate-500 font-medium text-sm">
              Membangun platform "EduStem" yang menggabungkan efisiensi web dengan kecerdasan buatan untuk menciptakan ekosistem belajar yang adaptif.
            </p>
          </div>
          <button className="px-8 py-4 bg-red-500 text-white rounded-full font-black text-[10px] tracking-[0.2em] hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-100 uppercase">
            View Prototype
          </button>
        </div>

      </div>
    </div>
  );
};

export default Ideation;