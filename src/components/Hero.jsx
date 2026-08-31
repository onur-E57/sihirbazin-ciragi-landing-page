import { ArrowRight } from 'lucide-react';

export default function Hero({ data }) {
  return (
    <section className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto flex flex-col items-center text-center overflow-hidden">
      
      {/* Boşluğu doldurmak için CSS animasyonlu arka plan parlaklıkları */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* glass-panel sınıfını kullanarak metinleri vurgulayan hafif şeffaf bir alan yarattık */}
      <div className="glass-panel p-10 md:p-16 rounded-3xl relative z-10 animate-float hero-3d-card">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          {data.title.split('3 Boyutlu').map((part, i, arr) => 
            i === arr.length - 1 ? (
              <span key={i}> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400 glow-text">3 Boyutlu</span>{part}</span>
            ) : part
          )}
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        <div className="mt-10 flex justify-center items-center gap-6">
          <a 
            href={data.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative px-8 py-4 bg-purple-700 hover:bg-purple-600 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(140, 11, 245, 0.5)] border border-purple-500 flex items-center gap-2"
          >
            {data.ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}