import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const option = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div>
              <button type="button" onClick={swap}>
                swap
              </button>
            </div>
            <div>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
