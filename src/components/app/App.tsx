import Counter from "../counter/Counter";
import style from "./app.module.css";
import cn from "classnames";

function App() {
  return (
    <div className={cn(style.container)}>
      <Counter title="Счётчик" start={0} min={-20} max={20} step={10} />
    </div>
  );
}

export default App;
