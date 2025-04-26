import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CalculatorAction } from './components/CalculatorActions';



interface CalculatorContextType {
    currentValue: number | null;
    setCurrentValue: (value: number | null) => void;
    oldValue: number;
    setOldValue: (value: number) => void;
    currentAction: CalculatorAction | undefined;
    setCurrentAction: (value: CalculatorAction) => void;
}

// 3. Провайдер
interface CalculatorProviderProps {
  children: ReactNode;
}
const CalculatorContext = createContext<CalculatorContextType | null>(null);

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({children}) => { 

    const [currentValue, setCurrentValue] = useState<number | null>(0);
    const [oldValue, setOldValue] = useState<number>(0);
    const [currentAction, setCurrentAction] = useState<CalculatorAction>();
  
    // ✅ обязательно return JSX
    return (
      <CalculatorContext.Provider value={{
        currentValue,
        setCurrentValue,
        oldValue,
        setOldValue,
        currentAction,
        setCurrentAction,
      }}>
        {children}
      </CalculatorContext.Provider>
    );
  };
  
  export const useCalculatorContext = (): CalculatorContextType => {
    const context = useContext(CalculatorContext);
    if (!context) {
      throw new Error('useCalculatorContext must be used within a CalculatorProvider');
    }
    return context;
  };
