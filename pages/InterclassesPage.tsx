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

      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {['futsal', 'pingpong', 'chess'].map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
              activeTab === id ? 'bg-blue-800 text-yellow-400 shadow-lg scale-105' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {results.map((game, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex-1 text-right font-black text-xl">{game.teamA}</div>
            <div className="mx-6 text-2xl font-black text-blue-900">{game.scoreA} X {game.scoreB}</div>
            <div className="flex-1 text-left font-black text-xl">{game.teamB}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterclassesPage;