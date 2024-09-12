class Coche {

    marca: String;
    modelo: String; 
    velocity: number;



    constructor(marca:string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocity = 0;
    }



    accelerate() {
        this.velocity += 10
        console.log(`Estoy acelerando. La velocidad es ${this.velocity}`)
    }

}

let rodriNeta = new Coche("Chacarita", "1955")
rodriNeta.accelerate();

const API_ENDPOINT = `https://jsonplaceholder.typicode.com/todos`


interface ListType{
    userId:number;
    id:number;
    title:String;
    completed:boolean;
}

fetch(API_ENDPOINT)
.then(resp => resp.json())
.then(resp => {
    let completed:String[] = [];
    let incompleted:String[] = [];
    let reducedResp = resp.slice(0, 20)
    reducedResp.forEach((element:ListType)=> {
        if(element.completed){
            completed.push(element.title)
        }else{
            incompleted.push(element.title)
        }
    });
    console.log(completed)
    console.log(incompleted);
    
})

const square1 = document.getElementById("square")
const squareContainer = document.getElementById("squareContainer")

class Square {

    areaMovimientoElement:HTMLElement | null

    cuboElement:HTMLElement | null;

    velocidadDeMovimiento:number;

    constructor(velocidadDeMovimiento:number){
        this.areaMovimientoElement = squareContainer
        this.cuboElement = square1;
        this.velocidadDeMovimiento = velocidadDeMovimiento;
    }


    moverAbajo(){
        
    }
}


let pos = 0;
onkeydown = (e) => {
    if(e.keyCode === 40){
        console.log("A")
        if(square1){
            square1.style.top = `${pos+=10}px`
        }
    }
}