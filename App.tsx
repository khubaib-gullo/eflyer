import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import Sidebar from './components/Sidebar';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Placeholder for cart logic

  // Filter products for demo sections
  const fashionProducts = MOCK_PRODUCTS.filter(p => p.category === 'fashion');
  const electronicProducts = MOCK_PRODUCTS.filter(p => p.category === 'electronics');
  const jewelleryProducts = MOCK_PRODUCTS.filter(p => p.category === 'jewellery');

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <Header 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <main className="flex-grow">
        <Hero />

        {/* Categories / Collections */}
        <div className="bg-gray-100 py-10 px-4">
           <div className="max-w-7xl mx-auto">
             <div className="bg-white p-6 rounded shadow-sm text-center border-l-4 border-primary">
                <h3 className="text-xl md:text-2xl font-bold text-dark">
                  Welcome to Eflyer AI Store
                </h3>
                <p className="text-gray-500 mt-2">
                  Experience the next generation of shopping with our Gemini-powered assistant.
                </p>
             </div>
           </div>
        </div>

        <section id="fashion">
          <ProductGrid title="Man & Woman Fashion" products={fashionProducts} />
        </section>

        <section id="electronics" className="bg-gray-50">
          <ProductGrid title="Electronic" products={electronicProducts} />
        </section>

        <section id="jewellery">
          <ProductGrid title="Jewellery Accessories" products={jewelleryProducts} />
        </section>

      </main>

      <Footer />
      
      <GeminiChat />

    </div>
  );
};

export default App;
