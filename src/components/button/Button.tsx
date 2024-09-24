import style from "./button.module.css";
import cn from "classnames";

interface IButton {
  title: string;
  clickHandler: () => void;
}

export default function Button({ title, clickHandler }: IButton) {
  return (
    <button className={cn(style.button)} onClick={clickHandler}>
      {title}
    </button>
  );
}
