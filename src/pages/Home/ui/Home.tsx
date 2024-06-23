import { useState } from "react";
import "./Home.css";
import coin from "../../../assets/avatar-svgrepo-com.svg"

export default function Home(): JSX.Element {
  const [count, setCount] = useState(5000);

  const click = () => {
    setCount(count + 1);
  };

  return (
    <div className="home-page">
      <div className="home-page__balance">
        <img src={coin} alt="coin" className="home-page__coin"/>
        <div className="home-page__count">{count}</div>
      </div>
      <div className="home-page__clicker" onTouchStart={click} />
    </div>
  );
}
