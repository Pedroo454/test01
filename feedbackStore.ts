
import { FeedbackEntry } from './types';
// Importações oficiais do Firebase via CDN compatível com ES6
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// ATENÇÃO: Substitua os valores abaixo com os dados do SEU console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxrqQN_V7pK5Se6UA_Puj0PRu_5gYswtc",
  authDomain: "amero-18031.firebaseapp.com",
  projectId: "amero-18031",
  storageBucket: "amero-18031.firebasestorage.app",
  messagingSenderId: "498834482489",
  appId: "1:498834482489:web:63a37c2c698f466ce974e8"
};

// Inicialização segura
let db: any = null;
try {
  // Só inicializa se o usuário trocou a chave padrão
  if (firebaseConfig.apiKey !== "AIzaSyBxrqQN_V7pK5Se6UA_Puj0PRu_5gYswtc") {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (e) {
  console.error("Erro ao conectar com Firebase:", e);
}

export const feedbackStore = {
  // Salva no Banco de Dados Cloud
  save: async (entry: Omit<FeedbackEntry, 'id' | 'timestamp'>): Promise<void> => {
    if (!db) {
      console.warn("Firebase não configurado. Salvando apenas localmente.");
      const current = JSON.parse(localStorage.getItem('fallback_feedbacks') || '[]');
      current.unshift({ ...entry, id: Date.now().toString(), timestamp: new Date().toLocaleString() });
      localStorage.setItem('fallback_feedbacks', JSON.stringify(current));
      return;
    }

    await addDoc(collection(db, 'feedbacks'), {
      ...entry,
      timestamp: new Date().toLocaleString('pt-BR'),
      serverTimestamp: new Date() // Usado para ordenação precisa
    });
  },

  // Busca de qualquer dispositivo
  getAll: async (): Promise<FeedbackEntry[]> => {
    if (!db) {
      return JSON.parse(localStorage.getItem('fallback_feedbacks') || '[]');
    }

    const q = query(collection(db, 'feedbacks'), orderBy('serverTimestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const results: FeedbackEntry[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      results.push({
        id: doc.id,
        name: data.name,
        grade: data.grade,
        category: data.category,
        message: data.message,
        anonymous: data.anonymous,
        timestamp: data.timestamp
      });
    });
    
    return results;
  },

  // Remove do Cloud (Resolvido)
  remove: async (id: string): Promise<void> => {
    if (!db) return;
    await deleteDoc(doc(db, 'feedbacks', id));
  },

  // Exporta o relatório consolidado
  exportJSON: async () => {
    const data = await feedbackStore.getAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio_gremio_nuvem.json`;
    link.click();
  }
};
