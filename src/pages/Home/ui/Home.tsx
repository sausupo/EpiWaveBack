import { useState } from "react";
import "./Home.css";
import coin from "../../../assets/coin.png"
import WebApp from "@twa-dev/sdk";

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
      <button style={{height: "100px", width: "100px"}} onClick={() => WebApp.HapticFeedback.impactOccurred("light")}>light</button>
        <button style={{height: "100px", width: "100px"}} onClick={() => WebApp.HapticFeedback.impactOccurred("heavy")}>heavy</button>
        <button style={{height: "100px", width: "100px"}} onClick={() => WebApp.HapticFeedback.impactOccurred("medium")}>medium</button>
        <button style={{height: "100px", width: "100px"}} onClick={() => WebApp.HapticFeedback.impactOccurred("rigid")}>rigid</button>
        <button style={{height: "100px", width: "100px"}} onClick={() => WebApp.HapticFeedback.impactOccurred("soft")}>soft</button>
      {/* <div className="home-page__clicker" onTouchStart={click}> */}
      {/* <img src={clicker} alt="coin"/> */}
      {/* </div> */}
    </div>
  );
}
