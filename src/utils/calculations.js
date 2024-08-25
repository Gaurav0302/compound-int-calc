// src/utils/calculations.js
export const calculateCompoundInterest = (
  principal,
  rate,
  years,
  monthlyContribution
) => {
  let balance = principal;
  let totalContributions = principal;
  let totalInterest = 0;
  let interestOnPrincipal = 0;
  let interestOnInterest = 0;
  const data = [];

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

    data.push({
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

  return data;
};
