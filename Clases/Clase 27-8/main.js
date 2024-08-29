console.log("Hola Mundo");

var nombre = "luciano";

let nombre2 = "juan";

{
    var nombre = "juan";
    console.log(nombre);
}

let texto = "esto es una string";
console.log(texto);

//number

let numero1 = 43;
let numero2 = 3.14;

//booleam
let esVerdadero = true;
let esFalse = false;

//objetos
let persona={
    nombre: "Luciano",
    edad: 23
};
persona.nombre="Carlos"
console.log(persona.nombre)
console.log(persona["nombre"])

//array
let array1 = [1, "pete", persona]

console.log(array1)

//undefined
let sinValor;

console.log(sinValor)

//null
let valorNull = null;
console.log(valorNull)

//valores aritmeticos

let suma = "5" + 10;
console.log(suma);
let resta = 4 - 1;
console.log(resta);
let multiplicacion = 4 * 2;
console.log(multiplicacion);

let division = 10/2;
console.log(division);

let modulo = 10 % 2;
console.log(modulo);

console.log(typeof(suma));


//operadores de comparacion
console.log("comparacion")

let esIgual = 5 == "5";
console.log(esIgual);

let igualdadEstric = 5 === "5";
console.log(igualdadEstric);

let esDesIgual = 3 != 5;
console.log(esDesIgual);

let desIgualdadEstric = "5" !== "5";
console.log(desIgualdadEstric);


//Condicionales
console.log("Condicionales")

let edad = 18;
if(edad >= 18){
    console.log("Es mayor");
}else{
    console.log("No es mayor");
}

//swich
let dia = 3
switch(dia){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    default:
        console.log("es un dia invalido");
        break;
}

//Ternario

let edad2 = 16;

let mensaje = edad2 >= 18 ? "eres adulto" : "eres menor"

console.log(mensaje)


//bucles

for(let i = 0; i<5; i++){
    //console.log(i)
}

//for of

const numeros=[1,2,3,4]

for(const numero of numeros){
    console.log(numero);
}

//for in

const objeto = {a:1, b:2, c:3}

for(const clave in objeto){
    console.log(clave, objeto[clave])
}

//funciones

function saludar (nombre){
    return `Hola, ${nombre} está saludando`
}

console.log(saludar("Rodri"))

const sumar = function(a,b){
    console.log(`El resultado es: ${a+b}`)
};

sumar(10, 5);

//funciones flechas

const multiplicar = (a,b) => {
    return `El resultado de la multiplicacion es: ${a*b}`;
}

multiplicar(2,10);

const dividir = (a,b) => {
    return `El resultado de la division es: ${a/b}`;
}

console.log(dividir(2,10));

function desdeDom(){
    console.log("Thomas")
}

const objeto1 = {
    nombre: "objeto1",
    saludar: function(){
        console.log("hola objeto1", this.nombre)
    }
}

objeto1.saludar()

const objeto2 = {
    nombre: "objeto2",
    saludar: () => {
        console.log("hola objeto2", this.nombre)
    }
}

objeto2.saludar()

let frutas = ["manzana", "banana", "frutilla"];

frutas.forEach((el)=> {
    console.log(el);
})