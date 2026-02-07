
import React, { useState } from 'react';
import { Page } from './types';
import { SCHOOL_NAME, Icons } from './constants';
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';
import StudiesPage from './pages/StudiesPage';
import InterclassesPage from './pages/InterclassesPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Início', icon: Icons.Home },
    { id: 'school', label: 'Escola', icon: Icons.School },
    { id: 'studies', label: 'Estudos', icon: Icons.Studies },
    { id: 'interclasses', label: 'Interclasses', icon: Icons.Trophy },
    { id: 'announcements', label: 'Avisos', icon: Icons.Bell },
    { id: 'gallery', label: 'Galeria', icon: Icons.Photo },
    { id: 'about', label: 'Sobre', icon: Icons.Info },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'school': return <SchoolPage />;
      case 'studies': return <StudiesPage />;
      case 'interclasses': return <InterclassesPage />;
      case 'announcements': return <AnnouncementsPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      case 'feedback': return <FeedbackPage onBack={() => setCurrentPage('home')} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="bg-yellow-400 p-1 rounded">
                <Icons.School />
              </div>
              <span className="font-bold text-lg hidden sm:inline">Portal Estudantil – {SCHOOL_NAME}</span>
              <span className="font-bold text-lg sm:hidden">{SCHOOL_NAME}</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                    currentPage === item.id ? 'bg-blue-700 text-yellow-400' : 'hover:bg-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-900 border-t border-blue-700 absolute w-full transition-all duration-300">
            <nav className="flex flex-col p-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as Page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-left transition-all ${
                    currentPage === item.id ? 'bg-blue-700 text-yellow-400' : 'hover:bg-blue-700'
                  }`}
                >
                  <item.icon />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">EE Américo Franco</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Escola Pública Estadual<br />
                Diretoria de Ensino: Itaquaquecetuba<br />
                Plataforma oficial gerida pelo Grêmio Estudantil.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                 <a href="https://instagram.com/americo_franco" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition-colors">
                    <Icons.Instagram />
                 </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-widest text-yellow-400">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><button onClick={() => setCurrentPage('announcements')} className="hover:text-yellow-400 transition-colors">Comunicados</button></li>
                <li><button onClick={() => setCurrentPage('studies')} className="hover:text-yellow-400 transition-colors">Estudos & Vestibulares</button></li>
                <li><button onClick={() => setCurrentPage('interclasses')} className="hover:text-yellow-400 transition-colors">Interclasses</button></li>
                <li><button onClick={() => setCurrentPage('feedback')} className="hover:text-yellow-400 transition-colors">Ouvidoria & Sugestões</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-widest text-yellow-400">Contato</h4>
              <p className="text-sm text-blue-200">
                Email: e907030a@educacao.sp.gov.br<br />
                Tel: (11) 4636-6322 / 4636-0433<br />
                Endereço: Rua Dobrada, 65 – Jardim São José, Poá – SP, CEP 08567-360
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-400">
            &copy; {new Date().getFullYear()} {SCHOOL_NAME}. Todos os direitos reservados. 
            <br />Desenvolvido pelo Grêmio Estudantil.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
