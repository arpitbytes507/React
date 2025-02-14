import { useState, useEffect } from 'react';
import { InputBox } from '../components'; // Assuming you have an InputBox component
import   useinfo  from "../components/useinfo"
import './index.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('kdr');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyinfo = useinfo(from);

  // To avoid errors in case the currency info isn't available immediately
  useEffect(() => {
    if (currencyinfo && currencyinfo[to]) {
      setConvertedAmount(amount * currencyinfo[to]);
    }
  }, [amount, from, to, currencyinfo]);

  const opt = Object.keys(currencyinfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // Swap the amounts as well
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyinfo[to]) {
      setConvertedAmount(amount * currencyinfo[to]);
    }
  };

  return (
    <div className="flex p-7 justify-center">
      <h1 className="text-center text-3xl bg-red-200">Currency Converter</h1>
      <div>
        <InputBox
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputBox
          label="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <InputBox
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <div>
          <button onClick={convert}>Convert</button>
          <button onClick={swap}>Swap</button>
        </div>
        <div>
          <h2>Converted Amount: {convertedAmount}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
