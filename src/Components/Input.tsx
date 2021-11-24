import React from "react";

interface NumberInputProps {
  name: string;
  increment: number;
  value: number;
  change: (val: number) => void;
}

export const NumberInput = ({ name, increment, value, change }: NumberInputProps) => {
  const increaseVal = () => {
    change(value + increment);
  }

  const decreaseVal = () => {
    change(value - increment);
  }

  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={decreaseVal} >-</button>
        <input type="number" value={value.toString()} onChange={e => change(e.target.valueAsNumber)}/>
        <button onClick={increaseVal} >+</button>
      </div>
    </div>
  )
};