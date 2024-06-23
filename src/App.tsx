import { useEffect } from "react";
import "./App.css";
import WebApp from "@twa-dev/sdk";
import { useUserData } from "./store";
import { Header } from "./widgets/Header";
import { BottomNavigation } from "./widgets/BottomNavigation";
import TgAppRoutes from "./routes/tgAppRoutes/ui/TgAppRoutes";
import bg from "./assets/bg.mp4";

function App() {
  const { init } = useUserData((state) => state);

  useEffect(() => {
    init(WebApp.initDataUnsafe.user ?? ({} as any));
  }, []);

  return (
    <>
      <div className="filter"/>
      <video className='video' playsInline autoPlay loop muted>
        <source src={bg} type='video/mp4' />
      </video>
      <Header />
      <TgAppRoutes />
      <BottomNavigation />
      {/* <div id="viewport"></div>
      <div id="viewport-params-size"></div>
      <div id="viewport-params-expand"></div> */}
    </>
  );
}

export default App;
