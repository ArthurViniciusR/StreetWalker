// ProgressContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipagem do contexto
type ProgressContextType = {
  totalConsumo: number;
  setTotalConsumo: (value: number) => void;
};

// Criação do contexto
const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Componente Provider do Contexto
export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [totalConsumo, setTotalConsumo] = useState(0);

  return (
    <ProgressContext.Provider value={{ totalConsumo, setTotalConsumo }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
