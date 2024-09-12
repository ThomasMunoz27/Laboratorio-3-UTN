console.log("Ejercicio 2: corriendo desde typescript");

const text : String = "Hola, typescript"

const num: number = 123

const booly : boolean = true;

const date :Date = new Date("8/9/2024")

const textLine = document.getElementById("textLine");
if(textLine){
    textLine.innerHTML += text;
}

const numberLine = document.getElementById("numberLine");
if(numberLine){
    numberLine.innerHTML += num
}

const booleanLine = document.getElementById("booleanLine");
if(booleanLine){
    booleanLine.innerHTML += booly;
}

const dateLine = document.getElementById("dateLine");
if(dateLine){
    dateLine.innerHTML += date.toDateString();
}
