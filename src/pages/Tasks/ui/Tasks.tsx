import "./Tasks.css";
import socialIcon from "../../../assets/avatar-svgrepo-com.svg";
import coin from "../../../assets/coin-v2.svg";
import { formatNumberWithoutCurrency } from "../../../shared/funcs";
import WebApp from "@twa-dev/sdk";

type Task = {
  title: string;
  cost: number;
  icon: string;
};

const tasks: Task[] = [
  {
    title: "Subsribe",
    cost: 4000,
    icon: coin,
  },
  {
    title: "HUI",
    cost: 100000,
    icon: socialIcon,
  },
];

export default function Tasks(): JSX.Element {
  const handleClick = () => {
    WebApp.HapticFeedback.impactOccurred("light");
  }

  return (
    <div className="tasks-page">
      <div className="tasks-page__title">Tasks</div>
      <div className="tasks-page__list">
        {tasks.map((task) => (
          <div className="tasks-page__list-item">
            <div className="tasks-page__list-item__left-side">
              <img src={task.icon} className="task-page__list-item__icon" />
              <div className="tasks-page__list-item__name">
                <div className="tasks-page__list-item__name-title">{task.title}</div>
                <div className="tasks-page__list-item__name-score">
                  <div className="tasks-page__list-item__name-score-cost">
                    {`+${formatNumberWithoutCurrency(task.cost, "en-US")}`}
                  </div>
                  <img
                    src={coin}
                    className="tasks-page__list-item__name-score-coin"
                  />
                </div>
              </div>
            </div>
            <div className="tasks-page__list-item__right-side">
              <button onClick={handleClick} className="tasks-page__list-item__right-side__button">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
