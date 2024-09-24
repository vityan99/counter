import { useState } from "react";

interface IUseCounter {
  start: number;
  min: number;
  max: number;
  step: number;
}

type UseCounterReturnType = [
  number,
  {
    increment: () => void;
    decrement: () => void;
    init: () => void;
    getColor: () => string;
    resetClickHandler: () => void;
  }
];

const useCounter = ({ start, min, max, step }: IUseCounter): UseCounterReturnType => {
  const [value, setValue] = useState<number>(start);

  const increment = (): void => setValue((current) => Math.min(current + step, max));
  const decrement = (): void => setValue((current) => Math.max(current - step, min));
  const resetValue = (): void => setValue(start);
  const init = (): void => setValue(Number(prompt("Введите число")));
  const getColor = (): string => {
    return value < start ? "blue" : value === start ? "black" : "green";
  };
  const resetPrompt = (): boolean => window.confirm("Вы точно уверены");

  const resetClickHandler = (): void => {
    resetPrompt() && resetValue();
  };

  return [value, { increment, decrement, init, getColor, resetClickHandler }];
};

export default useCounter;
