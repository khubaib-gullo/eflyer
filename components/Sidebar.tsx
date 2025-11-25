import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="bg-dark p-4 flex justify-between items-center text-white">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="bg-primary text-white py-3 px-4 rounded font-bold mb-6 flex items-center gap-2">
             <span>Category</span>
          </div>

          <ul className="space-y-1">
            {['Fashion', 'Electronic', 'Jewellery', 'Bags', 'Footwear'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-2 border-b border-gray-100 hover:bg-gray-50 hover:text-primary transition"
                >
                  {item}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <h3 className="font-bold text-dark mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Sign In</a></li>
              <li><a href="#" className="hover:text-primary">Register</a></li>
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
