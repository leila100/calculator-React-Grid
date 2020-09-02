import React from "react";

import Display from "./Display";
import { Container } from "../styling/CalculatorStyles";
import { Button } from "../styling/Button";

const buttons = ["/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+"];

const Calculator = () => {
  return (
    <Container>
      <Display />
      <Button cancel>C</Button>
      {buttons.map((btn) => (
        <Button key={btn}>{btn}</Button>
      ))}
      <Button zero>0</Button>
      <Button equal>=</Button>
    </Container>
  );
};

export default Calculator;
