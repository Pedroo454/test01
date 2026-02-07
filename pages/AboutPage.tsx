
import React from 'react';
import { SCHOOL_NAME, Icons } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 italic uppercase tracking-tighter">Sobre o Portal</h1>
        <p className="text-slate-600 text-lg leading-relaxed">Canal oficial de comunicação da EE Américo Franco.</p>
      </div>

      <div className="space-y-16">
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 italic">Nossa Instituição</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            A <strong>{SCHOOL_NAME}</strong> é uma escola da rede pública estadual de São Paulo, pertencente à <strong>Diretoria de Ensino de Itaquaquecetuba</strong>. Localizada em Poá, no bairro Jardim São José, nossa escola atua no desenvolvimento educacional e social de centenas de jovens.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Este portal foi criado para facilitar o acesso à informação, centralizando datas de provas, materiais de estudo e resultados de eventos esportivos organizados pelo Grêmio.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-6 italic">Grêmio Estudantil</h2>
            <p className="text-slate-600 leading-relaxed mb-4 italic font-medium">
              "Protagonismo Juvenil e Democracia Escolar."
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              O Grêmio é a organização que representa os estudantes dentro da escola. Somos responsáveis por promover eventos culturais, esportivos e representar os interesses dos alunos junto à gestão escolar.
            </p>
            <div className="flex items-center space-x-3 text-blue-600 font-bold">
               <a href="https://instagram.com/americo_franco" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-800 transition-colors">
                  <Icons.Instagram />
                  <span>Siga no Instagram</span>
               </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop" alt="Protagonismo Juvenil" className="w-full h-auto" />
          </div>
        </section>

        <section className="bg-blue-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-8 italic">Informações de Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white/10 rounded-xl">
              <span className="block font-black text-yellow-400 uppercase text-xs tracking-widest mb-2">E-mail Oficial</span>
              <p className="text-sm">e907030a@educacao.sp.gov.br</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <span className="block font-black text-yellow-400 uppercase text-xs tracking-widest mb-2">Telefones</span>
              <p className="text-sm">(11) 4636-6322<br/>(11) 4636-0433</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <span className="block font-black text-yellow-400 uppercase text-xs tracking-widest mb-2">Endereço</span>
              <p className="text-sm">Rua Dobrada, 65<br/>Jd. São José, Poá - SP</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
