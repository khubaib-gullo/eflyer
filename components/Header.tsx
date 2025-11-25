import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCart, onOpenSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full">
      {/* Top Bar - Dark */}
      <div className="bg-dark text-white py-2 px-4 md:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div>Best Fashion Collection For You</div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-primary transition">English</span>
            <span className="cursor-pointer hover:text-primary transition">USD</span>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            
            {/* Hamburger (Mobile) & Logo */}
            <div className="flex items-center gap-4">
              <button onClick={onOpenSidebar} className="p-2 hover:bg-gray-100 rounded-md lg:hidden">
                <Menu className="w-6 h-6 text-dark" />
              </button>
              <div className="text-3xl font-bold text-dark tracking-tighter">
                Eflyer<span className="text-primary">.</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-dark">
              <a href="#" className="hover:text-primary transition">Home</a>
              <a href="#mens" className="hover:text-primary transition">Mens</a>
              <a href="#womens" className="hover:text-primary transition">Womens</a>
              <a href="#electronics" className="hover:text-primary transition">Electronics</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search Bar - Hidden on very small screens, expanded on others */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                <input 
                  type="text" 
                  placeholder="Search this blog"
                  className="bg-transparent border-none outline-none text-sm w-full text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-4 h-4 text-primary cursor-pointer" />
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <User className="w-5 h-5 text-dark" />
                </button>
                <button 
                  onClick={onOpenCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition relative"
                >
                  <ShoppingCart className="w-5 h-5 text-dark" />
                  <span className="absolute top-1 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
