// modern ECMAScript syntax (i.e. JavaScript) 

// old skool
function old(){}

// new way
const newFn = ()=>{}
// other ways to write a modern ES function
// if there is exactly one argument, we can leave out the ()
// if there is exactly one line to be evaluated, we can leave out the {}
const fnA = x => x*x // return the square of x
// BUT be careful: if you do chooe to leave the {} in you must also write 'return'
const fnB = x =>{return x*x} // we MUST lso say 'return'
// if ther are zero arguments, or more than one argument, we MUST include ()
const fnC = ()=> 'hello' // this will always return the given string
const fnD = (x,y)=> 'hello' // this will always return the given string

// ECMAScript rest and spread
arr = [ // we have an array of Objects
        { name: 'Albatros', qty: 1, cost: 99.99 },
        { name: 'Bear', qty: 5, cost: 1.99 },
        { name: 'Carp', qty: 66, cost: 9.99 },
        { name: 'Deer', qty: 12, cost: 12.99 },
        { name: 'Egret', qty: 0, cost: 5.99 },
    ]

arr[3]['qty'] += 1 

console.log(arr)
// spread will take the members of a cl=ollection and spread them out
console.log(...arr) // here ... means spread out the values

arr2 = [5,4,3,2]
console.log(...arr2) // 5 4 3 2

// ...rest will take the rest of teh arguments and gather them together
const demoRest = (x, y, ...rest)=>{
    return rest
}

console.log(demoRest(3,4) )// NB these can be of any data type
console.log(demoRest(3,4,5))
console.log(demoRest(3,4,5,6))
console.log(demoRest(3,4,5,6,7))