import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Daftar menu navigasi tunggal agar terhindar dari duplikasi
  const menuLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EMPATHY', path: '/empathy' },
    { name: 'IDEATION', path: '/ideation' },
    { name: 'STARBURST', path: '/starburst' },
    { name: 'LEAN CANVAS', path: '/leancanvas' },
    { name: 'PROTOTYPE', path: '/prototyping' },
    { name: 'REFLECTION', path: '/reflection' }
  ];

  // Helper untuk mengecek rute aktif (termasuk hash)
  const isLinkActive = (targetPath) => {
    const [pathName, hashValue] = targetPath.split('#');
    if (hashValue) {
      return location.pathname === pathName && location.hash === '#' + hashValue;
    }
    return location.pathname === pathName && !location.hash;
  };

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

  // Tutup menu mobile ketika berpindah rute
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-500 ${
              scrolled ? 'bg-red-600 rotate-0' : 'bg-slate-900 -rotate-6 group-hover:rotate-0'
            } text-white shadow-lg`}>
              <GraduationCap size={scrolled ? 20 : 24} className="transition-all duration-500" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">
              EDU<span className="text-red-600">STEM</span>
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center gap-6 lg:gap-8">
              {menuLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    className={`relative font-mono text-[9px] lg:text-[10px] tracking-[0.15em] lg:tracking-[0.2em] font-bold transition-all duration-300 group ${
                      active ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                    {/* Animated Underline */}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-[calc(100%+12px)] left-6 right-6 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-2xl p-6 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            {menuLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`font-mono text-xs tracking-[0.2em] font-bold py-3 px-4 rounded-xl border border-transparent transition-all ${
                    active 
                      ? 'text-red-600 bg-red-50/55 border-red-100/30' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;