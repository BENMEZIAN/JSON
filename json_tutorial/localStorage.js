// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const John = JSON.stringify(myObj); // string 
localStorage.setItem("testJSON", John);

// Retrieving data:
let ls = localStorage.getItem("testJSON");
let john = JSON.parse(ls); // object
document.getElementById("demo5").innerHTML = john.name;