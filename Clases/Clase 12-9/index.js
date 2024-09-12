"use strict";
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocity = 0;
    }
    accelerate() {
        this.velocity += 10;
        console.log(`Estoy acelerando. La velocidad es ${this.velocity}`);
    }
}
let rodriNeta = new Coche("Chacarita", "1955");
rodriNeta.accelerate();
const API_ENDPOINT = `https://jsonplaceholder.typicode.com/todos`;
fetch(API_ENDPOINT)
    .then(resp => resp.json())
    .then(resp => {
    let completed = [];
    let incompleted = [];
    let reducedResp = resp.slice(0, 20);
    reducedResp.forEach((element) => {
        if (element.completed) {
            completed.push(element.title);
        }
        else {
            incompleted.push(element.title);
        }
    });
    console.log(completed);
    console.log(incompleted);
});
const square1 = document.getElementById("square");
const squareContainer = document.getElementById("squareContainer");
class Square {
    constructor(velocidadDeMovimiento) {
        this.areaMovimientoElement = squareContainer;
        this.cuboElement = square1;
        this.velocidadDeMovimiento = velocidadDeMovimiento;
    }
    moverAbajo() {
    }
}
let pos = 0;
onkeydown = (e) => {
    if (e.keyCode === 40) {
        console.log("A");
        if (square1) {
            square1.style.top = `${pos += 10}px`;
        }
    }
};
