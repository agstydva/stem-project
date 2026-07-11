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
  Maximize2
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
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: SDG 3.4 Target */}
          <div className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-2xl hover:border-red-100 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.01] rounded-full blur-[40px] pointer-events-none" />
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-red-50/80 rounded-2xl flex items-center justify-center text-red-600 border border-red-100/50">
                  <Target size={22} className="stroke-[2]" />
                </div>
                <img src="/images/sdgs/icon3.jpg" alt="SDG 3" className="w-16 h-16 object-contain rounded-xl border border-slate-100 shadow-sm transition-transform duration-500 group-hover:rotate-3" />
              </div>
              <span className="text-[10px] font-mono font-bold text-red-600 tracking-widest uppercase block mb-2">UN TARGET SDG 3.4</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-6">
                Tujuan dan Target Perserikatan Bangsa-Bangsa
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Pada poin ke-3, tepatnya sub poin 3.4, UN memiliki target pada tahun 2030 untuk mengurangi sepertiga kematian prematur akibat penyakit tidak menular (PTM) melalui pencegahan dan pengobatan serta mempromosikan kesehatan mental dan kesejahteraan.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-6 mt-8">
              <span className="text-xs font-mono font-bold text-slate-400">Target Global 2030</span>
            </div>
          </div>

          {/* Card 2: Aspek yang Diteliti */}
          <div className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-2xl hover:border-slate-200 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/[0.01] rounded-full blur-[40px] pointer-events-none" />
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 border border-slate-200/50">
                  <ClipboardList size={22} className="stroke-[2]" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Work posture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase block mb-2">RESEARCH SCOPE</span>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-6">
                Aspek dan Tujuan yang Diteliti
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                Menganalisis tantangan kesehatan fisik dan mental pada pekerja digital serta mahasiswa akibat gaya hidup sedenter (duduk terlalu lama), tingkat stres kerja, keletihan mata (Computer Vision Syndrome), dehidrasi, dan kurangnya aktivitas fisik yang menghambat produktivitas dan kesejahteraan harian.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-6 mt-8">
              <span className="text-xs font-mono font-bold text-slate-400">Kesehatan Kerja & Pendidikan Digital</span>
            </div>
          </div>

        </section>

        {/* Metodologi Penelitian */}
        <section className="group relative bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-red-500/[0.01] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Activity size={16} /></div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">METODOLOGI PENELITIAN</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-8">
                Hasil Penelitian dengan Pendekatan Empati
              </h3>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-4xl mb-12 font-medium">
                Penelitian ini mengintegrasikan metode <strong>Kuantitatif (Survei)</strong> dan <strong>Kualitatif (Wawancara)</strong> untuk mengumpulkan data riil mengenai ketersediaan akses terhadap kesadaran kesehatan kerja digital, tingkat stres, dan keluhan fisik responden di Indonesia.
              </p>

              <div className="grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600"><BarChart3 size={16} /></div>
                    <h4 className="font-black text-slate-900 text-lg">Metode 1: Survei Kuantitatif</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-11">
                    Survei disebarkan menggunakan platform Google Form kepada responden dengan latar belakang mahasiswa rumpun IT dan pekerja digital di Indonesia untuk mengidentifikasi tingkat stres kognitif dan prevalensi keluhan fisik.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center"><MessageSquare size={16} /></div>
                    <h4 className="font-black text-slate-900 text-lg">Metode 2: Wawancara Kualitatif</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-11">
                    Wawancara mendalam dilakukan dengan beberapa perwakilan mahasiswa vokasi dan pekerja magang untuk mendengar secara personal keluhan subjektif mereka terkait ergonomi, durasi screen-time, dan kebutuhan asupan cairan harian.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Images for Methodology */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Image 1: Survei Kuesioner (Google Form) */}
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
                <img 
                  src="/images/survey_screenshot.png" 
                  alt="Survei Kesehatan & Kesejahteraan Pekerja" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/65 backdrop-blur-sm px-3 py-1 rounded-lg text-[9px] text-white font-mono font-semibold">
                  METODE 1: KUESIONER
                </div>
              </div>
              
              {/* Image 2: Wawancara Kualitatif (Students at desk) */}
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
                <img 
                  src="/images/interview_photo.jpg" 
                  alt="Proses Wawancara Mahasiswa" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/65 backdrop-blur-sm px-3 py-1 rounded-lg text-[9px] text-white font-mono font-semibold">
                  METODE 2: WAWANCARA
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Data Temuan Utama (Insight Metrics) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">KEY DATA INSIGHTS</span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">Hasil Temuan Penelitian</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Stres Kerja Sedang-Tinggi", value: "77.2%", icon: <AlertTriangle size={18} />, color: "bg-red-600" },
              { label: "Responden Mengalami Keluhan Fisik", value: "77.3%", icon: <Activity size={18} />, color: "bg-orange-600" },
              { label: "Mendukung Dashboard Solusi Preventif", value: "72.7%", icon: <Eye size={18} />, color: "bg-emerald-600" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center mb-6`}>{stat.icon}</div>
                <p className="text-4xl font-black text-slate-950 tracking-tight mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider leading-relaxed">{stat.label}</p>
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
              }
            ].map((chart) => (
              <div 
                key={chart.id} 
                className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-red-100/50 transition-all duration-500 flex flex-col justify-between"
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
            ))}
          </div>
        </section>

        {/* Downloadable / Viewable PDFs */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">DOCUMENT ARTIFACTS</span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">Akses Laporan Lengkap Penelitian</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Laporan Survei Card */}
            <div className="group relative bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-2xl hover:border-red-100 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-[4rem] pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <div>
                <span className="text-[10px] font-mono font-black text-red-600 uppercase tracking-widest block mb-4">SURVEY RESULTS</span>
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">Dokumen Hasil Survei Kuesioner</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Akses file laporan lengkap berisi diagram statistik, olah data mentah kuesioner, dan analisis persentase keluhan kesehatan dari Google Form responden di lapangan.
                </p>
              </div>
              <button 
                onClick={() => openPdfModal('/survei.pdf', 'Laporan Hasil Survei Kesehatan & Ergonomi')}
                className="w-fit py-4 px-8 bg-red-600 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-red-200 hover:bg-red-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center gap-3"
              >
                LIHAT HASIL SURVEI <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Matrix Penelitian & Empati Card */}
            <div className="group relative bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-2xl hover:border-slate-200 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-slate-950/5 to-transparent rounded-bl-[4rem] pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block mb-4">EMPATHY MAP MATRIX</span>
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">Dokumen Matrix Penelitian & Empati</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Akses matriks empati komparatif yang merumuskan aspek psikologis responden (Says, Thinks, Does, Feels) serta perancangan target intervensi yang paling tepat sasaran.
                </p>
              </div>
              <button 
                onClick={() => openPdfModal('/matrix.pdf', 'Matrix Penelitian & Empati')}
                className="w-fit py-4 px-8 bg-slate-950 text-white rounded-2xl font-mono text-xs font-bold tracking-widest text-center shadow-lg shadow-slate-950/15 hover:bg-slate-900 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center gap-3"
              >
                LIHAT MATRIX EMPATI <ArrowUpRight size={14} />
              </button>
            </div>

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