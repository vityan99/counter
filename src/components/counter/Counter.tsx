import { useEffect, useState } from "react";
import Button from "../button/Button";
import style from "./counter.module.css";
import cn from "classnames";

import useCounter from "../../customHooks/useCounter/useCounter";

interface ICounter {
  title: string;
  start: number;
  min: number;
  max: number;
  step: number;
}

function Counter({ title, start, min, max, step }: ICounter) {
  const [count, { increment, decrement, init, getColor, resetClickHandler }] = useCounter({
    start,
    min,
    max,
    step,
  });

  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);

    const timeoutID = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [count]);

  return (
    <div className={cn(style.counter)}>
      <h2 className={cn(style.counter__title)}>{title}</h2>
      <span className={cn(style.counter__value, animate && style["counter--animate"])} style={{ color: getColor() }} onClick={init}>
        {count}
      </span>

      <div className={cn(style.counter__controls)}>
        <Button title={"-"} clickHandler={decrement} />
        <Button title={"Сбросить"} clickHandler={resetClickHandler} />
        <Button title={"+"} clickHandler={increment} />
      </div>
    </div>
  );
}

export default Counter;
