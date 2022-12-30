let userArray = process.argv.slice(2);
let data = {};
[data.id, data.username, data.email] = userArray;
console.log(`{ username: '${data.username}', email: '${data.email}' }`);
