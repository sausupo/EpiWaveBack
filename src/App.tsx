import { useEffect } from "react";
import "./App.css";
import WebApp from "@twa-dev/sdk";
import { useUserData } from "./store";
import { Header } from "./widgets/Header";
import { BottomNavigation } from "./widgets/BottomNavigation";
import TgAppRoutes from "./routes/tgAppRoutes/ui/TgAppRoutes";

function App() {
  const { init } = useUserData((state) => state);

  useEffect(() => {
    init(WebApp.initDataUnsafe.user ?? ({} as any));
  }, []);

  // useEffect(() => {
  //   WebApp.CloudStorage?.getItem("count", (error, result) => {setCount(error ? 0 : Number(result)); console.log(result)});
  // }, []);

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     WebApp.CloudStorage.setItem("count", String(count), (error, result) => WebApp.showAlert(`aboba ${error} ${result}`));
  //   }, 500)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [count])

  // const click = () => {
  //   const sum = count + 1;

  //   setCount(sum);
  //   WebApp.CloudStorage.setItem("count", String(sum), (error, result) => WebApp.showAlert(`aboba ${error} ${result}`));
  // }

  return (
    <>
      <Header />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>{`Привет ${WebApp.initDataUnsafe?.user?.last_name} ${WebApp.initDataUnsafe?.user?.first_name}`}</h1>
      <div className="card">
        <button onClick={click}>
          count is {count || 0}
        </button>
      </div> */}
      {/* Here we add our button with alert callback */}
      {/* <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
        <div>sfsafsfs {WebApp.initDataUnsafe?.user?.username}</div>
      </div> */}
      <TgAppRoutes />
      <BottomNavigation />
      {/* <div id="viewport"></div>
      <div id="viewport-params-size"></div>
      <div id="viewport-params-expand"></div> */}
    </>
  );
}

export default App;
