import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';

function App() {
  let valueMax = Number(localStorage.getItem('counterMaxValue'))
  let valueMin = Number(localStorage.getItem('counterMinValue'))

  useEffect(() => {
    if (valueMax) {
      setMaxValue(valueMax)
    }
    if (valueMin) {
      setMinValue(valueMin)
    }

  })
  let [maxValue, setMaxValue] = useState<number>(valueMax)
  let [minValue, setMinValue] = useState<number>(valueMin)


  const changeValues = (max: number, min: number) => {
    setMaxValue(max)
    setMinValue(min)
    localStorage.setItem('counterMaxValue', JSON.stringify(max))
    localStorage.setItem('counterMinValue', JSON.stringify(min))
  }
  return (
    <div className="App">
      <Settings changeValues={changeValues} maxValue={maxValue} minValue={minValue} />
      <Counter maxValue={maxValue} minValue={minValue} />
    </div>
  );
}

export default App;
