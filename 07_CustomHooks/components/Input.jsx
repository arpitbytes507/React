import React from 'react'
import { useId } from 'react';
import "tailwindcss";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = "kdr",
    amountDisable = false,
    CurrencyDisable = false,
    classname = "",
}) {
  const amountId = useId();  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
        <div className="w-1/2">
           <label htmlFor = {amountId} className="text-black/40 mb-2 inline-block">{label}</label>
           <input id = {amountId} type="number" className="outline-none w-full bg-transparent py-1.5" placeholder='Amount' disabled={amountDisable}
           value={amount}
           onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled = {CurrencyDisable}
            >
                {CurrencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>  //remember the key for more optimization in loops in react
                ))}
            </select>
        </div>
      
    </div>
  );
}

export default InputBox;
