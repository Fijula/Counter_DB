import { Fragment, useState } from "react";
import "./App.css";
import Counter from "../components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount((prev) => (prev + 1 > 10 ? 10 : prev + 1));
  };
  const onDecrement = () => {
    setCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <Fragment>
      <div className="App">
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecremnt={onDecrement}
        />
      </div>
    </Fragment>
  );
}

export default App;
