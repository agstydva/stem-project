import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-900/50 py-4 shadow-2xl shadow-slate-950/20' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`p-2.5 rounded-xl transition-all duration-700 ${
              scrolled 
                ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]' 
                : 'bg-slate-900 group-hover:bg-rose-500 shadow-lg'
            } text-white`}>
              <GraduationCap size={22} className="transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <span className="text-lg font-black tracking-widest text-white uppercase font-sans">
              EDU<span className="text-rose-500 transition-colors duration-500 group-hover:text-rose-400">STEM</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center gap-10">
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
                  className={`relative font-mono text-[10px] tracking-[0.25em] font-bold transition-all duration-500 group py-1.5 ${
                    location.pathname === link.path ? 'text-rose-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Subtle Underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-rose-500 transition-all duration-500 ease-out ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;