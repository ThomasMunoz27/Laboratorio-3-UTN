"use strict";
console.log("Ejercicio 2: corriendo desde typescript");
const text = "Hola, typescript";
const num = 123;
const booly = true;
const date = new Date("8/9/2024");
const textLine = document.getElementById("textLine");
if (textLine) {
    textLine.innerHTML += text;
}
const numberLine = document.getElementById("numberLine");
if (numberLine) {
    numberLine.innerHTML += num;
}
const booleanLine = document.getElementById("booleanLine");
if (booleanLine) {
    booleanLine.innerHTML += booly;
}
const dateLine = document.getElementById("dateLine");
if (dateLine) {
    dateLine.innerHTML += date.toDateString();
}
