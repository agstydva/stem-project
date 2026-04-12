import React from 'react';

const Dashboard = () => {
  const sdgList = [
    "Tanpa Kemiskinan", "Tanpa Kelaparan", "Kehidupan Sehat", "Pendidikan Berkualitas", 
    "Kesetaraan Gender", "Air Bersih", "Energi Bersih", "Pekerjaan Layak", 
    "Inovasi & Infrastruktur", "Kurangi Kesenjangan", "Kota Berkelanjutan", "Konsumsi Bertanggung Jawab",
    "Iklim", "Ekosistem Laut", "Ekosistem Darat", "Perdamaian & Keadilan", "Kemitraan"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-blue-500/30">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em]">STEM Research Framework</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            SDG <br /> <span className="text-slate-700 italic">Initiative.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            Platform edukasi terpadu untuk mengeksplorasi 17 agenda global PBB guna menciptakan tatanan dunia yang inklusif dan berkelanjutan.
          </p>
        </div>
      </header>

      {/* Bento Grid SDGs */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {sdgList.map((goal, i) => (
            <div key={i} className="group relative bg-slate-900/40 border border-slate-800/50 p-6 rounded-sm hover:bg-white transition-all duration-500">
              <span className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 group-hover:text-blue-600 transition-colors">
                ID_{i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
              <div className="mt-8">
                <h3 className="text-sm font-bold text-white group-hover:text-black leading-tight transition-colors">
                  {goal}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Insight Section (Poin 2) */}
      <section className="bg-[#050a18] py-32 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Capaian Strategis Nasional</h2>
              <p className="text-slate-400 font-light">Analisis data statistik terkait implementasi pembangunan berkelanjutan di wilayah kedaulatan Indonesia.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-sm overflow-hidden">
              {[
                { label: "Poverty Rate", value: "1.12%", context: "Penurunan kemiskinan ekstrem", ref: "BPS 2023" },
                { label: "Renewable Energy", value: "12.3%", context: "Bauran energi nasional", ref: "ESDM 2023" },
                { label: "Education Access", value: "95.95%", context: "Angka partisipasi SD", ref: "Kemendikbud 2023" },
                { label: "Clean Water", value: "80.7%", context: "Akses air minum layak", ref: "Bappenas 2024" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#020617] p-10 hover:bg-slate-900/50 transition-colors">
                  <p className="text-xs font-mono text-blue-500 uppercase mb-4">{stat.label}</p>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.context}</p>
                  <div className="mt-6 pt-4 border-t border-slate-900 text-[10px] text-slate-600 uppercase tracking-widest">
                    Source: {stat.ref}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Focus (Poin 3) */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="bg-blue-600 p-12 md:p-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Target Sasaran 6.A</h2>
            <p className="text-blue-100 text-lg font-light leading-relaxed">
              Meningkatkan kerja sama internasional dalam program air dan sanitasi, termasuk teknologi pemanenan air dan daur ulang limbah untuk komunitas berkembang.
            </p>
          </div>
          <div className="text-white border-l border-blue-400 pl-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-2 opacity-70">Focus Area</p>
            <p className="text-xl font-medium italic">Sustainable Water Filtration</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;