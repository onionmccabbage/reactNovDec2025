// this is a TypeSCript file (it has .ts on the end)

// TS is just JS
let a = 1
// but if we choose, we may provide a hint as to teh type of data
let b:number = 2 // here we are insisting that b must contain a number
// what is actually happening is:
// the 'language engine' of my dev-tool is 
// using TS to enforce rules. This is good as ithelps us write good code
let c:string = '7'
// be careful: TS only operates when you WRITE code
// TS has no effect whatsoever on the code that gets run
// ...because ALL the TS gets converted to JS before it is executed