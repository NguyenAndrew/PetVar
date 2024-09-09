import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)
  const healthResult = useQuery(
    { 
      queryKey: ['health'], 
      queryFn: async () => {
        const result = await axios.get("./health");
        return result.data;
      }
    }
  )
  const pocketbaseMessageResult = useQuery(
    { 
      queryKey: ['pocketbaseMessage'], 
      queryFn: async () => {
        const result = await axios.get("./pocketbase-message");
        return result.data;
      },
      refetchInterval: 2500
    }
  )

  if (healthResult.isLoading || pocketbaseMessageResult.isLoading) {
    return <>Loading...</>
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <p>
          The health of the backend: {healthResult.data ? healthResult.data : "Backend is Offline"}
        </p>
        <p>
          The message from Pocketbase: {pocketbaseMessageResult.data ? pocketbaseMessageResult.data : "N/A"}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
