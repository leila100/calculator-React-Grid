import React, { useState } from "react";

import Display from "./Display";
import { Container } from "../styling/CalculatorStyles";
import { Button } from "../styling/Button";

const buttons = ["/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+"];

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [first, setFirst] = useState();
  const [operation, setOperation] = useState();

  const executeOperation = () => {
    if (!operation) return;
    let result;
    const second = parseFloat(display);
    switch (operation) {
      case "/":
        result = first / second;
        if (first % second !== 0) result = result.toFixed(2);
        break;
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "x":
        result = first * second;
        break;
      default:
        result = null;
    }
    return result;
  };

  const clickHandler = (btn) => {
    if (btn === "/" || btn === "+" || btn === "x" || btn === "-") {
      setOperation(btn);
      if (!first) {
        // Save the first number in first
        setFirst(parseFloat(display));
      } else {
        // continue to next operation without hitting the = button
        const result = executeOperation();
        setDisplay(result.toString());
        setFirst(result);
      }
    } else if (btn === "C") {
      setDisplay("0");
      setFirst();
    } else if (btn === "=") {
      if (first && operation) {
        const result = executeOperation();
        setDisplay(result.toString());
        setFirst();
        setOperation();
      }
    } else {
      if (!operation || first) setDisplay("0");
      setDisplay((prevDisplay) => (prevDisplay === "0" ? btn : prevDisplay + btn));
    }
  };

  return (
    <Container>
      <Display display={display} />
      <Button cancel onClick={() => clickHandler("C")}>
        C
      </Button>
      {buttons.map((btn) => (
        <Button key={btn} onClick={() => clickHandler(btn)}>
          {btn}
        </Button>
      ))}
      <Button zero onClick={() => clickHandler("0")}>
        0
      </Button>
      <Button equal onClick={() => clickHandler("=")}>
        =
      </Button>
    </Container>
  );
};

export default Calculator;
