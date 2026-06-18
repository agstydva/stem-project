import React from 'react';
import { Users, HelpCircle, ClipboardList, MessageSquare } from 'lucide-react';

const Empathy = () => {
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
              Empathy & <br />
              <span className="text-red-600">Research.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-light tracking-tight max-w-2xl">
              Tahap awal framework STEM untuk mengidentifikasi hambatan kesehatan fisik dan mental yang memengaruhi efektivitas belajar mahasiswa magang dalam menguasai keterampilan digital (SDG Target 4.4).
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: Analisis 4W 1H Framework */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="flex flex-col mb-16 border-b border-slate-100 pb-8">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-3 relative mb-3">
            <span className="absolute -left-4 top-0 h-full w-1 bg-red-500 rounded-full"></span>
            <HelpCircle size={16} className="text-red-500" /> 4W 1H Problem Framework (SDG 4.4 Focus)
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Memetakan Tantangan Fisik dalam <span className="text-red-600">Edukasi Digital</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              tag: "WHO", 
              title: "Siapa Target Audiens?", 
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", 
              desc: "Mahasiswa magang, siswa pendidikan vokasi IT, dan talenta muda yang menjalani peningkatan keterampilan digital intensif di depan komputer dalam durasi panjang." 
            },
            { 
              tag: "WHY", 
              title: "Mengapa Ini Masalah SDG 4?", 
              image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", 
              desc: "Proses transfer ilmu dan produktivitas belajar terhambat serius ketika siswa mengalami stres mental, keletihan mata (Computer Vision Syndrome), serta dehidrasi karena lupa minum." 
            },
            { 
              tag: "WHAT", 
              title: "Apa Masalah Utamanya?", 
              image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", 
              desc: "Absennya modul interaktif yang mendisiplinkan pelajar untuk mengambil jeda mikro (micro-breaks), melakukan peregangan fisik terpandu, dan mengontrol volume hidrasi secara berkala." 
            },
            { 
              tag: "WHERE", 
              title: "Di Mana Masalah Terjadi?", 
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", 
              desc: "Di laboratorium komputer kampus, ruang kerja komunal, tempat magang, serta area belajar mandiri di rumah selama pembelajaran jarak jauh." 
            },
            { 
              tag: "HOW", 
              title: "Bagaimana Solusi Bekerja?", 
              image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop", 
              desc: "Mengintegrasikan alat pengingat otomatis ke dalam platform edutekno web untuk memaksa interupsi sehat, memandu gerakan ergonomis, dan mengembalikan fokus kognitif pelajar." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-red-100 transition-all duration-500">
              <div>
                {/* Slot Gambar untuk Setiap Poin 4W1H */}
                <div className="w-full h-40 bg-slate-100 rounded-[1.5rem] mb-5 overflow-hidden border border-slate-100 shadow-inner">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-mono font-bold text-red-600 mb-2">{item.tag} PROCESS</div>
                <h4 className="text-lg font-black text-slate-950 tracking-tight mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Metodologi Pengambilan Data & Bukti Empiris */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                {/* Slot Gambar Metodologi */}
                <div className="w-full h-48 bg-slate-100 rounded-[1.5rem] mb-6 overflow-hidden border border-slate-100 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" 
                    alt="Metodologi Riset STEM" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-red-100 text-red-600 rounded-xl">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 tracking-tight">Metodologi Riset</h3>
                </div>
                <h4 className="text-sm font-bold text-slate-950 mb-2">Analisis Kesiapan Belajar Holistik</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Wawancara kualitatif mendalam dan survei kuantitatif diterapkan guna memetakan korelasi langsung antara tingkat kelelahan fisik (ergonomi layar) dengan penurunan daya serap serta fokus mahasiswa selama menyelesaikan tugas modul digital.
                </p>
                <div className="border-t border-slate-100 pt-5">
                  <h4 className="text-xs font-mono font-bold text-red-600 uppercase mb-3">Tanggapan Terhadap Bukti</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Temuan membuktikan bahwa intervensi teknologi berupa notifikasi psikologis interaktif jauh lebih efektif mengubah kebiasaan buruk pelajar daripada sekadar mengandalkan instruksi teks pasif.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <MessageSquare size={18} className="text-red-600" />
                <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest">Bukti Wawancara Lapangan & Dokumentasi</h3>
              </div>
              
              {/* Informan A + Gambar */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 h-32 bg-slate-100 rounded-[1.5rem] overflow-hidden border">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                    alt="Dokumentasi Wawancara Mahasiswa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-slate-600 italic font-medium leading-relaxed">
                    "Kalau sudah fokus melakukan analisis data atau pengerjaan web design berjam-jam, saya sering lupa waktu dan mengabaikan botol minum. Efeknya mata terasa sangat perih, leher kaku, dan konsentrasi belajar menurun drastis karena pusing di akhir sesi."
                  </p>
                  <p className="text-[11px] font-mono font-bold text-slate-400 block mt-3">— Informan A (Mahasiswa Magang Bidang Ilmu Komputer, Smt 6)</p>
                </div>
              </div>

              {/* Informan B + Gambar */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 h-32 bg-slate-100 rounded-[1.5rem] overflow-hidden border">
                  <img 
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop" 
                    alt="Dokumentasi Siswa Vokasi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-slate-600 italic font-medium leading-relaxed">
                    "Kurikulum mengajarkan kami intensif membina technical skill digital, tetapi belum membekali kebiasaan ergonomi yang benar saat bekerja di depan layar. Program pengingat terintegrasi dengan tutorial peregangan singkat sangat kami butuhkan."
                  </p>
                  <p className="text-[11px] font-mono font-bold text-slate-400 block mt-3">— Informan B (Siswa Vokasi IT, Peserta Internship Front-End)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Research with Empathy Worksheet / Matrix */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
        <div className="group relative bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-[3rem] p-10 md:p-16 border border-slate-100 overflow-hidden shadow-2xl shadow-slate-100/50">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600 text-[10px] font-mono font-black px-4 py-1.5 w-fit rounded-full tracking-[0.2em] text-white shadow-md">BENCHMARK MATRIX</div>
              <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <ClipboardList size={14} /> Research with Empathy Worksheet
              </h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-slate-950 tracking-tight">
              Analisis Komparatif Solusi Penunjang Belajar Eksisting
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-mono text-xs uppercase tracking-wider">
                    <th className="pb-4 font-bold">Konteks / Solusi Eksisting</th>
                    <th className="pb-4 font-bold">Kelebihan (Strengths)</th>
                    <th className="pb-4 font-bold">Kelemahan (Weaknesses)</th>
                    <th className="pb-4 font-bold">Sinergi STEM Proyek Kami (SDG 4)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-4 pr-4 font-bold text-slate-950">Aplikasi Timer Alarm Smartphone</td>
                    <td className="py-4 pr-4">Praktis diatur secara manual oleh masing-masing siswa.</td>
                    <td className="py-4 pr-4">Hanya berupa dering biasa yang mudah dimatikan/diabaikan, tidak terhubung ke desktop tempat belajar, dan tidak menyajikan panduan fisik.</td>
                    <td className="py-4 text-red-600 font-medium">Membangun ekosistem modul web pembelajaran yang memaksa interupsi visual berupa animasi taktik peregangan sehat langsung di layar utama.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-bold text-slate-950">Buku Panduan Teori K3 Akademik</td>
                    <td className="py-4 pr-4">Dokumentasi aturan posisi duduk anatomis sangat akurat secara medis.</td>
                    <td className="py-4 pr-4">Format materi pasif, tidak menempel dalam ritme kerja/belajar harian, serta tidak memantau volume hidrasi secara real-time.</td>
                    <td className="py-4 text-red-600 font-medium">Mentransformasikan literasi teks menjadi fitur kalkulator hidrasi interaktif dan pelacak waktu jeda mikro yang fungsional.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Empathy;