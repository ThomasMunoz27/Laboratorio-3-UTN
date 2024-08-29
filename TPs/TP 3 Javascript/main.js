
console.log("1.Introduccion a JavaScript")
//Ejercicio 2

let a = 5;
let b = 10;
let c = a + b;
console.log('La suma de a y b es: ' + c)

//Ejercicio 3
/*let nombre = prompt("¿Cuál es tu nombre?")
console.log("Hola, " + nombre + "!")


console.log("2.Operadores lógicos y condicionales")
//Ejercicio 1
if(a > b){
  console.log("El mayor de los tres números es: " + a)
}else{
  console.log("El mayor de los tres números es: " + b)
}
*/

//Ejercicio 2
/*let numIngresado = prompt("Ingresa un número y te dire si es par o impar")
if(numIngresado % 2 == 0){
  console.log("El numero ingresado es par");
}else if(numIngresado % 2 == 1){
  console.log("El numero ingresado es impar");
}else{
  console.log("No se ha ingresado un número")
}
*/
console.log("3.Operadores de asigmación y bucles")

//Ejercicio 1
let num = 10;
while(num > 0){
  console.log(num);
  num--;
}

//Ejercicio 2
/*
let numMayorCien;
do{
  numMayorCien = prompt("Ingresa un número mayor a 100:")
}while(numMayorCien <= 100);
console.log("Ingresaste un número mayor a 100: " + numMayorCien)
*/

console.log("4.Funciones en JavaScript");

//Ejercicio 1

const esPar = (numParOImpar) =>{
  if(numParOImpar % 2 == 0){
    console.log("El número " + numParOImpar + " es par: " + true);
  }else{
    console.log("El número " + numParOImpar + " es impar: " + false);
  }
}
esPar(8);
esPar(7);

//Ejercicio 2

const convertirCelsiusAFahrenheit = (celcius)=>{
  let fahrenheit = celcius * 1.8 + 32
  console.log(celcius + "°C son equivalentes a " + fahrenheit + "°F")
}
convertirCelsiusAFahrenheit(30)


console.log("5.Objetos en JavaScript")

//Ejercicio 1
let persona = {
  nombre:"Thomas",
  edad:19,
  ciudad:"Godoy Cruz"
}

console.log(persona)

const cambiarCiudad = (persona, ciudadNueva) => {
  persona.ciudad = ciudadNueva
  console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad )
}
cambiarCiudad(persona, "Maipú")

//Ejercicio 2
const libro = {
  titulo:"JoJo´s Bizzare Adventure: Steel Ball Run",
  autor: "Hirohiko Araki",
  año: 2005
}

const esAntiguoOReciente = (libro) => {
  let añoActual = 2024;
  if(añoActual - libro.año > 10){
    console.log("El libro '" + libro.titulo + "' es antiguo: " + true )
  }else{
    console.log("El libro '" + libro.titulo + "' es reciente: " + false )
  }
}

esAntiguoOReciente(libro)


console.log("6.Arrays")
//Ejercicio 1
let numList = [1,2,3,4,5,6,7,8,9,10];
console.log("Números Originales: " + numList);

numList.forEach((elemento, indice) => {
numList[indice] *= 2
});
console.log("Números multiplicados por 2: " + numList)

let arrayVacio = []
for(let i = 0; i <= 20; i++){
  if (i % 2 == 0){
    arrayVacio.push(i)
  }
}
console.log("Primeros 10 números pares: " + arrayVacio)



console.log("7.Introduccion al DOM")
//Ejercicio 1
const button__color = document.getElementById("button__color");
const p__container =  document.getElementById("p__container");


const changePColor = () => {

  if(p__container.classList.contains("p__container__color")){
    p__container.classList.remove("p__container__color")
  }else{
    p__container.classList.add("p__container__color")
  }

}

button__color.addEventListener("click", () => {
  changePColor()
})

//Ejercicio 2
const form__button = document.getElementsByClassName("form__button")[0]

form__button.addEventListener("click", () => {
  const text__line = document.getElementsByClassName("text__line")[0].value
  alert("Has ingresado: " + text__line)
})



console.log("Eventos en DOM")

//Ejercicio 1
const element__list = document.getElementById("element__list"
);

element__list.addEventListener("click", (event) => {
  if(event.target && event.target.nodeName === "LI"){
    const element__id = event.target.id;
    
    switch(element__id){
      case "element__1":
        console.log("Elemento 1");
        break;
      case "element__2":
        console.log("Elemento 2");
        break;
      case "element__3":
        console.log("Elemento 3");
        break;
      case "element__4":
        console.log("Elemento 4");
        break;
      default:
        console.log("Elemento desconocido");
    }
  }
})

//Ejercicio 2
const button__off = document.getElementById("button__off");

const button__on = document.getElementById("button__on");

const text__hab = document.getElementsByClassName("text__hab")[0];

button__off.addEventListener("click", () => {
  text__hab.classList.add("text__deshab")
})

button__on.addEventListener("click", () => {
  text__hab.classList.remove("text__deshab")
})



console.log("9.LocalStorage")

//Ejercicio 1
const button__save__email = document.getElementsByClassName("button__save__email")[0]

button__save__email.addEventListener("click", () => {
  const save__email = document.getElementsByClassName("save__email")[0].value
  localStorage.setItem("emailGuardadoJson", JSON.stringify({save__email}))

})

function mostrarEmailGuardado(){
  const emailGuardado = localStorage.getItem("emailGuardadoJson");
  const email__display = document.getElementById("email__display");
  email__display.textContent = emailGuardado ? "Correo Guardado: " + JSON.parse(emailGuardado).save__email : "No hay Correo guardado"
}

mostrarEmailGuardado();

const button__erase__email = document.getElementsByClassName("button__erase__email")[0];

button__erase__email.addEventListener("click", () => {
  localStorage.clear()
})