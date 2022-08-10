"use strict";

const names = ["Anna","Diana","Albert","Emili","Vache","Vahe","Lina"];
const lastName = ["Cholakhyan","Petrosyan","Sahakyan","Bakunts","Dadunts","Eremyan","Israelyan"];
const btn = document.getElementById("btn");
const manBox = document.querySelector("#man");
const womanBox = document.querySelector("#woman");

btn.addEventListener("click", function(){
    const randomName = names[Math.floor(Math.random() * (names.length - 1)) + 1];
    const randomLastName = lastName[Math.floor(Math.random() * (names.length - 1)) + 1]
    if (randomName === "Anna" || randomName === "Diana" || randomName === "Emili" || randomName === "Lina") {
    womanBox.innerHTML = `${randomName} ${randomLastName}`;
} else {
    manBox.innerHTML = `${randomName} ${randomLastName}`;
} 
});