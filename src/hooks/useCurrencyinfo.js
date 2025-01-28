import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setInfo(res[currency]))
      .catch((error) => console.error("Error fetching currency info:", error));
  }, [currency]);

  // console.log(info);
  return info;
}

export default useCurrencyInfo;
