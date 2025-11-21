let fruit = ['Apple','Banana','Orange', 'Mango', 'Strawberry'];
let vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber'];

for (let i = 0; i <= fruit.length; i++){
    document.getElementById("fruit-list").innerHTML += `<ul> ${fruit[i]} </ul>`
}

for (let i = 0; i <= vegetables.length; i++){
    document.getElementById("veg-list").innerHTML += `<ul> ${vegetables[i]} </ul>`
}