// src/components/CompoundInterestCalculator/index.js
import React, { useState } from "react";
import InputField from "./InputField";
import Chart from "./Chart";
import ResultTable from "./ResultTable";
import { useInput } from "../../hooks/useInput";
import { calculateCompoundInterest } from "../../utils/calculations";
import styles from "./styles";

const CompoundInterestCalculator = () => {
  const principal = useInput(1000);
  const rate = useInput(7);
  const years = useInput(40);
  const monthlyContribution = useInput(100);
  const [data, setData] = useState([]);

  const handleCalculate = () => {
    const result = calculateCompoundInterest(
      principal.value,
      rate.value,
      years.value,
      monthlyContribution.value
    );
    setData(result);
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <InputField
          label="Initial Investment ($)"
          id="principal"
          type="number"
          {...principal}
        />
        <InputField
          label="Annual Interest Rate (%)"
          id="rate"
          type="number"
          {...rate}
        />
        <InputField
          label="Investment Period (Years)"
          id="years"
          type="number"
          {...years}
        />
        <InputField
          label="Monthly Contribution ($)"
          id="monthlyContribution"
          type="number"
          {...monthlyContribution}
        />
      </div>
      <button onClick={handleCalculate} style={styles.button}>
        Calculate
      </button>
      {data.length > 0 && (
        <>
          <Chart data={data} />
          <ResultTable data={data} />
        </>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
