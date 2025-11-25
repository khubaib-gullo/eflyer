import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold text-white mb-6">
              Eflyer<span className="text-primary">.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your one-stop destination for the latest fashion and electronics. 
              Quality products, best prices, and an AI-powered shopping experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-primary hover:text-white transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-primary hover:text-white transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-primary hover:text-white transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Shipping Guide</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              My Account
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition">Login / Register</a></li>
              <li><a href="#" className="hover:text-primary transition">My Orders</a></li>
              <li><a href="#" className="hover:text-primary transition">Wishlist</a></li>
              <li><a href="#" className="hover:text-primary transition">Compare</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <p className="text-sm mb-4">Subscribe to our newsletter and get 20% off your first purchase.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-gray-800 text-white px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-primary rounded-l"
              />
              <button className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-r transition">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Eflyer. All Rights Reserved. Designed by ThemeWagon clone.</p>
      </div>
    </footer>
  );
};

export default Footer;
