// src/components/CompoundInterestCalculator/Chart.js
import React from "react";
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
import { formatCurrency } from "../../utils/formatting";

const Chart = ({ data }) => (
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
);

export default Chart;
