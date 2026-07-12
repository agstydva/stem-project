import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { BookOpen, HelpCircle, FileText, CheckCircle2, Play, Clock, Globe, Heart, MessageSquare, Layers, Award } from 'lucide-react';

const Reflection = () => {
  // State untuk mengontrol apakah video sedang diputar (swap cover dengan iframe)
  const [isPlaying, setIsPlaying] = useState(false);

  const reflectionData = [
    {
      num: "01",
      question: "Mengapa SDGs PBB relevan dengan inovator, penemu, dan desainer abad ke-21?",
      answer: "SDGs PBB memberikan arah bagi inovator dan desainer untuk menciptakan solusi yang tidak hanya memanfaatkan teknologi, tetapi juga memberikan dampak positif bagi masyarakat. Dalam proyek ini, saya mempelajari bahwa inovasi harus berangkat dari permasalahan nyata. Oleh karena itu, saya memilih menggabungkan SDG 3.4 dan SDG 4.4 melalui pengembangan aplikasi web WorkWell, yang bertujuan mendukung kesehatan pekerja digital sekaligus meningkatkan kesiapan mereka menghadapi dunia kerja berbasis teknologi. Dengan demikian, teknologi yang dikembangkan menjadi lebih bermanfaat, berkelanjutan, dan berorientasi pada kebutuhan pengguna.",
      icon: <Globe size={18} />,
      accentClass: "hover:border-emerald-100 hover:shadow-emerald-500/5",
      numClass: "bg-emerald-50 text-emerald-600 border-emerald-100/50 group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
      num: "02",
      question: "Strategi mana yang menurut Anda paling membantu dan mengapa?",
      answer: "Strategi yang paling membantu adalah Design Thinking, khususnya tahap Empathize. Melalui observasi, wawancara dengan mahasiswa magang dan karyawan PT Biro Klasifikasi Indonesia, serta penyebaran kuesioner, saya memperoleh pemahaman yang lebih mendalam mengenai permasalahan yang benar-benar dialami pengguna. Pendekatan ini membuat solusi yang saya bangun didasarkan pada data dan kebutuhan nyata, bukan hanya asumsi pribadi.",
      icon: <Heart size={18} />,
      accentClass: "hover:border-red-100 hover:shadow-red-500/5",
      numClass: "bg-red-50 text-red-600 border-red-100/50 group-hover:bg-red-600 group-hover:text-white"
    },
    {
      num: "03",
      question: "Mengapa menerima umpan balik (feedback) begitu penting dalam desain? Siapa yang akan Anda minta lebih banyak umpan balik? Mengapa?",
      answer: "Umpan balik sangat penting karena membantu memastikan bahwa solusi yang dikembangkan benar-benar sesuai dengan kebutuhan pengguna. Selama proses pengembangan, masukan dari hasil wawancara dan survei membantu saya menentukan fitur utama seperti Screen Time Monitoring, Hydration Tracker, Stretching Guide, dan Mental Health Pulse. Ke depannya, saya ingin memperoleh lebih banyak umpan balik dari mahasiswa magang, pekerja digital, tim Human Resources (HR), serta praktisi kesehatan kerja. Mereka merupakan pengguna maupun pihak yang memahami kebutuhan kesehatan dan produktivitas di lingkungan kerja sehingga dapat memberikan masukan yang lebih komprehensif.",
      icon: <MessageSquare size={18} />,
      accentClass: "hover:border-blue-100 hover:shadow-blue-500/5",
      numClass: "bg-blue-50 text-blue-600 border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white"
    },
    {
      num: "04",
      question: "Tahap Design Thinking mana yang menurut Anda paling menantang? Mengapa? Tahap mana yang paling berkesan? Mengapa?",
      answer: "Tahap yang paling menantang adalah Define, karena saya harus menyaring berbagai hasil observasi, wawancara, dan survei menjadi satu permasalahan utama yang benar-benar relevan untuk diselesaikan. Saya harus memastikan bahwa solusi yang dikembangkan memiliki fokus yang jelas.\nSementara itu, tahap yang paling berkesan adalah Prototype dan Test. Pada tahap ini saya mengubah ide menjadi prototype di Figma, kemudian mengimplementasikannya menjadi aplikasi web WorkWell. Saya merasa bangga karena solusi yang awalnya hanya berupa konsep akhirnya dapat diwujudkan menjadi aplikasi yang dapat digunakan dan memperoleh respons positif dari calon pengguna.",
      icon: <Layers size={18} />,
      accentClass: "hover:border-amber-100 hover:shadow-amber-500/5",
      numClass: "bg-amber-50 text-amber-600 border-amber-100/50 group-hover:bg-amber-600 group-hover:text-white"
    },
    {
      num: "05",
      question: "Apa keterampilan/ide/konsep paling signifikan yang Anda peroleh semester ini? Jelaskan mengapa!",
      answer: "Keterampilan yang paling signifikan yang saya peroleh adalah Design Thinking, User-Centered Design, dan kemampuan mengembangkan solusi berbasis web menggunakan teknologi modern. Saya belajar bahwa proses inovasi tidak dimulai dari membuat produk, tetapi dari memahami kebutuhan pengguna melalui riset, mengumpulkan bukti, melakukan validasi, kemudian mengembangkan solusi yang tepat. Selain itu, saya juga memperoleh pengalaman menggunakan Figma, pengembangan aplikasi web, serta memanfaatkan Artificial Intelligence sebagai pendukung brainstorming dan pengembangan fitur. Pengalaman ini meningkatkan kemampuan saya dalam memecahkan masalah secara sistematis sekaligus mempersiapkan diri menghadapi tantangan dunia kerja di bidang teknologi.",
      icon: <Award size={18} />,
      accentClass: "hover:border-purple-100 hover:shadow-purple-500/5",
      numClass: "bg-purple-50 text-purple-600 border-purple-100/50 group-hover:bg-purple-600 group-hover:text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Header Halaman */}
      <header className="relative pt-44 pb-16 px-6 border-b border-slate-100 bg-white w-full overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">STAGE 4: RETROSPECTIVE & REFLECTION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
              Retrospective & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-700">Reflection.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
              Mengevaluasi proses belajar, tantangan teknis, dan perolehan kompetensi baru selama implementasi riset berbasis tujuan global SDGs.
            </p>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-20 px-6 relative space-y-24 z-10">

        {/* 1. YouTube Video Presentation Section */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">VIDEO PRESENTATION</span>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">Dokumentasi & Presentasi Proyek</h2>
            <p className="text-sm text-slate-500 font-medium">Tonton video presentasi saya mengenai implementasi proses Design Thinking dan demo platform WorkWell.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-2xl bg-slate-950 aspect-video p-2 transition-all duration-500 hover:border-red-100">

              {!isPlaying ? (
                /* Custom Video Poster (YouTube Mockup) */
                <div
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full rounded-[1.8rem] overflow-hidden relative cursor-pointer bg-white group/poster"
                >
                  {/* Background Thumbnail Image */}
                  <img
                    src="/images/sdg_banner_thumbnail.png"
                    alt="Video Presentation Thumbnail"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/poster:scale-[1.02]"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover/poster:bg-slate-950/40 transition-colors duration-500" />

                  {/* Floating Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-600/50 transition-all duration-500 group-hover/poster:scale-110 group-hover/poster:bg-red-700">
                      {/* Pulse effect rings */}
                      <span className="absolute inset-0 rounded-full bg-red-600/30 animate-ping opacity-75"></span>
                      <Play size={32} className="fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* YouTube Mockup Progress Bar (Overlay) */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="text-[10px] font-mono font-bold tracking-widest bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5">
                        <Clock size={12} /> 05:42
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 tracking-wider">
                      CLICK TO PLAY
                    </span>
                  </div>

                  {/* Bottom Red Progress Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                    <div className="h-full w-1/3 bg-red-600 transition-all duration-500 group-hover/poster:w-1/2"></div>
                  </div>

                </div>
              ) : (
                /* Actual Iframe Video Player (Plays on click) */
                <iframe
                  className="w-full h-full rounded-[1.8rem] border-none"
                  src="https://www.youtube.com/embed/alPF-WQ4pbA?controls=1&autoplay=1"
                  title="Video Refleksi Proyek STEM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}

            </div>
          </div>
        </section>

        {/* 2. Reflection Questions Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">RETROSPECTIVE JOURNAL</span>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">Refleksi Pengalaman Design Thinking</h2>
            <p className="text-sm text-slate-500 font-medium">Uraian kritis mengenai integrasi tujuan global PBB dengan implementasi rekayasa digital.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reflectionData.map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between ${item.accentClass
                  } ${idx === 4 ? 'md:col-span-2' : ''}`}
              >
                {/* Background glowing orb indicator */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-slate-950/[0.01] to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Top bar: number and custom theme icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-base border transition-all duration-500 ${item.numClass}`}>
                      {item.num}
                    </div>
                    <div className="w-9 h-9 bg-slate-50 text-slate-400 group-hover:text-slate-900 rounded-xl flex items-center justify-center border border-slate-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="text-lg font-black text-slate-950 leading-snug tracking-tight group-hover:text-slate-900 transition-colors duration-300">
                    {item.question}
                  </h3>

                  {/* Answer Box */}
                  <div className="relative bg-slate-50/60 group-hover:bg-slate-50/90 p-5 rounded-2xl border-l-4 border-slate-200 group-hover:border-slate-300 transition-all duration-500">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Branding */}
      <footer className="max-w-7xl mx-auto pb-32 px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-xl shadow-slate-950/20">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
            <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black block">Final Milestone</span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
              Komitmen Terhadap Riset & Solusi Berkelanjutan
            </h3>
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              Seluruh proses reflektif ini menjadi basis pembelajaran penting bagi kami untuk terus merancang solusi yang humanis, empiris, dan berdampak nyata bagi target global SDGs.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-red-400">
              <CheckCircle2 size={14} /> Reflection Stage Completed Successfully
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Reflection;