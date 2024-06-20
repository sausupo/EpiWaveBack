import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  // const [count, setCount] = useState(0)
  const count = WebApp.CloudStorage.getItem("count") as unknown as string;

  const click = () => {
    const sum = Number(count) + 1;

    WebApp.CloudStorage.setItem("count", String(sum));
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
          count is {count}
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