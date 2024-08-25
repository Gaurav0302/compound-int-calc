// src/components/CompoundInterestCalculator/InputField.js
import React from "react";
import styles from "./styles";

const InputField = ({ label, id, ...props }) => (
  <div style={styles.inputGroup}>
    <label htmlFor={id} style={styles.label}>
      {label}
    </label>
    <input id={id} style={styles.input} {...props} />
  </div>
);

export default InputField;
