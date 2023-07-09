import { useState } from 'react';

export function CounterApp({valueInitial}) {
    const [value, setValue] = useState(valueInitial)
    const handleAdd = () => setValue(value+1);
    const handleSubstract = () => setValue(value-1);
    const handleReset = () => setValue(valueInitial);
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
            <button onClick={ handleSubstract }>-</button>
            <button onClick={ handleAdd }>+</button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </div>
    )
}