import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id={title.toLowerCase()}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark uppercase relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative overflow-hidden aspect-[3/4]">
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 z-10">
                  NEW
                </span>
              )}
              {product.onSale && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 z-10">
                  SALE
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="bg-white p-3 rounded-full text-dark hover:bg-primary hover:text-white transition transform hover:scale-110">
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button className="bg-white p-3 rounded-full text-dark hover:bg-primary hover:text-white transition transform hover:scale-110">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-semibold text-dark mb-2">{product.title}</h3>
              <div className="mt-auto flex items-center justify-center gap-3">
                <span className="text-primary font-bold text-lg">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-dark hover:bg-gray-800 text-white font-medium py-3 px-8 rounded transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
