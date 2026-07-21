import { useEffect, useState } from "react";

function useCurrency(baseCurrency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, [baseCurrency]);

  return rates;
}

export default useCurrency;