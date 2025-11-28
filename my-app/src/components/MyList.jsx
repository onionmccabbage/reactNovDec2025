import { useState } from 'react'

// define our component as a function
function MyList() {
    // useState                         provide initial state: simple or complex
    const [animals, setAnimals] = useState([ // we have an array of Objects
        { name: 'Albatros', qty: 1, cost: 99.99 },
        { name: 'Bear', qty: 5, cost: 1.99 },
        { name: 'Carp', qty: 66, cost: 9.99 },
        { name: 'Deer', qty: 12, cost: 12.99 },
        { name: 'Egret', qty: 0, cost: 5.99 },
    ])

    // declare handlers and other functions

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
        // this line (to retrun the JSX) was missing and therefor broke the code
        return (
            <>
                {/* we may return ANY tag we like but always provide a unique key */}
                <li key={a.name}>Creature {a.name} {a.qty} &GBP{a.price}</li>
            </>
        )
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
                <ul>
                    {creatures}
                </ul>
                <ol>
                    {listItems}
                    {creatureList}
                </ol>
            </aside>
        </>
    )

}
// export default
export default MyList