import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(40);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [data, setData] = useState([]);

  const calculateCompoundInterest = () => {
    let balance = principal;
    let totalContributions = principal;
    let totalInterest = 0;
    let interestOnPrincipal = 0;
    let interestOnInterest = 0;
    const newData = [];

    for (let year = 0; year <= years; year++) {
      const yearlyContribution = year === 0 ? 0 : monthlyContribution * 12;
      const interestEarned = balance * (rate / 100);

      interestOnPrincipal += totalContributions * (rate / 100);
      interestOnInterest = totalInterest * (rate / 100);

      totalContributions += yearlyContribution;
      totalInterest += interestEarned;
      balance += yearlyContribution + interestEarned;

      const totalInvestment = totalContributions;
      const roi =
        totalInvestment > 0
          ? ((balance - totalInvestment) / totalInvestment) * 100
          : 0;

      newData.push({
        year,
        balance: Math.round(balance),
        totalContributions: Math.round(totalContributions),
        yearlyContribution: Math.round(yearlyContribution),
        interestEarned: Math.round(interestEarned),
        totalInterest: Math.round(totalInterest),
        interestOnPrincipal: Math.round(interestOnPrincipal),
        interestOnInterest: Math.round(interestOnInterest),
        roi: roi.toFixed(2),
      });
    }

    setData(newData);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const inputStyle = {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "200px",
  };

  const containerStyle = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div>
          <label
            htmlFor="principal"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Initial Investment ($)
          </label>
          <input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="rate"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Annual Interest Rate (%)
          </label>
          <input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="years"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Investment Period (Years)
          </label>
          <input
            id="years"
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="monthlyContribution"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Monthly Contribution ($)
          </label>
          <input
            id="monthlyContribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
      </div>
      <button
        onClick={calculateCompoundInterest}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        Calculate
      </button>
      {data.length > 0 && (
        <>
          <div style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="balance"
                  name="Total Balance"
                  stroke="#8884d8"
                />
                <Line
                  type="monotone"
                  dataKey="totalContributions"
                  name="Total Contributions"
                  stroke="#82ca9d"
                />
                <Line
                  type="monotone"
                  dataKey="totalInterest"
                  name="Total Interest"
                  stroke="#ffc658"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                minWidth: "100%",
                borderCollapse: "collapse",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f8f9fa" }}>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "left",
                    }}
                  >
                    Year
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Total Balance
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Yearly Contribution
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Total Contributions
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Yearly Interest
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Total Interest
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Interest on Principal
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    Interest on Interest
                  </th>
                  <th
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #dee2e6",
                      textAlign: "right",
                    }}
                  >
                    ROI (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.year}
                    style={{ ":hover": { backgroundColor: "#f5f5f5" } }}
                  >
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "left",
                      }}
                    >
                      {row.year}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.balance)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.yearlyContribution)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.totalContributions)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.interestEarned)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.totalInterest)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.interestOnPrincipal)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {formatCurrency(row.interestOnInterest)}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #dee2e6",
                        textAlign: "right",
                      }}
                    >
                      {row.roi}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
