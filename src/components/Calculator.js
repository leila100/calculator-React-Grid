import React from "react";

import { Container } from "../styling/CalculatorStyles";
import { Button } from "../styling/Button";

const buttons = ["7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+"];

const Calculator = () => {
  return (
    <Container>
      {buttons.map((btn) => (
        <Button>{btn}</Button>
      ))}
    </Container>
  );
};

export default Calculator;
