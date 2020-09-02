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
    console.log("first: ", first, " second: ", display, " operation: ", operation);
    let result;
    const second = parseInt(display);
    switch (operation) {
      case "/":
        result = first / second;
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
        setFirst(parseInt(display));
      }
    } else if (btn === "C") {
      setDisplay("0");
      setFirst();
    } else if (btn === "=") {
      console.log("display: ", display);
      if (first) {
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
