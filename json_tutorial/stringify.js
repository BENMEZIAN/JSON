// from js object into json string
const person = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(person);

console.log(myJSON);
document.getElementById("demo3").innerHTML = myJSON;

// from js array into json string
const arr = ["John", "Peter", "Sally", "Jane"];
const ArrJSON = JSON.stringify(arr);

console.log(myJSON);
document.getElementById("demo4").innerHTML = ArrJSON;