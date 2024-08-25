import React from "react";
import CompoundInterestCalculator from "./components/CompoundInterestCalculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Compound Interest Calculator</h1>
      </header>
      <CompoundInterestCalculator />
    </div>
  );
}

export default App;
