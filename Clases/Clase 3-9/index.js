


const elementoPorId = document.getElementById("miId");
console.log(elementoPorId)

const elementosPorClase =  document.getElementsByClassName("miClase");
console.log(elementosPorClase)

const elementoPorEtiqueta = document.getElementsByTagName("p")
console.log(elementoPorEtiqueta)

document.getElementById("cambiarTexto").addEventListener("click", ()=>{
    document.getElementById("texto").innerHTML = "El texto ha sido cambiado"
})

document.getElementById("agregar__elemento").addEventListener("click", ()=>{
    const nuevoElemento = document.getElementById("nuevo__input").value
    if(nuevoElemento && nuevoElemento.length > 0){
        const li = document.createElement("li");
        li.innerHTML = nuevoElemento;

        document.getElementById("lista").appendChild(li)

        nuevoElemento.value = "";
    }
})

document.getElementById("cambiar__caja").addEventListener("click", ()=>{
    document.getElementById("caja").style.backgroundColor = "red"
})

document.getElementById("crear__tabla").addEventListener("click", ()=>{
    const datos =[
    {
        nombre: "luciano",
        edad: 23,
    },
    {
        nombre: "carlos",
        edad: 75
    }
]
    const tbody = document.getElementById("miTabla").querySelector("tbody");
    tbody.innerHTML = "";

    datos.forEach((item) => {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td")
        celdaNombre.innerHTML = item.nombre
        const celdaEdad = document.createElement("td")
        celdaEdad.innerHTML = item.edad

        fila.appendChild(celdaNombre)
        fila.appendChild(celdaEdad)
        tbody.appendChild(fila)
    })
})


function loadData(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Datos Cargados");
        }, 1500)
    })
}

async function displayData(){
    console.log("Cargando...");
    const data = await loadData();
    console.log(data)
} 

loadData()
.then((data) => {
    console.log(data)
})

displayData()
/*
function loadDataWithError(){
    return new Promise((_, reject) =>{
        setTimeout(()=>{
            reject("Datos error");
        }, 1500)
    })
}

async function displayDataError(){
    try{
        console.log("Cargando...");
    const data = await loadDataWithError();
    console.log("correcto", data)
    }catch(error){
        console.log("error", error)
    }
    
} 

*/
async function fetchPost() {
    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();

        console.log(data)
    }catch(error){

    }
}
fetchPost()