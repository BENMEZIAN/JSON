// from string to JSON object
const txt = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(txt);

console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;

// from string into a date object.
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const object = JSON.parse(text);
object.birth = new Date(object.birth);

document.getElementById("demo1").innerHTML = object.name + " was born on " + object.birth + " in " + object.city;

// from string into a function
const text2 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const object2 = JSON.parse(text2);
object2.age = eval("(" + object2.age + ")");

document.getElementById("demo2").innerHTML = object2.name + ", " + " returning function is " + object2.age();