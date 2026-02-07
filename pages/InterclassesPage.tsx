
import React, { useState } from 'react';
import { FUTSAL_RESULTS, CHESS_RESULTS } from '../constants';

const InterclassesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'futsal' | 'pingpong' | 'chess'>('futsal');

  const getResults = () => {
    switch(activeTab) {
      case 'futsal': return FUTSAL_RESULTS;
      case 'chess': return CHESS_RESULTS;
      default: return [];
    }
  };

  const results = getResults();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 italic">Interclasses 2024</h1>
        <p className="text-slate-600 max-w-xl mx-auto uppercase text-sm tracking-widest font-bold text-yellow-600">Esporte • Competição • Respeito</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {[
          { id: 'futsal', label: 'Futsal' },
          { id: 'pingpong', label: 'Ping-Pong' },
          { id: 'chess', label: 'Xadrez' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
              activeTab === tab.id 
                ? 'bg-blue-800 text-yellow-400 shadow-lg scale-105' 
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Results & Schedule */}
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b-2 border-yellow-400 pb-2">
            <h2 className="text-2xl font-bold text-blue-900">Resultados & Chaves</h2>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Temporada 2024</span>
          </div>
          
          <div className="space-y-4">
            {results.length > 0 ? (
              results.map((game, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:border-blue-100 transition-colors">
                  <div className="flex-1 text-right font-black text-lg sm:text-xl text-slate-800">{game.teamA}</div>
                  <div className="mx-4 sm:mx-6 flex items-center space-x-3 sm:space-x-4">
                    <span className="text-2xl sm:text-3xl font-black text-blue-900">{game.scoreA}</span>
                    <span className="text-slate-300 font-bold text-xs sm:text-sm">X</span>
                    <span className="text-2xl sm:text-3xl font-black text-blue-900">{game.scoreB}</span>
                  </div>
                  <div className="flex-1 text-left font-black text-lg sm:text-xl text-slate-800">{game.teamB}</div>
                  <div className="hidden md:flex flex-col items-end ml-8">
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      game.status === 'Finalizado' ? 'bg-slate-100 text-slate-500' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {game.status}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">{game.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-400 font-medium">Os confrontos de {activeTab} serão sorteados na próxima segunda-feira.</p>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <p className="text-blue-800 text-xs font-bold uppercase">Premiação para 1º, 2º e 3º lugares de cada categoria.</p>
          </div>
        </div>

        {/* Rules & Info */}
        <div className="bg-blue-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit lg:sticky lg:top-24">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400 border-b border-blue-700 pb-4">Regulamento Oficial</h2>
            <ul className="space-y-4 text-blue-100 text-sm leading-relaxed">
              <li className="flex items-start">
                <span className="text-yellow-400 font-bold mr-3">I.</span>
                <span>Inscrições limitadas a uma modalidade coletiva e uma individual por aluno.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-bold mr-3">II.</span>
                <span>Equipes devem conter no mínimo 5 e no máximo 10 atletas para o Futsal.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-bold mr-3">III.</span>
                <span>O sistema de disputa será eliminatória simples ("mata-mata").</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 font-bold mr-3">IV.</span>
                <span>Casos de agressão física resultam em expulsão definitiva do torneio e sanções escolares.</span>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
              <h3 className="font-bold text-yellow-400 mb-2 italic">Aviso do Grêmio:</h3>
              <p className="text-xs text-blue-200">
                Lembramos que as partidas ocorrem no contraturno. Alunos que não estiverem com autorização assinada pelos responsáveis não poderão participar.
              </p>
            </div>
            <button className="w-full mt-6 bg-yellow-400 text-blue-900 font-bold py-3 rounded-xl hover:bg-yellow-500 transition-colors uppercase text-sm tracking-widest shadow-lg">
              Baixar Ficha de Inscrição
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterclassesPage;
