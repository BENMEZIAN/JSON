// Create js object
const myPerson = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myPerson);

document.getElementById("demo").innerHTML = "Object has been created successfully";

// Access object values
Name = myObj["name"];
Age = myObj["age"];
Car = myObj.car;

document.getElementById('demo1').innerHTML = ` <p>Name: ${Name}</p> 
<p>Age: ${Age}</p> 
<p>City: ${Car}</p>
`;

// Looping through it
let text = "";
for (const x in myObj) {
    text += myObj[x] + ", ";
}

document.getElementById("demo2").innerHTML = text

// Looping Through an Array
const men = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const menObj = JSON.parse(men);

let txt = "";
for (let i = 0; i < menObj.cars.length; i++) {
    txt += menObj.cars[i] + ", ";
}

// document.getElementById("demo3").innerHTML = txt;
document.getElementById("demo3").innerHTML = `<p>Name: ${Name}</p> 
<p>Age: ${Age}</p>
<p>Cars: ${txt}</p>
`;