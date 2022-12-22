import React from "react";
import { useState } from "react";
import "./style/_calc.scss";

function App() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState();

  const handleClick = (e) => {
    const { value } = e.target;
    let numbers = input;

    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setInput(`${input} ${value} `);
    } else if (value === ".") {
      if (!input.includes(".")) {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  // else if (value === "=") {
  //   const result = calculate(input);
  //   setTotal(result);

  const calculate = () => {
    const numbers = input.split(" ");

    let result = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i += 2) {
      const operator = numbers[i];
      const operand = parseFloat(numbers[i + 1]);
      console.log(operator, operand);
      if (operator === "+") {
        result += operand;
      } else if (operator === "-") {
        result -= operand;
      } else if (operator === "x") {
        result *= operand;
      } else {
        result /= operand;
      }
    }
    return setTotal(result);
  };

  const handleDelete = () => {
    let newInput = input.slice(0, -1);
    return setInput(newInput);
  };
  return (
    <div className="calculator">
      <div className="equation-container">
        <div className="darkMode"></div>
        <div className="equation">{input}</div>
        <div className="total">{total}</div>
        {/* <input type="text" value={num1} onChange={num1} className="equation" />
        <input type="text" value={num2} className="total" /> */}
      </div>
      <div className="btn-container">
        <div className="flex-group">
          <button onClick={handleClick} value="ac">
            AC
          </button>
          <button onClick={handleClick} value="%">
            %
          </button>
          <button onClick={handleClick} value="+">
            +
          </button>
          <button value="c" onClick={handleDelete}>
            C
          </button>
        </div>
        <div className="flex-group">
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button onClick={handleClick} value="-">
            -
          </button>
        </div>
        <div className="flex-group">
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="/">
            /
          </button>
        </div>
        <div className="flex-group">
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="x">
            x
          </button>
        </div>
        <div className="flex-group last-group">
          <button value="." onClick={handleClick}>
            .
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={calculate} value="=" className="flex2">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
