import "./Home.css";
import coin from "../../../assets/coin.png"
import { Clicker } from "../../../widgets/Clicker";
import useClicker from "../../../store/useClicker";

export default function Home(): JSX.Element {
  const count = useClicker(state => state.count)

  return (
    <div className="home-page">
      <div className="home-page__balance">
        <img src={coin} alt="coin" className="home-page__coin"/>
        <div className="home-page__count">{count}</div>
      </div>
      <Clicker/>
    </div>
  );
}
