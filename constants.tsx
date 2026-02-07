
import React from 'react';
import { Announcement, NewsItem, EventDate, Book, GameResult, Album } from './types.ts';

export const SCHOOL_NAME = "EE Américo Franco";

export const ALBUMS: Album[] = [
  { 
    id: 1,
    title: "Formatura 3º Ano 2023", 
    date: "Dez 2023",
    cover: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800"
    ]
  },
  { 
    id: 2,
    title: "Interclasses de Primavera", 
    date: "Nov 2023",
    cover: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800",
      "https://images.unsplash.com/photo-1461891211039-4967d1c237e6?q=80&w=800"
    ]
  },
  { 
    id: 3,
    title: "Feira de Profissões", 
    date: "Out 2023",
    cover: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800"
    ]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: 1, title: "Início das Aulas - 1º Semestre 2024", date: "05/02/2024", category: "Geral", content: "Sejam bem-vindos! As aulas iniciam oficialmente para todos os períodos. Compareçam uniformizados e com documento de identificação." },
  { id: 2, title: "Atualização Cadastral Necessária", date: "10/02/2024", category: "Urgente", content: "Todos os alunos devem atualizar o endereço e telefone na secretaria para fins de emissão do cartão transporte." },
  { id: 3, title: "Reunião do Grêmio Estudantil", date: "15/02/2024", category: "Evento", content: "Primeira reunião aberta do ano no pátio central durante o intervalo do período matutino e vespertino." },
  { id: 4, title: "Entrega de Kit Escolar", date: "20/02/2024", category: "Geral", content: "A entrega dos kits enviados pelo estado será realizada por ordem alfabética na biblioteca." },
];

export const NEWS: NewsItem[] = [
  { 
    id: 1, 
    title: "Novo Portal do Aluno Entra no Ar", 
    excerpt: "A EE Américo Franco agora conta com um canal digital exclusivo para os estudantes acompanharem tudo o que acontece na unidade.", 
    content: "É com grande satisfação que o Grêmio Estudantil, em parceria com a diretoria, apresenta o novo Portal Estudantil da EE Américo Franco. Este canal foi desenvolvido para centralizar todas as informações relevantes: de avisos urgentes a tabelas de jogos interclasses e materiais de apoio para o ENEM. Nosso objetivo é aumentar a transparência e o engajamento de toda a comunidade escolar.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop", 
    date: "Fev 2024" 
  },
  { 
    id: 2, 
    title: "Preparação para o ENEM 2024", 
    excerpt: "Professores da área de linguagens iniciam ciclo de oficinas focadas em redação nota mil. Confira os horários das monitorias.", 
    content: "O sucesso no ENEM começa agora! A equipe de Linguagens da nossa escola estruturou um cronograma intensivo de monitorias de redação. As aulas ocorrerão todas as terças e quintas-feiras, no contraturno escolar, na sala de multimídia. Não perca a oportunidade de garantir sua vaga na universidade pública.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", 
    date: "Fev 2024" 
  },
  { 
    id: 3, 
    title: "Revitalização da Quadra Poliesportiva", 
    excerpt: "Com apoio do Grêmio, a quadra recebeu nova pintura para os jogos interclasses que se aproximam.", 
    content: "A prática de esportes é fundamental para o desenvolvimento dos nossos jovens. Por isso, a quadra poliesportiva da EE Américo Franco passou por uma revitalização completa. As marcações de futsal, vôlei e basquete foram refeitas seguindo os padrões oficiais.",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop", 
    date: "Jan 2024" 
  },
];

export const EVENT_DATES: EventDate[] = [
  { id: 1, title: "Conselho de Classe (Sem Aula)", date: "25/03", type: "Evento" },
  { id: 2, title: "Inscrições Interclasses", date: "01/04", type: "Evento" },
  { id: 3, title: "Simulado 1º Bimestre", date: "15/04", type: "Prova" },
  { id: 4, title: "Prazo Isenção ENEM", date: "10/05", type: "Vestibular" },
];

export const RECOMMENDED_BOOKS: Book[] = [
  { title: "Dom Casmurro", author: "Machado de Assis", grade: "1ª Série" },
  { title: "Vidas Secas", author: "Graciliano Ramos", grade: "2ª Série" },
  { title: "Angústia", author: "Graciliano Ramos", grade: "3ª Série" },
  { title: "Quincas Borba", author: "Machado de Assis", grade: "3ª Série" },
  { title: "Capitães da Areia", author: "Jorge Amado", grade: "2ª Série" },
];

export const FUTSAL_RESULTS: GameResult[] = [
  { teamA: "3º A", scoreA: 5, teamB: "3º B", scoreB: 2, status: "Finalizado", date: "15/11/23" },
  { teamA: "2º C", scoreA: 1, teamB: "1º A", scoreB: 4, status: "Finalizado", date: "16/11/23" },
];

export const CHESS_RESULTS: GameResult[] = [
  { teamA: "Lucas (3ºB)", scoreA: 1, teamB: "Mateus (2ºA)", scoreB: 0, status: "Finalizado", date: "20/11/23" },
];

export const Icons = {
  Home: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  School: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Studies: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  Trophy: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Bell: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
  Photo: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Info: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Instagram: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
};
