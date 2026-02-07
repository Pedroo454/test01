
import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Quadro de Avisos</h1>
          <p className="text-slate-600 italic">Mantenha-se informado sobre as decisões da diretoria e grêmio.</p>
        </div>
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-200 uppercase tracking-tighter">🚨 Urgente</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200 uppercase tracking-tighter">📅 Evento</span>
        </div>
      </div>

      <div className="space-y-8">
        {ANNOUNCEMENTS.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow">
            <div className={`h-2 w-full ${
              item.category === 'Urgente' ? 'bg-red-500' : 
              item.category === 'Evento' ? 'bg-blue-500' : 'bg-yellow-400'
            }`}></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest ${
                  item.category === 'Urgente' ? 'bg-red-50 text-red-600' : 
                  item.category === 'Evento' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-500'
                }`}>
                  {item.category}
                </span>
                <time className="text-sm font-bold text-slate-400">{item.date}</time>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {item.content}
              </p>
              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button className="text-blue-700 font-bold text-sm uppercase flex items-center group-hover:translate-x-1 transition-transform">
                  Detalhes do Comunicado
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
