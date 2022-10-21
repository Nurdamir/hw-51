import React, {useState} from 'react';
import './App.css';
import Number from "./Number/Number"

function App() {
  const [fiveNumbers, setFiveNumbers] = useState<number[]>([0, 0, 0, 0, 0]);

  const randomInteger = function (min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const changeNumbers = () => {
    let arr: number[] = [];

    for (let i = 0; i < 6; i++){
      let numb = randomInteger(5, 36);

      if (arr.includes(numb)) {
        return false;
      } else {
        arr.push(numb)
      }
    }

    arr.sort(function (a,b) {
      return a - b;
    });

    setFiveNumbers(arr);
  };

  return (
    <div className="App">
      <div className='numbers'>
        <Number number={fiveNumbers[0]}/>
        <Number number={fiveNumbers[1]}/>
        <Number number={fiveNumbers[2]}/>
        <Number number={fiveNumbers[3]}/>
        <Number number={fiveNumbers[4]}/>
      </div>

      <button className='button' onClick={changeNumbers}>Show new numbers</button>
    </div>
  );
};

export default App;
