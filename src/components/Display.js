import React from "react";

import { DisplayContainer, Result } from "../styling/DisplayStyles";

const Display = ({ display }) => {
  return (
    <DisplayContainer>
      <Result>{display}</Result>
    </DisplayContainer>
  );
};

export default Display;
