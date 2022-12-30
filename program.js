
let number = process.argv.slice(2);

console.log(`The minimum of [${number}] is ${Math.min(...number)}`)