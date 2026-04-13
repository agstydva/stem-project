import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Fungsi untuk memantau scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-500 ${
              scrolled ? 'bg-red-600 rotate-0' : 'bg-slate-900 -rotate-6 group-hover:rotate-0'
            } text-white shadow-lg`}>
              <GraduationCap size={scrolled ? 20 : 24} className="transition-all duration-500" />
            </div>
            <span className={`text-xl font-black tracking-tighter transition-colors duration-500 ${
              scrolled ? 'text-slate-900' : 'text-slate-900'
            }`}>
              EDU<span className="text-red-600">STEM</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {[
                { name: 'HOME', path: '/' },
                { name: 'EMPATHY', path: '/empathy' },
                { name: 'IDEATION', path: '/ideation' },
                { name: 'PROTOTYPE', path: '/prototyping' },
                { name: 'REFLECTION', path: '/reflection' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative font-mono text-[10px] tracking-[0.2em] font-bold transition-all duration-300 group ${
                    location.pathname === link.path ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {/* Animated Underline */}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action / Trello Button (Optional but Pro) */}
          <div className="hidden md:block">
            <button className={`px-5 py-2 rounded-full font-mono text-[10px] font-bold tracking-widest transition-all duration-500 ${
              scrolled 
                ? 'bg-red-600 text-white shadow-red-200 shadow-lg hover:scale-105 active:scale-95' 
                : 'bg-slate-900 text-white hover:bg-red-600'
            }`}>
              TRELLO BOARD
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;