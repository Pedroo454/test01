import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import { Album } from '../types';

const GalleryPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setLightboxIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % selectedAlbum.images.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 animate-in">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 italic">
              {selectedAlbum ? selectedAlbum.title : "Galeria Américo Franco"}
            </h1>
            <p className="text-slate-600 max-w-2xl">
              {selectedAlbum 
                ? `Registros do evento realizado em ${selectedAlbum.date}.` 
                : "Registros históricos e momentos especiais vividos por nossos alunos."}
            </p>
          </div>
          {selectedAlbum && (
            <button 
              onClick={closeAlbum}
              className="flex items-center space-x-2 text-blue-800 font-bold hover:text-blue-600 transition-colors bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100 uppercase text-xs tracking-widest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Voltar aos Álbuns</span>
            </button>
          )}
        </div>
      </div>

      {!selectedAlbum && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALBUMS.map((album) => (
            <div 
              key={album.id} 
              className="group cursor-pointer"
              onClick={() => openAlbum(album)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] border-4 border-white transition-all hover:shadow-2xl">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-all duration-300 pr-6">
                  <h3 className="text-xl font-bold mb-1 leading-tight">{album.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-blue-800/50 px-2 py-0.5 rounded-full">
                      {album.images.length} Fotos
                    </span>
                    <span className="text-xs text-blue-200">Clique para abrir</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAlbum && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in zoom-in duration-500">
          {selectedAlbum.images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors"></div>
            </div>
          ))}
        </div>
      )}

      {lightboxIndex !== null && selectedAlbum && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-950/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-[110]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={prevPhoto} className="absolute left-0 sm:-left-12 text-white hover:text-yellow-400 p-4 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextPhoto} className="absolute right-0 sm:-right-12 text-white hover:text-yellow-400 p-4 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <img src={selectedAlbum.images[lightboxIndex]} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white/10 animate-in zoom-in duration-300" alt="" />
            <div className="mt-8 text-center text-white">
              <h2 className="text-xl font-bold text-yellow-400">{selectedAlbum.title}</h2>
              <p className="text-blue-200 text-sm mt-1">Foto {lightboxIndex + 1} de {selectedAlbum.images.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;