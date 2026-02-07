import React, { useState } from 'react';
import { Page, NewsItem } from '../types';
import { NEWS, EVENT_DATES, Icons, SCHOOL_NAME } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const closeModal = () => setSelectedNews(null);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-700/50 px-4 py-1.5 rounded-full mb-6 border border-blue-600">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-100">Ano Letivo 2024 Iniciado</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
            Portal Estudantil<br />
            <span className="text-yellow-400 italic">Américo Franco</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
            Central de comunicação, organização de estudos e competições esportivas da Escola Estadual Américo Franco.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => onNavigate('announcements')}
              className="w-full sm:w-auto bg-yellow-400 text-blue-900 font-black px-10 py-4 rounded-2xl shadow-xl hover:bg-yellow-500 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
            >
              Avisos Importantes
            </button>
            <button 
              onClick={() => onNavigate('school')}
              className="w-full sm:w-auto bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl shadow-lg border border-blue-600 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
            >
              Conheça a Escola
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="container mx-auto px-4 -mt-12 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'CALENDÁRIO', icon: Icons.School, page: 'school', color: 'bg-white' },
            { label: 'VESTIBULARES', icon: Icons.Studies, page: 'studies', color: 'bg-white' },
            { label: 'INTERCLASSES', icon: Icons.Trophy, page: 'interclasses', color: 'bg-white' },
            { label: 'COMUNICADOS', icon: Icons.Bell, page: 'announcements', color: 'bg-white' },
          ].map((card, i) => (
            <button
              key={i}
              onClick={() => onNavigate(card.page as Page)}
              className={`${card.color} p-6 sm:p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center text-center border border-slate-100 group relative overflow-hidden`}
            >
              <div className="p-4 bg-slate-50 text-blue-700 rounded-2xl mb-4 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all duration-300">
                <card.icon />
              </div>
              <span className="font-black text-[10px] sm:text-xs text-slate-800 tracking-widest uppercase">{card.label}</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex justify-between items-end border-b-4 border-blue-800 pb-4">
            <div>
              <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Notícias & Blogs</h2>
              <p className="text-slate-500 text-sm font-medium">O cotidiano da Américo Franco em destaque.</p>
            </div>
            <button onClick={() => onNavigate('gallery')} className="hidden sm:block text-blue-600 font-bold hover:underline text-xs uppercase tracking-widest">Ver Todas</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl group border border-slate-100 transition-all duration-500">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">{item.date}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 leading-snug text-slate-800 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <button 
                    onClick={() => setSelectedNews(item)}
                    className="text-xs font-black text-blue-800 border-b-2 border-blue-100 hover:border-blue-800 py-1 transition-all uppercase tracking-widest"
                  >
                    Leia mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-blue-900 border-b-2 border-yellow-400 pb-4 mb-8 italic">Agenda Próxima</h2>
            <div className="space-y-6">
              {EVENT_DATES.map((date) => (
                <div key={date.id} className="flex items-center space-x-5 group cursor-default">
                  <div className="text-center min-w-[60px] bg-slate-50 p-2 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    <span className="block text-xl font-black text-blue-800 leading-none">{date.date.split('/')[0]}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{date.date.split('/')[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">{date.title}</h4>
                    <span className="text-[9px] px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-bold uppercase tracking-widest mt-1 inline-block">{date.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="https://instagram.com/americo_franco" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
              <div className="relative z-10">
                <div className="mb-4 text-3xl"><Icons.Instagram /></div>
                <h3 className="text-2xl font-black mb-2 leading-tight">Siga a @americo_franco</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">Fique por dentro dos stories com o dia a dia da escola.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-slate-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="h-64 sm:h-80 overflow-hidden"><img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" /></div>
            <div className="p-8 sm:p-12 overflow-y-auto max-h-[50vh]">
              <h2 className="text-3xl font-black text-slate-800 mb-6 leading-tight italic">{selectedNews.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{selectedNews.content}</p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default HomePage;