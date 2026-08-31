export default function Header({ instagramUrl }) {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-purple-900/30 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2 glow-text">
          <img className="logo" src="/favicon.png" alt="Sihirbazın Çırağı 3D Logo" />
          Sihirbazın Çırağı
        </div>
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-amber-400 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <span>Takip Et</span>
        </a>
      </div>
    </header>
  );
}