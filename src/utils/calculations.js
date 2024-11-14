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

  // Calculate for years 1 to N
  for (let year = 1; year <= years; year++) {
    // First add the yearly contribution
    const yearlyContribution = monthlyContribution * 12;
    balance += yearlyContribution;
    totalContributions += yearlyContribution;

    // Then calculate interest on the accumulated amount
    const interestEarned = balance * (rate / 100);
    totalInterest += interestEarned;
    balance += interestEarned;

    // Calculate interest components
    interestOnPrincipal = principal * (rate / 100) * year;
    interestOnInterest = totalInterest - interestOnPrincipal;

    const roi = ((balance - totalContributions) / totalContributions) * 100;

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

  // Insert initial state as year 0 at the beginning of the array
  data.unshift({
    year: 0,
    balance: principal,
    totalContributions: principal,
    yearlyContribution: 0,
    interestEarned: 0,
    totalInterest: 0,
    interestOnPrincipal: 0,
    interestOnInterest: 0,
    roi: "0.00",
  });

  return data;
};
