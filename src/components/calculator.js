import React, { useState } from 'react';
import Blocks from './Blocks';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [prevState, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = (label) => {
    const { total, next, operation } = prevState;
    const newObj = calculate({ total, next, operation }, label);
    setState({
      total: newObj.total,
      operation: newObj.operation,
      next: newObj.next,
    });
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

  const { total, next } = prevState;
  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__cell">{total || next || '0'}</div>
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
