
import { FeedbackEntry } from './types';

const STORAGE_KEY = 'portal_estudantil_feedbacks';

export const feedbackStore = {
  // Salva um novo feedback
  save: (entry: Omit<FeedbackEntry, 'id' | 'timestamp'>): FeedbackEntry => {
    const feedbacks = feedbackStore.getAll();
    const newEntry: FeedbackEntry = {
      ...entry,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleString('pt-BR'),
    };
    
    feedbacks.unshift(newEntry); // Adiciona no início
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
    return newEntry;
  },

  // Busca todos os feedbacks
  getAll: (): FeedbackEntry[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Remove um feedback específico
  remove: (id: string) => {
    const feedbacks = feedbackStore.getAll();
    const filtered = feedbacks.filter(fb => fb.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  // Gera um arquivo para download
  exportData: () => {
    const data = feedbackStore.getAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `feedbacks_americo_franco_${new Date().toLocaleDateString().replace(/\//g, '-')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  },

  // Limpa todos os feedbacks
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
