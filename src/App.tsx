import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import { CalculatorProvider } from './CalculatorContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalculatorProvider>
        <div>
          <Calculator></Calculator>
        </div>
        </CalculatorProvider>
       
      </header>
    </div>
  );
}

export default App;
