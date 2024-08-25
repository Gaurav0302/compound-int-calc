// src/components/CompoundInterestCalculator/styles.js
const styles = {
  container: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "200px",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "fit-content",
  },
  table: {
    minWidth: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  th: {
    padding: "0.5rem",
    borderBottom: "1px solid #dee2e6",
    backgroundColor: "#f8f9fa",
  },
  td: {
    padding: "0.5rem",
    borderBottom: "1px solid #dee2e6",
  },
};

export default styles;
