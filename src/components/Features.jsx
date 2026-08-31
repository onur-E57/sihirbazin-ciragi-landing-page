import { Wand2, Printer, Sparkles } from 'lucide-react';

const iconMap = {
  Wand2: <Wand2 className="w-8 h-8 text-purple-700" />,
  Printer: <Printer className="w-8 h-8 text-purple-700" />,
  Sparkles: <Sparkles className="w-8 h-8 text-purple-700" />
};

export default function Features({ about, features }) {
  return (
    <section className="bg-white py-20 px-6 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{about.title}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{about.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}