import React, { useState } from 'react';
import { 
  Heart, 
  Target, 
  ClipboardList, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Activity, 
  Eye, 
  AlertTriangle,
  ArrowUpRight,
  X,
  Download,
  Maximize2,
  Monitor,
  Coffee,
  Brain
} from 'lucide-react';

const Empathy = () => {
  // State untuk mengontrol pdf popup modal
  const [activePdf, setActivePdf] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('');

  // State untuk mengontrol image lightbox modal
  const [activeImage, setActiveImage] = useState(null);
  const [imageTitle, setImageTitle] = useState('');

  const openPdfModal = (pdfPath, title) => {
    setActivePdf(pdfPath);
    setPdfTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closePdfModal = () => {
    setActivePdf(null);
    setPdfTitle('');
    document.body.style.overflow = 'auto';
  };

  const openImageModal = (imagePath, title) => {
    setActiveImage(imagePath);
    setImageTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setActiveImage(null);
    setImageTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* Header Halaman (Hero) */}
      <header className="relative pt-44 pb-20 px-6 border-b border-slate-100 bg-white w-full overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">STAGE 1: EMPATHIZE & RESEARCH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
              Empathy & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-700">User Research.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-light tracking-tight max-w-2xl">
              Memahami lebih dalam hambatan kesehatan, tingkat stres kognitif, dan ergonomi fisik pengguna melalui pendekatan kualitatif dan kuantitatif secara empiris.
            </p>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto py-24 px-6 relative space-y-28 z-10">
        
        {/* Grid SDG & Aspek Penyelidikan */}
        <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: SDG 3.4 Target */}
          <div className="group relative bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100/50 shadow-inner">
                  <Target size={26} className="stroke-[1.5]" />
                </div>
                <img 
                  src="/images/sdgs/icon3.jpg" 
                  alt="SDG 3 Logo" 
                  className="w-16 h-16 object-contain rounded-xl border border-slate-100 shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" 
                />
              </div>

              <span className="text-[10px] font-mono font-black text-emerald-600 tracking-widest uppercase block mb-3">UN TARGET SDG 3.4</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-5 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                Tujuan dan Target Perserikatan Bangsa-Bangsa
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Pada poin ke-3, tepatnya sub poin 3.4, UN memiliki target pada tahun 2030 untuk mengurangi sepertiga kematian prematur akibat penyakit tidak menular (PTM) melalui pencegahan dan pengobatan serta mempromosikan kesehatan mental dan kesejahteraan.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">GLOBAL GOALS</span>
              <span className="bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold px-3 py-1 rounded-full border border-emerald-100/55">
                TARGET GLOBAL 2030
              </span>
            </div>
          </div>

          {/* Card 2: Aspek yang Diteliti */}
          <div className="group relative bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
            
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100/50 shadow-inner">
                  <ClipboardList size={26} className="stroke-[1.5]" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-100 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" 
                    alt="Work posture" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </div>

              <span className="text-[10px] font-mono font-black text-blue-600 tracking-widest uppercase block mb-3">RESEARCH SCOPE</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-5 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                Aspek dan Tujuan yang Diteliti
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Menganalisis tantangan kesehatan fisik dan mental pada pekerja digital serta mahasiswa akibat gaya hidup sedenter (duduk terlalu lama), tingkat stres kerja, keletihan mata (Computer Vision Syndrome), dehidrasi, dan kurangnya aktivitas fisik yang menghambat produktivitas dan kesejahteraan harian.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">INVESTIGATION FOCUS</span>
              <span className="bg-blue-50 text-blue-700 font-mono text-[9px] font-bold px-3 py-1 rounded-full border border-blue-100/55">
                KESEHATAN KERJA & DIGITAL
              </span>
            </div>
          </div>

        </section>

        {/* Metodologi Penelitian */}
        <section className="group relative bg-white rounded-[3.5rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-500/[0.015] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl"><Activity size={18} className="stroke-[2]" /></div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">METODOLOGI PENELITIAN</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight mb-8">
                Hasil Penelitian dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Pendekatan Empati</span>
              </h3>
              
              <p className="text-base text-slate-600 leading-relaxed max-w-4xl mb-12 font-medium">
                Penelitian ini mengintegrasikan metode <strong className="text-slate-900 font-extrabold">Kuantitatif (Survei)</strong> dan <strong className="text-slate-900 font-extrabold">Kualitatif (Wawancara)</strong> untuk mengumpulkan data riil mengenai ketersediaan akses terhadap kesadaran kesehatan kerja digital, tingkat stres, dan keluhan fisik responden di Indonesia.
              </p>

              <div className="grid md:grid-cols-2 gap-6 border-t border-slate-100 pt-12">
                
                {/* Method 1 Card */}
                <div className="group/card relative bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between">
                  <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 group-hover/card:text-red-50 transition-colors pointer-events-none select-none">01</div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover/card:bg-red-500 group-hover/card:text-white transition-all duration-300 shadow-sm"><BarChart3 size={18} /></div>
                      <h4 className="font-extrabold text-slate-900 text-lg">Survei Kuantitatif</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Survei disebarkan menggunakan platform Google Form kepada responden dengan latar belakang mahasiswa rumpun IT dan pekerja digital di Indonesia untuk mengidentifikasi tingkat stres kognitif dan prevalensi keluhan fisik.
                    </p>
                  </div>
                </div>

                {/* Method 2 Card */}
                <div className="group/card relative bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 flex flex-col justify-between">
                  <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 group-hover/card:text-slate-200/50 transition-colors pointer-events-none select-none">02</div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center group-hover/card:scale-105 transition-all duration-300 shadow-sm"><MessageSquare size={18} /></div>
                      <h4 className="font-extrabold text-slate-900 text-lg">Wawancara Kualitatif</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Wawancara mendalam dilakukan dengan beberapa perwakilan mahasiswa vokasi dan pekerja magang untuk mendengar secara personal keluhan subjektif mereka terkait ergonomi, durasi screen-time, dan kebutuhan asupan cairan harian.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Dual Images for Methodology (With interactive lightbox) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Image 1: Survei Kuesioner (Google Form) */}
              <div 
                onClick={() => openImageModal('/images/survey_screenshot.png', 'Survei Kesehatan & Kesejahteraan Pekerja')}
                className="w-full h-44 rounded-3xl overflow-hidden border border-slate-200/60 shadow-md relative group/img cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-200"
              >
                <img 
                  src="/images/survey_screenshot.png" 
                  alt="Survei Kesehatan & Kesejahteraan Pekerja" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover/img:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 p-2.5 rounded-full shadow-lg transition-opacity duration-300">
                    <Eye size={18} className="stroke-[2.5]" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md border border-slate-100 px-3.5 py-1.5 rounded-xl text-[9px] text-slate-800 font-mono font-black shadow-sm uppercase tracking-wider">
                  METODE 1: KUESIONER
                </div>
              </div>
              
              {/* Image 2: Wawancara Kualitatif (Students at desk) */}
              <div 
                onClick={() => openImageModal('/images/interview_photo.jpg', 'Proses Wawancara Mahasiswa')}
                className="w-full h-44 rounded-3xl overflow-hidden border border-slate-200/60 shadow-md relative group/img cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-400"
              >
                <img 
                  src="/images/interview_photo.jpg" 
                  alt="Proses Wawancara Mahasiswa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover/img:opacity-100 bg-white/90 backdrop-blur-md text-slate-900 p-2.5 rounded-full shadow-lg transition-opacity duration-300">
                    <Eye size={18} className="stroke-[2.5]" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3.5 py-1.5 rounded-xl text-[9px] text-white font-mono font-black shadow-sm uppercase tracking-wider">
                  METODE 2: WAWANCARA
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Downloadable / Viewable PDFs */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">RESEARCH ARTIFACTS</span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">Akses Laporan Lengkap Penelitian</h3>
            <p className="text-sm text-slate-500 font-medium">Unduh atau baca secara interaktif laporan penelitian empiris dan matriks desain kami.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Laporan Survei Card */}
            <div className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-red-100/70 transition-all duration-500 overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 border border-red-100/50">
                    <FileText size={22} />
                  </div>
                  <span className="bg-red-50 text-red-600 font-mono text-[9px] font-bold px-3 py-1.5 rounded-full border border-red-100/50">
                    SURVEI REPORT PDF
                  </span>
                </div>
                
                {/* Interactive Mini PDF Preview */}
                <div 
                  onClick={() => openPdfModal('/survei.pdf', 'Laporan Hasil Survei Kesehatan & Ergonomi')}
                  className="relative w-full h-48 bg-slate-50 rounded-2xl mb-6 overflow-hidden border border-slate-100 shadow-inner cursor-pointer group/preview"
                >
                  <iframe 
                    src="/survei.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                    title="Survei PDF Preview"
                    className="w-full h-full border-none select-none pointer-events-none"
                    scrolling="no"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/preview:bg-slate-950/[0.03] transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover/preview:opacity-100 bg-white/95 backdrop-blur-md text-slate-900 font-mono text-[9px] font-bold tracking-widest px-4 py-2.5 rounded-xl border border-slate-100 shadow-md transition-opacity duration-300 flex items-center gap-2">
                      <Maximize2 size={10} /> PRATINJAU DOKUMEN
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                  Dokumen Hasil Survei Kuesioner
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 font-normal">
                  Akses file laporan lengkap berisi diagram statistik, olah data mentah kuesioner, dan analisis persentase keluhan kesehatan dari Google Form responden di lapangan.
                </p>
              </div>

              <button 
                onClick={() => openPdfModal('/survei.pdf', 'Laporan Hasil Survei Kesehatan & Ergonomi')}
                className="w-full py-4 px-8 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 border border-slate-950 group-hover:bg-red-600 group-hover:border-red-600 group-hover:shadow-red-200 group-hover:shadow-xl"
              >
                LIHAT HASIL SURVEI <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Matrix Penelitian & Empati Card */}
            <div className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-slate-300 transition-all duration-500 overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-slate-950/5 to-transparent rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 border border-slate-200/50">
                    <ClipboardList size={22} />
                  </div>
                  <span className="bg-slate-100 text-slate-700 font-mono text-[9px] font-bold px-3 py-1.5 rounded-full border border-slate-200/50">
                    EMPATHY MATRIX PDF
                  </span>
                </div>

                {/* Interactive Mini PDF Preview */}
                <div 
                  onClick={() => openPdfModal('/matrix.pdf', 'Matrix Penelitian & Empati')}
                  className="relative w-full h-48 bg-slate-50 rounded-2xl mb-6 overflow-hidden border border-slate-100 shadow-inner cursor-pointer group/preview"
                >
                  <iframe 
                    src="/matrix.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                    title="Matrix PDF Preview"
                    className="w-full h-full border-none select-none pointer-events-none"
                    scrolling="no"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/preview:bg-slate-950/[0.03] transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover/preview:opacity-100 bg-white/95 backdrop-blur-md text-slate-900 font-mono text-[9px] font-bold tracking-widest px-4 py-2.5 rounded-xl border border-slate-100 shadow-md transition-opacity duration-300 flex items-center gap-2">
                      <Maximize2 size={10} /> PRATINJAU DOKUMEN
                    </span>
                  </div>
                </div>
                
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                  Dokumen Matrix Penelitian & Empati
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 font-normal">
                  Akses matriks empati komparatif yang merumuskan aspek psikologis responden (Says, Thinks, Does, Feels) serta perancangan target intervensi yang paling tepat sasaran.
                </p>
              </div>

              <button 
                onClick={() => openPdfModal('/matrix.pdf', 'Matrix Penelitian & Empati')}
                className="w-full py-4 px-8 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 border border-slate-950 group-hover:shadow-xl"
              >
                LIHAT MATRIX EMPATI <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>
        </section>

        {/* Data Temuan Utama (Insight Metrics) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">KEY DATA INSIGHTS</span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">Hasil Temuan Penelitian Utama</h3>
            <p className="text-sm text-slate-500 font-medium">Data empiris kuantitatif yang dirangkum dari respon koresponden dan menjadi dasar pengembangan solusi kami.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                value: "72.8%", 
                title: "Paparan Layar Tinggi", 
                desc: "Responden menghabiskan waktu 5 hingga 8 jam di depan layar setiap hari.", 
                icon: <Monitor size={20} className="stroke-[1.5]" />, 
                theme: "bg-blue-50 text-blue-600 border-blue-100",
                textGradient: "from-blue-600 to-indigo-600"
              },
              { 
                value: "77.2%", 
                title: "Tingkat Stres Tinggi", 
                desc: "Responden mengalami tingkat stres sedang hingga tinggi akibat tekanan tugas.", 
                icon: <Brain size={20} className="stroke-[1.5]" />, 
                theme: "bg-red-50 text-red-600 border-red-100",
                textGradient: "from-red-600 to-rose-600"
              },
              { 
                value: "77.3%", 
                title: "Keluhan Fisik Akut", 
                desc: "Responden sering mengeluhkan sakit punggung, leher kaku, atau mata perih.", 
                icon: <Activity size={20} className="stroke-[1.5]" />, 
                theme: "bg-orange-50 text-orange-600 border-orange-100",
                textGradient: "from-orange-600 to-amber-600"
              },
              { 
                value: "45.4%", 
                title: "Jarang Peregangan", 
                desc: "Responden sangat jarang melakukan peregangan fisik secara rutin saat bekerja.", 
                icon: <Heart size={20} className="stroke-[1.5]" />, 
                theme: "bg-pink-50 text-pink-600 border-pink-100",
                textGradient: "from-pink-600 to-rose-600"
              },
              { 
                value: "40.9%", 
                title: "Mengabaikan Nutrisi", 
                desc: "Responden sering melewatkan waktu makan atau minum akibat terlalu fokus bekerja.", 
                icon: <Coffee size={20} className="stroke-[1.5]" />, 
                theme: "bg-amber-50 text-amber-800 border-amber-100",
                textGradient: "from-amber-700 to-amber-900"
              },
              { 
                value: "72.7%", 
                title: "Butuh Solusi Preventif", 
                desc: "Responden meyakini dashboard kesehatan digital akan sangat membantu aktivitas mereka.", 
                icon: <Target size={20} className="stroke-[1.5]" />, 
                theme: "bg-emerald-50 text-emerald-600 border-emerald-100",
                textGradient: "from-emerald-600 to-teal-600"
              }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 ${stat.theme} rounded-xl flex items-center justify-center border shadow-sm`}>
                      {stat.icon}
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400">METRIC #{idx + 1}</span>
                  </div>
                  
                  <p className={`text-4xl font-black bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent tracking-tight mb-2`}>
                    {stat.value}
                  </p>
                  <h4 className="text-sm font-black text-slate-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visualisasi Data Kuesioner (Survei) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">QUESTIONNAIRE DATA DISTRIBUTION</span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">Grafik Distribusi Data Kuesioner</h3>
            <p className="text-sm text-slate-500 font-medium">Visualisasi statistik respon dari 22 koresponden mengenai kondisi kerja digital.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                id: "chart_3",
                title: "Status Responden",
                desc: "Mayoritas responden berstatus sebagai mahasiswa Magang/PKL (72.7%), diikuti karyawan tetap/kontrak.",
                path: "/images/chart_3.png"
              },
              {
                id: "chart_4",
                title: "Jenis Instansi / Tempat Kerja",
                desc: "Distribusi tempat kerja mencakup sektor Swasta (36.4%), BUMN (22.7%), Instansi Pemerintah (22.7%), dsb.",
                path: "/images/chart_4.png"
              },
              {
                id: "chart_5",
                title: "Rata-rata Jam Menatap Layar",
                desc: "Hampir setengah responden (45.5%) menatap layar 5-8 jam sehari, sementara 27.3% menatap layar > 8 jam.",
                path: "/images/chart_5.png"
              },
              {
                id: "chart_6",
                title: "Tingkat Kecemasan/Stres Kerja",
                desc: "Skala kecemasan/stres responden cenderung tinggi dengan mayoritas berada pada skala 4 (31.8%) dan skala 5 (22.7%).",
                path: "/images/chart_6.png"
              },
              {
                id: "chart_7",
                title: "Kekurangan Waktu Istirahat Mental",
                desc: "Tingkat kekurangan waktu istirahat sangat signifikan, didominasi oleh skala tertinggi 5 (31.8%) dan skala 4 (27.3%).",
                path: "/images/chart_7.png"
              },
              {
                id: "chart_8",
                title: "Kehilangan Motivasi / Kelelahan Emosional (Burnout)",
                desc: "Responden yang merasakan hilangnya motivasi/burnout cenderung tinggi, terpusat pada skala 5 (27.3%) dan skala 3 (27.3%).",
                path: "/images/chart_8.png"
              },
              {
                id: "chart_9",
                title: "Keluhan Fisik Saat Bekerja",
                desc: "Sebanyak 36.4% responden sangat sering merasakan sakit punggung, leher kaku, atau mata perih (skala 4) saat bekerja.",
                path: "/images/chart_9.png"
              },
              {
                id: "chart_10",
                title: "Kerutinan Peregangan Singkat",
                desc: "Kepatuhan melakukan peregangan otot berkala masih minim, dengan mayoritas berada pada skala rendah 4 (31.8%) dan skala 2 (22.7%).",
                path: "/images/chart_10.png"
              },
              {
                id: "chart_11",
                title: "Melewatkan Waktu Makan / Minum",
                desc: "Mayoritas mutlak responden (59.1%) sering kali melewatkan makan atau minum secara teratur akibat kesibukan kerja (skala 3).",
                path: "/images/chart_11.png"
              },
              {
                id: "chart_12",
                title: "Kebijakan / Fasilitas Kesehatan Mental",
                desc: "Setengah responden (50%) menyatakan fasilitas perusahaan sudah sangat baik, namun 40.9% menilai masih perlu ditingkatkan.",
                path: "/images/chart_12.png"
              },
              {
                id: "chart_13",
                title: "Efektivitas Aplikasi/Dashboard Pengingat Kesehatan",
                desc: "Sebagian besar responden (72.7%) meyakini bahwa aplikasi pengingat kesehatan fisik dan mental akan efektif membantu kesejahteraan mereka.",
                path: "/images/chart_13.png"
              }
            ].map((chart, idx) => {
              const isLast = idx === 10;
              const cardContent = (
                <div 
                  className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-red-100/50 transition-all duration-500 flex flex-col justify-between w-full"
                >
                  <div>
                    <div 
                      onClick={() => openImageModal(chart.path, chart.title)}
                      className="relative w-full h-48 bg-slate-50 rounded-2xl mb-5 overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center cursor-pointer group/imgcontainer"
                    >
                      <img 
                        src={chart.path} 
                        alt={chart.title} 
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/imgcontainer:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover/imgcontainer:bg-slate-950/5 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover/imgcontainer:opacity-100 bg-white/95 backdrop-blur-md text-slate-900 font-mono text-[9px] font-bold tracking-widest px-4 py-2.5 rounded-xl border border-slate-100 shadow-md transition-opacity duration-300 flex items-center gap-2">
                          <Maximize2 size={10} /> KLIK UNTUK MEMPERBESAR
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base font-black text-slate-950 tracking-tight mb-2 leading-tight group-hover:text-red-600 transition-colors duration-300">
                      {chart.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {chart.desc}
                    </p>
                  </div>
                </div>
              );

              if (isLast) {
                return (
                  <div key={chart.id} className="lg:col-span-2 flex justify-center w-full">
                    <div className="w-full lg:max-w-[calc(50%-1rem)] flex">
                      {cardContent}
                    </div>
                  </div>
                );
              }

              return (
                <React.Fragment key={chart.id}>
                  {cardContent}
                </React.Fragment>
              );
            })}
          </div>
        </section>



      </main>

      {/* PDF View Modal Popup */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div 
            onClick={closePdfModal} 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
          />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col z-10 transition-transform duration-300 scale-100 border border-slate-100">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <h3 className="font-black text-slate-950 tracking-tight text-sm md:text-base leading-none">
                  {pdfTitle}
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a 
                  href={activePdf} 
                  download 
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 rounded-xl transition-all border border-slate-200/50 flex items-center gap-2 text-xs font-mono font-bold"
                  title="Unduh File PDF"
                >
                  <Download size={16} /> <span className="hidden sm:inline">UNDUH</span>
                </a>
                
                {/* Close Button */}
                <button 
                  onClick={closePdfModal}
                  className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl transition-all border border-red-100/50"
                  title="Tutup Modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            
            {/* Modal Content (PDF Renderer) */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe 
                src={`${activePdf}#toolbar=0`} 
                title={pdfTitle} 
                className="w-full h-full border-none"
              />
            </div>
            
          </div>
        </div>
      )}
      {/* Image Lightbox Modal Popup */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          <div 
            onClick={closeImageModal} 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
          />
          <div className="relative bg-white w-full max-w-4xl h-[75vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col z-10 border border-slate-100 p-4 justify-center items-center">
            <button 
              onClick={closeImageModal}
              className="absolute top-6 right-6 p-2.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl transition-all border border-red-100/50 z-20"
              title="Tutup Modal"
            >
              <X size={16} />
            </button>
            <img 
              src={activeImage} 
              alt={imageTitle} 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Empathy;