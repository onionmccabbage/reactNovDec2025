import { useState } from 'react'

// define our component as a function
function MyList() {
    // useState                         provide initial state: simple or complex
    const [animals, setAnimals] = useState([ // we have an array of Objects
        {id:0, name: 'Albatros', qty: 1, cost: 99.99 },
        {id:1, name: 'Bear', qty: 5, cost: 1.99 },
        {id:2, name: 'Carp', qty: 66, cost: 9.99 },
        {id:3, name: 'Deer', qty: 12, cost: 12.99 },
        {id:4, name: 'Egret', qty: 0, cost: 5.99 },
    ])
    // NB lets add a button to change one of these qty (deer increment)
    // consider: how would we access the deer qty????
    // dq = animals[3]['qty'] += 1 // NEVER do this in React
function changeAnimalQty(whichAnimal=3){
    console.log(whichAnimal)
    // we are not able to mutate the 'animals' constant, 
    // so instead we must create brand new version of our 'animals' constant
    //  new array, spread the old array to populate our new array, 
    // then use expression to change a member of the old array
    setAnimals( [...animals], animals[whichAnimal]['qty'] += 1, animals[0]['cost'] +=1 )
    // we could put it all in our signle
}    // declare handlers and other functions

    // we may write pieces of JSX (which looks like HTML) for use in our page
    const creatures = <>
        <li>We  have {animals[0]['qty']} {animals[0]['name']}</li>
        <li>We  have {animals[1]['qty']} {animals[1]['name']}</li>
        <li>We  have {animals[2]['qty']} {animals[2]['name']}</li>
        <li>We  have {animals[3]['qty']} {animals[3]['name']}</li>
        <li>We  have {animals[4]['qty']} {animals[4]['name']}</li>
    </>

    // as well as manually choosing which data state members to show, 
    // we can use the JS 'map' function to iterate over any ordinal collection
    // map will apply a function to every member of our collection
    const creatureList = animals.map((a) => {
        return (
            <>
                {/* we may return ANY tag we like but always provide a unique key */}
                <li key={a.id}>Creature {a.name} {a.qty} {a.cost}</li>
                {/* we can jump into classic JS using {} */}
                {/* <button className='' onClick={changeDeerQty}>{a.name}</button> */}
                
                <button onClick={ ()=>{
                    changeAnimalQty(a.id) 
                } }>{a.name}</button>



                {/* we can write absolutely anything from HTML here
                all tags, all attributes, all modifiers
                EXCEPT css 'class' instead we write className='' */}
            </>
        ) // NB in React we must put round brackets for a return rendition

})
    // nicked from online
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    // return the JSX
    return (
        <>
            <aside>
                <h3>Here are some creatures</h3>
                {/* <ul>
                    {creatures}
                </ul> */}
                {/* <ol>
                    {listItems}
                    {creatureList}
                </ol> */}
            </aside>
        </>
    )

}
// export default
export default MyList