import { useEffect, useState } from 'react';
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    WebApp.CloudStorage?.getItem("count", (error, result) => {setCount(error ? 0 : Number(result)); console.log(result)});
  }, []);
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      WebApp.CloudStorage.setItem("count", String(count), (error, result) => WebApp.showAlert(`aboba ${error} ${result}`));
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [count])
  
  const click = () => {
    const sum = count + 1;

    setCount(sum);
    // WebApp.CloudStorage.setItem("count", String(sum), (error, result) => WebApp.showAlert(`aboba ${error} ${result}`));
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>{`Привет ${WebApp.initDataUnsafe?.user?.last_name} ${WebApp.initDataUnsafe?.user?.first_name}`}</h1>
      <div className="card">
        <button onClick={click}>
          count is {count || 0}
        </button>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
        <div>sfsafsfs {WebApp.initDataUnsafe?.user?.username}</div>
      </div>
    </>
  )
}

export default App