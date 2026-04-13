import React from 'react';
import { Lightbulb, Zap, Rocket, BrainCircuit, Sparkles, ChevronRight } from 'lucide-react';

const Ideation = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg text-red-600">
              <Lightbulb size={20} />
            </div>
            <span className="text-red-600 font-mono text-xs uppercase tracking-[0.3em] font-bold">Phase 02: Ideation & Concept</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
            Strategic <br /> <span className="text-slate-200">Solutions.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
            Mentransformasi tantangan pendidikan menjadi ide konkret melalui pendekatan desain yang berpusat pada pengguna dan efisiensi teknologi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* How Might We Card */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-200">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl group-hover:bg-red-600/40 transition-all duration-700" />
              
              <div className="relative z-10">
                <p className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">The Challenge Statement</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 group-hover:text-red-50 transition-colors">
                  "Bagaimana kita bisa menyediakan simulasi STEM yang interaktif tanpa memerlukan perangkat high-end?"
                </h2>
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                  <BrainCircuit size={32} strokeWidth={1} />
                  <p className="text-sm font-light italic">Brainstorming process based on SDG 4.4 Target.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Path */}
          <div className="lg:col-span-7 space-y-6">
            {[
              { 
                title: "Lightweight Web Module", 
                desc: "Arsitektur web yang dioptimasi untuk render cepat pada perangkat dengan spesifikasi rendah dan koneksi internet terbatas.",
                icon: <Zap className="text-orange-500" />,
                tag: "TECHNOLOGY"
              },
              { 
                title: "Peer-to-Peer Learning", 
                desc: "Sistem distribusi materi pendidikan terdesentralisasi untuk memudahkan akses resource antar institusi pendidikan.",
                icon: <Sparkles className="text-emerald-500" />,
                tag: "COMMUNITY"
              },
              { 
                title: "AI-Powered Mentor", 
                desc: "Integrasi asisten virtual berbasis Large Language Model untuk membantu bimbingan teknis secara personal dan real-time.",
                icon: <Rocket className="text-blue-500" />,
                tag: "INTELLIGENCE"
              }
            ].map((idea, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-slate-100 hover:border-red-100 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-500">
                      {idea.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-black text-slate-400 group-hover:text-red-500 transition-colors">
                        0{idx + 1} — {idea.tag}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:translate-x-1 transition-transform">
                        {idea.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed text-sm max-w-md">
                        {idea.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Idea Footer */}
        <div className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Proposed Final Concept</h3>
            <p className="text-slate-500 font-light">
              Membangun platform "EduStem" yang menggabungkan efisiensi web dengan kecerdasan buatan untuk menciptakan ekosistem belajar yang adaptif.
            </p>
          </div>
          <button className="px-10 py-4 bg-red-600 text-white rounded-full font-bold text-xs tracking-widest hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-200">
            VIEW PROTOTYPE
          </button>
        </div>

      </div>
    </div>
  );
};

export default Ideation;