import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, instagramUrl }) {
  return (
    <div className="product-card group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all flex flex-col h-full">
      
      <div className="aspect-square bg-slate-100 relative overflow-hidden flex items-center justify-center">
        {/* Resmin kareyi kusursuz doldurması için object-cover eklendi */}
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-4 right-4 bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full z-10">
            {product.badge}
          </span>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="get-info text-purple-700 text-sm font-semibold hover:text-purple-500 flex items-center gap-1">
            Bilgi Al <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
    </div>
  );
}