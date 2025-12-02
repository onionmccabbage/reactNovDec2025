import { useState } from "react"
// we may choose to pass in props for this component (inside a JS object)
function SubSection( {c, h} ) {
    // we declare any state for this component
    // the state data-members of a component belong to this component
    // and are not visible anywhere else
    //   name, setter-function
    const[sub, setSub] = useState('initial value') // this is how we set the data that belongs to this Component
    const[local, setLocal] = useState(-5) // any initial value is permitted
    // we may write event handler logic
    function handleClick(){
        // warning - this is the default click event of JS
        // ...there is a React event which wraps the underlying JS event
        setLocal(local+1)
    }
    // we then choose what visual content will be returend when it is rendered
  return (
    <>
    <section>
      <h4>This is a SubSection component instance</h4>
      <p>The state of this component is {sub} and the parent component inject c={c}</p>
        <hr/>
        {/* we may attach event handler function to any tag (html or React) */}
        <button onClick={handleClick} >Go</button> <span>{local}</span>
        {/* we may wish to mutate avalue shared across components */}
        <button onClick={h} >  {c} </button>
    </section>
    </>
  )
}
// in order for this component ot be available for import we must export it
export default SubSection