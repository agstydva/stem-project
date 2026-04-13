import React from 'react';
import { Search, Target, AlertCircle, TrendingDown, Users2 } from 'lucide-react';

const Empathy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg text-red-600">
              <Search size={20} />
            </div>
            <span className="text-red-600 font-mono text-xs uppercase tracking-[0.3em] font-bold">Phase 01: Empathy & Research</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
            Defining <br /> <span className="text-slate-200">the Barriers.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
            Menganalisis tantangan nyata dalam akses pendidikan STEM melalui observasi mendalam terhadap kesenjangan digital di Indonesia.
          </p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid md:grid-cols-12 gap-6">
          
          {/* Main Research Card */}
          <div className="md:col-span-8 bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-slate-900 font-black text-2xl mb-6 flex items-center gap-3">
                <AlertCircle className="text-red-600" /> Problem Statement
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-10 italic">
                "Meskipun angka partisipasi sekolah meningkat, kualitas literasi digital dan akses terhadap materi STEM di daerah periferi masih menunjukkan disparitas yang signifikan sebesar <span className="text-red-600 font-bold">18.2%</span>."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                  <TrendingDown className="text-red-500 mb-4" size={24} />
                  <p className="text-4xl font-black text-slate-900 mb-1">PISA</p>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Skor Literasi Nasional</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                  <Target className="text-emerald-500 mb-4" size={24} />
                  <p className="text-4xl font-black text-slate-900 mb-1">2030</p>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Deadline Target SDG 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Persona Card */}
          <div className="md:col-span-4 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-slate-200 group">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                  <Users2 size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl leading-tight">User Persona</h4>
                  <p className="text-red-500 text-xs font-mono uppercase tracking-widest">Target Audience</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 italic text-slate-300 leading-relaxed">
                  "Saya ingin belajar teknologi cloud, tapi sekolah saya hanya punya komputer lama dan internet yang terbatas."
                </div>
                
                <div className="pt-6">
                  <p className="text-[10px] font-mono uppercase text-red-500 tracking-[0.2em] mb-4">Pain Points</p>
                  <ul className="space-y-3">
                    {['Terbatasnya Hardware', 'Kurangnya Mentor Ahli', 'Biaya Kursus Tinggi'].map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="w-1 h-1 bg-red-600 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5">
              <p className="text-xs text-slate-500 italic font-mono uppercase tracking-tighter">Research ID: EDU-2026-X</p>
            </div>
          </div>

        </div>

        {/* Secondary Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-[0.2em]">Context</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Penelitian ini difokuskan pada siswa SMK di wilayah luar Jawa yang memiliki potensi besar namun terhambat oleh keterbatasan infrastruktur laboratorium digital.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-[0.2em]">Methodology</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Menggunakan metode pengumpulan data sekunder melalui laporan BPS 2023 dan studi literatur mengenai implementasi STEM di negara berkembang.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-[0.2em]">Objective</h4>
            <p className="text-slate-500 text-sm leading-relaxed text-red-600 font-medium">
              Menghasilkan platform pembelajaran yang ringan (lightweight) namun mampu memberikan pengalaman simulasi teknis yang mendalam.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Empathy;