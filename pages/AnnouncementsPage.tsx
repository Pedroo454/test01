
import React, { useState } from 'react';
import { ANNOUNCEMENTS } from '../constants';
import { Announcement } from '../types';

const AnnouncementsPage: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const closeModal = () => setSelectedAnnouncement(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Quadro de Avisos</h1>
          <p className="text-slate-600 italic font-medium">Mantenha-se informado sobre as decisões da diretoria e do grêmio.</p>
        </div>
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[10px] font-black border border-red-200 uppercase tracking-tighter">🚨 Urgente</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black border border-blue-200 uppercase tracking-tighter">📅 Evento</span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] font-black border border-yellow-200 uppercase tracking-tighter">🔔 Geral</span>
        </div>
      </div>

      <div className="space-y-8">
        {ANNOUNCEMENTS.map((item) => (
          <article 
            key={item.id} 
            className="bg-white rounded-[2rem] shadow-md border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedAnnouncement(item)}
          >
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
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors leading-tight">
                {item.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6 line-clamp-3">
                {item.content}
              </p>
              <div className="pt-6 border-t border-slate-50 flex justify-end">
                <button 
                  className="text-blue-700 font-bold text-sm uppercase flex items-center group-hover:text-blue-900 transition-colors"
                >
                  <span className="mr-2">Ver Detalhes do Comunicado</span>
                  <div className="bg-blue-50 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {selectedAnnouncement && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className={`h-4 w-full ${
              selectedAnnouncement.category === 'Urgente' ? 'bg-red-500' : 
              selectedAnnouncement.category === 'Evento' ? 'bg-blue-500' : 'bg-yellow-400'
            }`}></div>

            <div className="p-8 sm:p-12 overflow-y-auto max-h-[80vh]">
              <div className="flex items-center space-x-3 mb-6">
                <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest ${
                  selectedAnnouncement.category === 'Urgente' ? 'bg-red-100 text-red-700' : 
                  selectedAnnouncement.category === 'Evento' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedAnnouncement.category}
                </span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Postado em {selectedAnnouncement.date}</span>
              </div>
              
              <h2 className="text-3xl font-black text-slate-800 mb-8 leading-tight italic">
                {selectedAnnouncement.title}
              </h2>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                  {selectedAnnouncement.content}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secretaria - EE Américo Franco</span>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full sm:w-auto bg-blue-800 text-white font-black px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all text-xs uppercase tracking-widest shadow-lg active:scale-95"
                >
                  Fechar Aviso
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsPage;
