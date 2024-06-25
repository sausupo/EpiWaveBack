import WebApp from "@twa-dev/sdk";
import useClicker from "../../../store/useClicker";
import clicker from "../../../assets/clicker.png";
import "./Clicker.css";
import { useState } from "react";
import { INCREMENT_VALUE } from "../../../shared/config";
import { v4 as uuidv4 } from 'uuid';

interface NumberPosition {
  id: string;
  left: number;
  top: number;
}

export default function Clicker(): JSX.Element {
  const increment = useClicker((state) => state.increment);

  const [numbers, setNumbers] = useState<NumberPosition[]>([]);
  // const [scaleX, setScaleX] = useState(1);

  const handleClick = (event: React.TouchEvent<HTMLDivElement>) => {
    increment();
    WebApp.HapticFeedback.impactOccurred("light");
    console.log(event);
    const { touches } = event; // Получение данных о касании
    const touch = touches[0]; // Берем только первое касание
    const newNumber: NumberPosition = {
      // id: new Date().getTime(),
      id: uuidv4(),
      left: touch.clientX, // Позиция числа по горизонтали
      top: touch.clientY, // Позиция числа по вертикали
    };
    setNumbers([...numbers, newNumber]); // Добавление числа в состояние
    // setScaleX(0.98);
  };

  const removeNumber = (id: string) => {
    setNumbers(numbers.filter((num) => num.id !== id));
  };

  // const handleTouchEnd = () => {
  //   setScaleX(1);
  // };

  return (
    <div
      onTouchStart={handleClick}
      // onTouchEnd={handleTouchEnd}
      className="clicker"
      // style={{ transform: `scaleX(${scaleX})` }}
    >
      {numbers.map((number) => (
        <AnimatedNumber
          key={number.id}
          number={number}
          onAnimationEnd={() => removeNumber(number.id)}
        />
      ))}
      <div className="glass">
        <img src={clicker} className="home-page__ff" alt="coin" />
      </div>
    </div>
  );
}

const AnimatedNumber: React.FC<{
  number: NumberPosition;
  onAnimationEnd: () => void;
}> = ({ number, onAnimationEnd }) => {
  return (
    <div
      className="animated-number"
      style={{ left: number.left, top: number.top }}
      onAnimationEnd={onAnimationEnd}
    >
      {`+${INCREMENT_VALUE}`}
    </div>
  );
};
