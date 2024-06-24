import { useEffect, useRef } from "react";
import "./App.css";
import WebApp from "@twa-dev/sdk";
import { useUserData } from "./store";
import { Header } from "./widgets/Header";
import { BottomNavigation } from "./widgets/BottomNavigation";
import TgAppRoutes from "./routes/tgAppRoutes/ui/TgAppRoutes";
import bgInit from "./assets/bg-init.mp4";
import bgMain from "./assets/bg-main.mp4";

function App() {
  const { init } = useUserData((state) => state);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
  const handleEnded = () => {
    if (videoRef2.current && videoRef1.current) {
      videoRef2.current.style.display = 'block';
      videoRef1.current.style.display = 'none';
      videoRef2.current.play();
    }
  };

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
    init(WebApp.initDataUnsafe.user ?? ({} as any));
  }, []);

  return (
    <>
      <div className="filter"/>
      <video
        ref={videoRef1}
        className='video'
        playsInline
        muted
        onEnded={handleEnded}
      >
      <source src={bgInit} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <video
        ref={videoRef2}
        className='video'
        playsInline
        muted 
        // autoPlay
        style={{ display: 'none' }}
        loop
      >
      <source src={bgMain} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      {/* <video className='video' playsInline autoPlay loop muted>
        <source src={bg} type='video/mp4' />
      </video> */}
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
