
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
    
    feedbacks.unshift(newEntry); // Adiciona no início do mural administrativo
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
    return newEntry;
  },

  // Busca todos os feedbacks (apenas para o mural restrito)
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

  // Gera um arquivo formatado para fins de relatório administrativo
  exportData: () => {
    const data = feedbackStore.getAll();
    let content = "RELATÓRIO DE OUVIDORIA - EE AMÉRICO FRANCO\n";
    content += `Data de Geração: ${new Date().toLocaleString()}\n`;
    content += "====================================================\n\n";

    data.forEach((fb, index) => {
      content += `FEEDBACK #${index + 1}\n`;
      content += `ID: ${fb.id}\n`;
      content += `DATA: ${fb.timestamp}\n`;
      content += `CATEGORIA: ${fb.category}\n`;
      content += `AUTOR: ${fb.anonymous ? 'ANÔNIMO' : fb.name} (${fb.grade})\n`;
      content += `MENSAGEM: ${fb.message}\n`;
      content += "----------------------------------------------------\n\n";
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio_ouvidoria_${new Date().toLocaleDateString().replace(/\//g, '-')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  },

  // Limpa todos os feedbacks
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
