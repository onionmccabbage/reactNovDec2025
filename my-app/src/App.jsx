import { useState } from 'react'
import './App.css'
// we do not qualify the module as .js, .ts, .jsx or .tsx
import SubSection from './components/SubSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> is a 'fragment' to contain ALL other code
    // NB this looks like HTML but actually it is JSX
    <>
      {/* we write our application page content here */}
      {/* Careful: all React tag are InitialCap, all html tags MUST be lower case  */}
      <section>
        <h3>Welcome to React</h3>
        {/* we may render aNY value into the pge using {} */}
        <p>Count is {count}</p>
      </section>
      {/* we may render any other compoents */}
      <SubSection /> 
    </>
  )
}
export default App
