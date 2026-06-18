import React from 'react';
// 1. Mengganti JournalSignet dengan BookOpen yang valid di lucide-react
import { BookOpen, Award, RefreshCw, Star, Heart, CheckCircle } from 'lucide-react';

const Reflection = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Header Halaman */}
      <header className="relative pt-48 pb-20 px-6 border-b border-slate-100 w-full flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/5 blur-[120px] pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto z-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-red-500"></span>
              <span className="text-red-700 font-mono text-[11px] uppercase tracking-[0.5em] font-black">STEM Design Thinking Stage</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-8">
              Retrospective & <br />
              <span className="text-red-600">Reflection.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-light tracking-tight max-w-2xl">
              Mengevaluasi proses belajar, tantangan teknis, dan dampak sosial proyek terhadap target SDG 4.4 dalam menciptakan ekosistem edukasi digital yang sehat.
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: Narasi Refleksi & Visual */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="group relative bg-slate-50 border border-slate-100 p-4 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500">
              <div className="w-full h-[450px] rounded-[1.8rem] overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team collaboration and presentation reflection" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-500 text-white rounded-xl shadow-lg shadow-red-100">
                <RefreshCw size={20} />
              </div>
              <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase">Key Takeaways</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Menyeimbangkan Teknis dengan <span className="text-red-600">Empati</span>
            </h2>
            <p className="text-slate-600 leading-relaxed font-normal">
              Melalui proyek STEM ini, kami menyadari bahwa membangun perangkat lunak untuk edukasi bukan hanya tentang baris kode yang efisien, melainkan bagaimana produk tersebut peka terhadap batas fisik dan psikologis penggunanya.
            </p>
            <p className="text-slate-600 leading-relaxed font-normal">
              Integrasi kalkulator hidrasi dan jeda mikro mengajarkan kami esensi interdisipliner—menggabungkan ilmu kesehatan kerja (K3) dengan rekayasa teknologi web.
            </p>
          </div>
        </div>

        {/* Section 2: Matrik Dampak Pembelajaran */}
        <div className="flex flex-col mb-16 border-b border-slate-100 pb-8">
          <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase mb-2">Self-Assessment</span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Poin Transformasi <span className="text-red-600">Pembelajaran</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star size={24} />,
              title: "Technical Growth",
              tag: "SKILL ACQUISITION",
              desc: "Meningkatkan pemahaman mendalam tentang arsitektur front-end yang ringan, pengelolaan state penunjuk waktu yang akurat, serta optimasi performa web rendering.",
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop"
            },
            {
              icon: <Heart size={24} />,
              title: "Social Awareness",
              tag: "SDG 4 TARGET ALIGNMENT",
              desc: "Memahami pentingnya inklusivitas digital; memastikan aplikasi tetap berjalan optimal pada perangkat berspesifikasi rendah demi kesetaraan akses pendidikan.",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
            },
            {
              icon: <Award size={24} />,
              title: "Team Collaboration",
              tag: "DESIGN THINKING VALUES",
              desc: "Mengasah proses diskusi kritis selama tahapan riset empati hingga penyusunan purwarupa, menguji sudut pandang yang berbeda demi satu tujuan solusi.",
              image: "https://images.unsplash.com/photo-1531535934202-f0d44431dfbb?q=80&w=600&auto=format&fit=crop"
            }
          ].map((card, idx) => (
            <div key={idx} className="group flex flex-col bg-white border border-slate-100 rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-red-500/5 hover:border-red-100 transition-all duration-500">
              <div className="w-full h-44 bg-slate-50 rounded-[1.8rem] overflow-hidden mb-6 border border-slate-100">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider block mb-2">{card.tag}</span>
                  {/* 2. Memperbaiki variable dari feature.title menjadi card.title */}
                  <h4 className="text-xl font-black text-slate-950 tracking-tight mb-3 flex items-center gap-3">
                    <span className="text-red-500">{card.icon}</span>
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Kesimpulan & Next Steps */}
      <section className="max-w-7xl mx-auto pb-32 px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-xl shadow-slate-950/20">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black block mb-3">Final Conclusion</span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
              Komitmen Terhadap Edukasi Berkelanjutan
            </h3>
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-8">
              Refleksi ini menjadi titik pijak bagi kami untuk terus menyempurnakan inovasi edukasi berbasis STEM, menaruh empati pada kesehatan fisik pengguna, dan mendukung terwujudnya tujuan pembangunan berkelanjutan secara nyata.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-red-400">
              <CheckCircle size={14} /> Project Milestone Completed Successfully
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Reflection;