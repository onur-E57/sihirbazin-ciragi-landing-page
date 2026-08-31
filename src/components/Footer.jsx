export default function Footer({ data }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <img className="logo" src="/favicon.png" alt="Sihirbazın Çırağı 3D Logo" />
        <h2 className="text-2xl font-bold text-white mb-2">{data.brandName}</h2>
        <p className="mb-6">{data.tagline}</p>
        <p className="text-sm">{data.copyrightText}</p>
      </div>
    </footer>
  );
}