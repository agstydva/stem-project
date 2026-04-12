import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-wider text-blue-400">STEM-SDGs</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Research</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Ideation</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Prototype</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Reflection</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;