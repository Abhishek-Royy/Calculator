import React, { useState } from "react";
import "../stylesheet/style.css";

const cal = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  // Function to handle digit and operator button clicks.
  const handleButtonClick = (value) => {
    if (value === "AC") {
      setCurrentValue("");
      setPreviousValue("");
      setOperator("");
    } else if (value === "=") {
      calculateResult();
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue("");
    } else if (value === "DEL") {
      setCurrentValue(currentValue.slice(0, -1));
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  // Function to perform the calculation and update the display.
  const calculateResult = () => {
    if (previousValue && operator && currentValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);

      switch (operator) {
        case "+":
          setCurrentValue((prev + current).toString());
          break;
        case "-":
          setCurrentValue((prev - current).toString());
          break;
        case "*":
          setCurrentValue((prev * current).toString());
          break;
        case "/":
          if (current === 0) {
            setCurrentValue("Error");
          } else {
            setCurrentValue((prev / current).toString());
          }
          break;
        default:
          break;
      }

      setPreviousValue("");
      setOperator("");
    }
  };

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous">{previousValue}</div>
          <div className="current">{currentValue}</div>
        </div>
        <button className="bigBtn" onClick={() => handleButtonClick("AC")}>
          AC
        </button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button className="bigBtn" onClick={() => handleButtonClick("=")}>
          =
        </button>
      </div>
    </>
  );
};

export default cal;
