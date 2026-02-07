import React from 'react';
import { SCHOOL_NAME, Icons } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 italic">Sobre o Portal</h1>
      <section className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Nossa Instituição</h2>
        <p className="text-slate-600 leading-relaxed">A {SCHOOL_NAME} é uma escola dedicada ao protagonismo juvenil e à excelência acadêmica na rede pública.</p>
      </section>
    </div>
  );
};

export default AboutPage;