
import React from 'react';
import { RECOMMENDED_BOOKS } from '../constants';

const StudiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Portal de Estudos</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Tudo o que você precisa para se preparar para as provas e vestibulares.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Books Section */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              Livros Recomendados
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-widest">Obra</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-widest">Autor</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-widest">Série</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {RECOMMENDED_BOOKS.map((book, i) => (
                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800 italic">{book.title}</td>
                      <td className="px-6 py-4 text-slate-600">{book.author}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">{book.grade}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center mt-12">
              Dicas de Estudo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Método Pomodoro", desc: "Estude por 25 min, descanse 5. Mantém o foco e evita cansaço mental." },
                { title: "Mapas Mentais", desc: "Ideal para matérias de humanas para conectar conceitos e datas importantes." },
                { title: "Revisão Espaçada", desc: "Revise o conteúdo em 24h, 1 semana e 1 mês para consolidar a memória." },
                { title: "Ambiente Limpo", desc: "Um local organizado reduz distrações e aumenta a produtividade." },
              ].map((tip, i) => (
                <div key={i} className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="font-bold text-blue-900 mb-2">{tip.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Vestibular Sidebar */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Vestibulares</h2>
          <div className="space-y-6">
            {[
              { name: 'ENEM', date: '05 e 12 de Nov', color: 'bg-blue-700' },
              { name: 'FUVEST', date: '19 de Nov (1ª fase)', color: 'bg-red-700' },
              { name: 'UNESP', date: '15 de Nov (1ª fase)', color: 'bg-green-700' },
            ].map((v, i) => (
              <div key={i} className={`${v.color} text-white p-6 rounded-2xl shadow-lg transform hover:-rotate-1 transition-transform`}>
                <h3 className="text-2xl font-black mb-1 tracking-tighter">{v.name}</h3>
                <p className="text-white/80 text-sm font-medium mb-4">Datas das Provas</p>
                <div className="bg-white/20 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-bold text-lg">{v.date}</span>
                  <button className="bg-white text-slate-800 text-xs px-3 py-1 rounded-full font-bold uppercase hover:bg-yellow-400 transition-colors">Site Oficial</button>
                </div>
              </div>
            ))}
            <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center">
              <p className="text-slate-400 text-sm italic">Novas datas serão adicionadas conforme os editais forem publicados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;
