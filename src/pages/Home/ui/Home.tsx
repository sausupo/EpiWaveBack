import { useState } from "react";
import "./Home.css";
import coin from "../../../assets/coin.png"
import WebApp from "@twa-dev/sdk";
// import clicker from "../../../../public/clickerv2.png";
import clicker from "../../../assets/clicker.png";

export default function Home(): JSX.Element {
  const [count, setCount] = useState(5000);

  const click = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    setCount(count + 1);
  };

  return (
    <div className="home-page">
      <div className="home-page__balance">
        <img src={coin} alt="coin" className="home-page__coin"/>
        <div className="home-page__count">{count}</div>
        
      </div>
      <div className="home-page__clicker" onTouchStart={click}>
      <img src={clicker} className="home-page__ff" alt="coin"/>
      </div>
    </div>
  );
}
