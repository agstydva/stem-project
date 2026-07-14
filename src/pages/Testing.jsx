import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Testing = () => {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 px-6">
      <ScrollReveal variant="fade-up" duration={700}>
        <h1 className="text-white text-4xl font-black uppercase">Testing & Review</h1>
        <p className="text-slate-400 mt-4 font-light">Evaluasi efektivitas solusi yang dikembangkan.</p>
      </ScrollReveal>
    </div>
  );
};

export default Testing;