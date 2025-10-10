import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"


function Home() {
  const [count, setCount] = useState(0)
    return (<div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition-[filter] duration-300 [will-change:filter] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition-[filter] duration-300 [will-change:filter] motion-safe:animate-[spin_20s_linear_infinite] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>);
}

export default Home;