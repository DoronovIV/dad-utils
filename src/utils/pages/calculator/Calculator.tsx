import React, { FC, useState } from 'react';
import './Calculator.scss';
import { Button } from 'react-bootstrap';

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
  const [str, setStr] = useState(0);

  return (
    <div className="calculator">
      <div className="stats">
        <div>
          <div>Strength</div>
          <div>
            <Button
              onClick={() => {
                setStr(str - 1);
              }}>
              {'<'}
            </Button>
            {str}
            <Button
              onClick={() => {
                setStr(str + 1);
              }}>
              {'>'}
            </Button>
          </div>
        </div>
        <div>Vigor</div>
        <div>Agility</div>
        <div>Dexterity</div>
        <div>Will</div>
        <div>Knowledge</div>
        <div>Resourcefullness</div>
      </div>
    </div>
  );
};

export default Calculator;
