import { useState } from "react";
import "./Home.css";

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  return (
    <div className="home">
      <div className="count">{count}</div>
      <div className="clicker" onTouchStart={click} />
    </div>
  );
}
