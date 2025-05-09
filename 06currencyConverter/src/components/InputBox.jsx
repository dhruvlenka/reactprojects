import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,


    className = "",
}) {
    const amountInputId = useId(); //unique id for the amount input field
    return ( 
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  //binding the label to the input field
                       className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId} //binding the label to the input field
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value) && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Type */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"   
                    value={selectCurrency} 
                    onChange={(e) => onCurrencyChange(e.target.value) && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >   
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;