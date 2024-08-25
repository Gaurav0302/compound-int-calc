// src/components/CompoundInterestCalculator/ResultTable.js
import React from "react";
import styles from "./styles";
import { formatCurrency } from "../../utils/formatting";

const ResultTable = ({ data }) => (
  <div style={{ overflowX: "auto" }}>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={{ ...styles.th, textAlign: "left" }}>Year</th>
          <th style={{ ...styles.th, textAlign: "right" }}>Total Balance</th>
          <th style={{ ...styles.th, textAlign: "right" }}>
            Yearly Contribution
          </th>
          <th style={{ ...styles.th, textAlign: "right" }}>
            Total Contributions
          </th>
          <th style={{ ...styles.th, textAlign: "right" }}>Yearly Interest</th>
          <th style={{ ...styles.th, textAlign: "right" }}>Total Interest</th>
          <th style={{ ...styles.th, textAlign: "right" }}>
            Interest on Principal
          </th>
          <th style={{ ...styles.th, textAlign: "right" }}>
            Interest on Interest
          </th>
          <th style={{ ...styles.th, textAlign: "right" }}>ROI (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <td style={{ ...styles.td, textAlign: "left" }}>{row.year}</td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.balance)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.yearlyContribution)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.totalContributions)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.interestEarned)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.totalInterest)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.interestOnPrincipal)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>
              {formatCurrency(row.interestOnInterest)}
            </td>
            <td style={{ ...styles.td, textAlign: "right" }}>{row.roi}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ResultTable;
