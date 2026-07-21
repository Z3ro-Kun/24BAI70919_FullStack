import { useState } from "react";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState(0);

  const rates = useCurrency(from);

  const currencies = Object.keys(rates);

  function convert() {
    if (!amount || !rates[to]) return;
    setConverted((amount * rates[to]).toFixed(2));
  }

  return (
    <div>
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <label>From: </label>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <br />
      <br />

      <label>To: </label>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <br />
      <br />

      <button onClick={convert}>Convert</button>

      <h3>Converted Amount: {converted}</h3>
    </div>
  );
}

export default App;