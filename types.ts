
export type Page = 'home' | 'school' | 'studies' | 'interclasses' | 'announcements' | 'gallery' | 'about' | 'feedback';

export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: 'Geral' | 'Urgente' | 'Evento';
  content: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface EventDate {
  id: number;
  title: string;
  date: string;
  type: 'Prova' | 'Vestibular' | 'Evento';
}

export interface Book {
  title: string;
  author: string;
  grade: string;
}

export interface GameResult {
  teamA: string;
  scoreA: number;
  teamB: string;
  scoreB: number;
  status: 'Finalizado' | 'Agendado';
  date: string;
}
