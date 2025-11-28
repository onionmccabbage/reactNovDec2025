import { useState } from "react"

function SubSection() {
  // we declare any state for this component
  //   name, setter-function
  const[sub, setSub] = useState('initial value') // this is how we set the data that belongs to this Component

  // we then choose what visual content will be returend when it is rendered
  return (
    <>
    <section>
      <h4>This is a SubSection component instance</h4>
      <p>The state of this compoent is {sub}</p>
    </section>
    </>
  )
}
// in order for this component ot be available for import we must export it
export default SubSection