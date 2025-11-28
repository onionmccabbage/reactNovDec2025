import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* we write our application page content here */}
      <section>
        <h3>Welcome to React</h3>
        <p>Count is {count}</p>
      </section>
    </>
  )
}

export default App
