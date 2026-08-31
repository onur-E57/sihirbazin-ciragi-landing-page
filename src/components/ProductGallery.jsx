import ProductCard from './ProductCard';

export default function ProductGallery({ products, instagramUrl }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 text-white">En Çok İlgi Görenler</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} instagramUrl={instagramUrl} />
        ))}
      </div>
    </section>
  );
}