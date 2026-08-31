import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import { mockData } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen magic-bg text-slate-200 font-sans selection:bg-purple-500 selection:text-white">
      <Header instagramUrl={mockData.hero.instagramUrl} />
      <Hero data={mockData.hero} />
      <Features about={mockData.about} features={mockData.features} />
      <ProductGallery products={mockData.products} instagramUrl={mockData.hero.instagramUrl} />
      <Footer data={mockData.footer} />
    </div>
  );
}

export default App;