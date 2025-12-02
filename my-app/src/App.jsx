import { useState } from 'react'
import './App.css'
// we do not qualify the module as .js, .ts, .jsx or .tsx
import SubSection from './components/SubSection'
import MyList from './components/MyList'
import ArtistList from './components/ArtistList'
import TradesList from './components/TradesList'

function App() {
  // here are the stateful data members of this components
  const [count, setCount] = useState(0)
  // declare event handler and other functions
  function appHandleEvent(){
    // the set methods of React destroy the old constant and replace it with a new one
    setCount( count+1 )
  }

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
      {/* any JS expression will be evaluated within the {} */}
      <SubSection c={2+3} h={appHandleEvent}  /> 
      {/* if we choose we may pass props and methods in to ANY jsx tag */}
      <SubSection c={count} h={appHandleEvent} /> 
      <SubSection c={count+1} h={appHandleEvent}  /> 
      {/* we can inject literal values like this */}
      <SubSection c='not available' h={appHandleEvent} /> 
    <hr/>
    <MyList />
    <ArtistList />
    {/* <TradesList /> */}
    </>
  )
}
export default App
