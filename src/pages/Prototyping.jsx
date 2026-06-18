import React from 'react';
import { Layers, Cpu, Eye, Code, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Prototyping = () => {
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
              Interactive <br />
              <span className="text-red-600">Prototyping.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-light tracking-tight max-w-2xl">
              Mentransformasikan konsep abstrak menjadi modul web fungsional berkecepatan tinggi yang adaptif untuk menjamin kenyamanan ergonomis dan pemantauan hidrasi secara real-time.
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: Arsitektur & Lingkungan Pengembangan */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-500 text-white rounded-xl shadow-lg shadow-red-100">
                <Layers size={20} />
              </div>
              <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase">High-Fidelity Build</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Arsitektur Sistem yang <span className="text-red-600">Ringan & Responsif</span>
            </h2>
            <p className="text-slate-600 leading-relaxed font-normal">
              Prototype dikembangkan menggunakan ekosistem web modern untuk memastikan performa maksimal pada perangkat spesifikasi rendah, mereduksi beban komputasi CPU, serta memprioritaskan efisiensi daya serap kognitif pengguna.
            </p>
            
            <div className="pt-4 space-y-3">
              {[
                "Optimasi rendering DOM untuk mencegah frame drop",
                "Fitur kalkulator hidrasi berbasis algoritma personal",
                "Sistem interupsi UI yang ramah secara psikologis"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="group relative bg-slate-50 border border-slate-100 p-4 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500">
              <div className="w-full h-[400px] rounded-[1.8rem] overflow-hidden bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Web Development Code Architecture" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Tiga Pilar Komponen Utama Prototype */}
        <div className="flex flex-col mb-16 border-b border-slate-100 pb-8">
          <span className="text-red-500 font-mono font-black tracking-[0.2em] text-[10px] uppercase mb-2">Prototype Features</span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Pilar Fungsional <span className="text-red-600">EduStem Platform</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Cpu size={24} />,
              title: "Core Core Engine",
              tag: "01 / ARCHITECTURE",
              desc: "Pengembangan modul inti penjejak waktu aktivitas (micro-breaks) menggunakan algoritma yang tidak membebani performa browser latar belakang.",
              image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
            },
            {
              icon: <Eye size={24} />,
              title: "Ergonomic UI/UX",
              tag: "02 / VISUALS",
              desc: "Desain antarmuka visual dengan kontras tinggi namun ramah di mata untuk mereduksi gejala Computer Vision Syndrome (CVS) saat belajar lama.",
              image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=600&auto=format&fit=crop"
            },
            {
              icon: <Code size={24} />,
              title: "Automated Reminders",
              tag: "03 / INTEGRATION",
              desc: "Sistem trigger push-notification interaktif berbasis web untuk mendisiplinkan jadwal peregangan motorik dan hidrasi tubuh.",
              image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
            }
          ].map((feature, idx) => (
            <div key={idx} className="group flex flex-col bg-white border border-slate-100 rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-red-500/5 hover:border-red-100 transition-all duration-500">
              <div className="w-full h-44 bg-slate-50 rounded-[1.8rem] overflow-hidden mb-6 border border-slate-100">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider block mb-2">{feature.tag}</span>
                  <h4 className="text-xl font-black text-slate-950 tracking-tight mb-3 flex items-center gap-3">
                    <span className="text-red-500">{feature.icon}</span>
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Call to Action / Status Proyek */}
      <section className="max-w-7xl mx-auto pb-32 px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-xl shadow-slate-950/20">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black block mb-3">Next Phase</span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
                Siap Melangkah ke Tahap Pengujian Pengguna?
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Prototype komparatif ini akan dievaluasi secara berkala menggunakan parameter metrik kegunaan (*usability testing*) langsung kepada kelompok mahasiswa vokasi IT.
              </p>
            </div>
            
            <button className="group flex items-center gap-3 px-8 py-5 bg-red-600 text-white rounded-full font-black text-[11px] tracking-[0.2em] hover:bg-red-500 active:scale-95 transition-all shadow-lg shadow-red-900/30 uppercase flex-shrink-0">
              Run Testing Module
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Prototyping;