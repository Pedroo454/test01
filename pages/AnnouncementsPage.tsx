import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">Quadro de Avisos</h1>
      <div className="space-y-8">
        {ANNOUNCEMENTS.map((item) => (
          <article key={item.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden p-8">
            <span className="text-[10px] font-black uppercase px-2 py-1 rounded bg-blue-50 text-blue-600 tracking-widest mb-4 inline-block">{item.category}</span>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;