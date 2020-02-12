import React from 'react'

export default function CurrencyRaw(props) {
    const {
        currencyOption,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
            <input type='number' className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOption.map(option => (
                  <option key={option} value={option}>{option}</option>    
                ))}    
            </select>   
        </div>
    )
}
