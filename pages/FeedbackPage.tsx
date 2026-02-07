
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { feedbackStore } from '../feedbackStore';
import { FeedbackEntry } from '../types';

interface FeedbackPageProps {
  onBack: () => void;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [savedFeedbacks, setSavedFeedbacks] = useState<FeedbackEntry[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    category: 'Sugestão',
    message: '',
    anonymous: false
  });

  // Carrega feedbacks salvos
  const loadFeedbacks = () => {
    setSavedFeedbacks(feedbackStore.getAll());
  };

  useEffect(() => {
    loadFeedbacks();
  }, [isSubmitted, showAdmin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    feedbackStore.save({
      name: formData.anonymous ? 'Anônimo' : formData.name,
      grade: formData.anonymous ? '-' : formData.grade,
      category: formData.category,
      message: formData.message,
      anonymous: formData.anonymous
    });

    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Deseja marcar esta sugestão como resolvida e removê-la do mural?')) {
      feedbackStore.remove(id);
      loadFeedbacks();
    }
  };

  const handleExport = () => {
    feedbackStore.exportData();
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      grade: '',
      category: 'Sugestão',
      message: '',
      anonymous: false
    });
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center animate-in zoom-in duration-500">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-blue-50">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-blue-900 mb-4 italic">Sua voz foi registrada!</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Obrigado por contribuir. Sua mensagem foi salva no banco de dados do portal e será revisada pelo Grêmio Estudantil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBack}
              className="bg-blue-800 text-white font-black px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs shadow-lg"
            >
              Voltar ao Início
            </button>
            <button 
              onClick={resetForm}
              className="bg-slate-100 text-slate-600 font-bold px-10 py-4 rounded-2xl hover:bg-slate-200 transition-all uppercase tracking-widest text-xs"
            >
              Enviar Outra
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-700 font-bold hover:translate-x-1 transition-transform group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="uppercase text-xs tracking-widest">Início</span>
        </button>

        <div className="flex items-center space-x-4">
          {showAdmin && (
            <button 
              onClick={handleExport}
              className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Exportar JSON
            </button>
          )}
          <button 
            onClick={() => setShowAdmin(!showAdmin)}
            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm transition-all ${
              showAdmin 
              ? 'bg-blue-900 text-white hover:bg-blue-800' 
              : 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
            }`}
          >
            {showAdmin ? 'Sair do Mural' : 'Mural do Grêmio'}
          </button>
        </div>
      </div>

      {showAdmin ? (
        <div className="animate-in slide-in-from-bottom-8 duration-500">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-blue-900 mb-2 italic">Mural da Gestão</h2>
            <p className="text-slate-500 font-medium">
              Há <span className="text-blue-700 font-bold">{savedFeedbacks.length}</span> sugestões aguardando análise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedFeedbacks.length > 0 ? (
              savedFeedbacks.map((fb) => (
                <div key={fb.id} className="bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden group">
                  {/* Botão Deletar */}
                  <button 
                    onClick={() => handleDelete(fb.id)}
                    className="absolute top-4 right-4 bg-red-50 text-red-500 p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                    title="Excluir/Resolvido"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>

                  <div className="mb-4 pr-8">
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-blue-800 text-yellow-400 rounded-md tracking-tighter">
                      {fb.category}
                    </span>
                    <span className="ml-2 text-[9px] font-bold text-slate-400 uppercase">{fb.timestamp}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      "{fb.message}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black text-blue-900 uppercase tracking-widest">
                        {fb.anonymous ? '👤 Envio Anônimo' : fb.name}
                      </p>
                      {!fb.anonymous && <p className="text-[10px] text-slate-400 font-bold uppercase">{fb.grade}</p>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                  <Icons.Bell />
                </div>
                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Tudo em ordem!</h3>
                <p className="text-slate-400 text-sm mt-2">Nenhuma nova sugestão para exibir no momento.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Intro */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Ouvidoria Estudantil</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A sua opinião é o motor de mudança da escola. Use este espaço para ajudar o Grêmio a identificar o que precisa ser melhorado.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-700">
                  <Icons.Info />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Escuta Ativa</h4>
                  <p className="text-[11px] text-slate-500">Todas as mensagens são lidas pela diretoria do Grêmio.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <Icons.Studies />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Pautas Mensais</h4>
                  <p className="text-[11px] text-slate-500">As melhores ideias viram projetos oficiais da escola.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
              <div className="flex items-center justify-between mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="flex flex-col">
                    <span className="text-sm font-black text-blue-900 uppercase tracking-widest">Identificação</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">O anonimato é garantido se desejar</span>
                 </div>
                 <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={formData.anonymous}
                        onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                      />
                      <div className={`w-14 h-8 rounded-full shadow-inner transition-colors ${formData.anonymous ? 'bg-blue-800' : 'bg-slate-200'}`}></div>
                      <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-lg transition-transform ${formData.anonymous ? 'translate-x-6' : ''}`}></div>
                    </div>
                    <span className={`ml-3 text-[10px] font-black uppercase tracking-widest ${formData.anonymous ? 'text-blue-800' : 'text-slate-400'}`}>
                      {formData.anonymous ? 'Anônimo' : 'Identificado'}
                    </span>
                 </label>
              </div>

              {!formData.anonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-top-4 duration-300">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Seu Nome</label>
                    <input 
                      type="text" 
                      required={!formData.anonymous}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Série / Sala</label>
                    <input 
                      type="text" 
                      required={!formData.anonymous}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700"
                      placeholder="Ex: 3º B"
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Categoria</label>
                <select 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700 appearance-none font-bold text-sm uppercase tracking-wider"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Sugestão</option>
                  <option>Reclamação de Infraestrutura</option>
                  <option>Elogio</option>
                  <option>Merenda</option>
                  <option>Esportes / Interclasses</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Detalhes da Mensagem</label>
                <textarea 
                  required
                  rows={6}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700 resize-none leading-relaxed"
                  placeholder="Escreva aqui o que você pensa sobre a escola..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-800 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs shadow-lg active:scale-95 flex items-center justify-center space-x-3"
              >
                <span>Enviar para a Gestão</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
