// src/hooks/useInput.js
import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(Number(e.target.value)),
  };
};
