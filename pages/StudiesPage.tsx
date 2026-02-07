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
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">Livros Recomendados</h2>
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
                      <td className="px-6 py-4"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">{book.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;