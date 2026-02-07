
import React, { useState } from 'react';
import { Icons } from '../constants';

interface FeedbackPageProps {
  onBack: () => void;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    category: 'Sugestão',
    message: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <h2 className="text-3xl font-black text-blue-900 mb-4 italic">Sua voz foi ouvida!</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Obrigado por contribuir com a nossa escola. O Grêmio Estudantil analisará sua mensagem e, se necessário, entrará em contato ou levará a pauta para a diretoria.
          </p>
          <button 
            onClick={onBack}
            className="bg-blue-800 text-white font-black px-12 py-4 rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs shadow-lg"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-700 font-bold mb-8 hover:translate-x-1 transition-transform group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="uppercase text-xs tracking-widest">Voltar</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Intro */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Ouvidoria & Sugestões</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Este é o seu canal direto com o Grêmio Estudantil. Queremos saber o que pode ser melhorado na nossa escola.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-xl text-yellow-700">
                <Icons.Info />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Privacidade Garantida</h4>
                <p className="text-sm text-slate-500">Você pode escolher se identificar ou enviar de forma anônima.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                <Icons.Studies />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Pautas Escolares</h4>
                <p className="text-sm text-slate-500">Sugira eventos, melhorias na infraestrutura ou novos projetos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
            <div className="flex items-center justify-between mb-4">
               <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                    />
                    <div className={`w-10 h-6 rounded-full shadow-inner transition-colors ${formData.anonymous ? 'bg-yellow-400' : 'bg-slate-200'}`}></div>
                    <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transition-transform ${formData.anonymous ? 'translate-x-4' : ''}`}></div>
                  </div>
                  <span className="ml-3 text-sm font-bold text-slate-700 group-hover:text-blue-800 transition-colors uppercase tracking-widest">Enviar Anônimo?</span>
               </label>
            </div>

            {!formData.anonymous && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-top-4 duration-300">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    required={!formData.anonymous}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700"
                    placeholder="Seu nome"
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
                    placeholder="Ex: 3º A"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Categoria do Assunto</label>
              <select 
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700 appearance-none font-medium"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>Sugestão</option>
                <option>Reclamação</option>
                <option>Elogio</option>
                <option>Dúvida</option>
                <option>Outros</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-1">Sua Mensagem</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-yellow-400 focus:bg-white outline-none transition-all text-slate-700 resize-none"
                placeholder="Descreva aqui sua sugestão ou comentário detalhadamente..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-800 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs shadow-lg active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Enviar para o Grêmio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-tight">Suas informações são tratadas com respeito e seriedade.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
