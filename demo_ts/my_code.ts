// this is a TypeScript file (it has .ts on the end)
// remember - JS is loosley typed, it doesn't care what types you use
// TS is just JS
let a = 1
// ...but Typescript will now INFER the data tyoe of 'a'
// a='oops' // TS thinks a must always be a number
// but if we choose, we may provide a hint as to the type of data
let b:number = 2 // here we are insisting that b must contain a number
// what is actually happening is:
// the 'language engine' of my dev-tool is 
// using TS to enforce rules. This is good as ithelps us write good code
let c:string = '7'
// be careful: TS only operates when you WRITE code
// TS has no effect whatsoever on the code that gets run
// ...because ALL the TS gets converted to JS before it is executed

// if we dont know the type....
const x:any ='all good' // x may take any data we like
let y: string | number = 2 // we allow 'y' to contain a number or a string
y = 'all good' // yep, string is also permitted

// functions may return a type (and the arguments may be typed)
function fn(m:boolean):string | null {
    if (a<3) {
        return c // c is a string
    } else {
        return null
    }
}
fn(true)