import React, { useState } from 'react';
import Blocks from './Blocks';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const [display, setDisplay] = useState('0');
  const updateDisplay = (newObj, label) => {
    if (label === '=' && !newObj.total) {
      setDisplay('0');
      setOperation(null);
      setNext(null);
      setTotal(null);
    } else if (label === '=' && newObj.total) {
      setDisplay(newObj.total);
      setTotal(newObj.total);
      setNext(null);
      setOperation(null);
    } else if (label === '%' && !newObj.next && !newObj.total) {
      setDisplay('0');
      setOperation(null);
    } else if (newObj.operation === label) {
      setDisplay(`${newObj.total} ${newObj.operation}`);
    } else if (newObj.next) {
      setDisplay(newObj.next);
    } else if (label === 'AC') {
      setDisplay('0');
    }
  };

  const handleCalculate = (label) => {
    const newObj = calculate({ total, next, operation }, label);
    setTotal(newObj.total);
    setNext(newObj.next);
    setOperation(newObj.operation);
    updateDisplay(newObj, label);
  };

  const calculatorOptions = [
    {
      label: 'AC',
    },
    {
      label: '+/-',
    },
    {
      label: '%',
    },
    {
      label: '÷',
      code: 'k',
    },
    {
      label: '7',
    },
    {
      label: '8',
    },
    {
      label: '9',
    },
    {
      label: 'x',
      code: 'k',
    },
    {
      label: '4',
    },
    {
      label: '5',
    },
    {
      label: '6',
    },
    {
      label: '-',
      code: 'k',
    },
    {
      label: '1',
    },
    {
      label: '2',
    },
    {
      label: '3',
    },
    {
      label: '+',
      code: 'k',
    },
    {
      label: '0',
    },
    {
      label: '.',
    },
    {
      label: '=',
      code: 'k',
    },
  ];

  return (
    <div className="calculator">
      <h3>Let's do some math!</h3>
      <div className="calculator__container">
        <div className="calculator__cell">{display}</div>
        {calculatorOptions.map((option) => (
          <Blocks
            key={option.label}
            label={option.label}
            code={option.code ? option.code : ''}
            handleCalculate={handleCalculate}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
