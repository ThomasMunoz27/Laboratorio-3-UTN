//Endpoint
const Api_Endpoint = "https://randomuser.me/api/"

fetch(Api_Endpoint).then(resp => resp.json()).then(data => {
    console.log(data);

const user__info = document.getElementById("user__info")

user__info.innerHTML = `Nombre: ${data.results[0].name.first}  ${data.results[0].name.last} <br> Origen: ${data.results[0].location.country} <br> <img src="${data.results[0].picture.medium}">`;
}).catch(error => console.error("Error: ", error)
);



//Ejercicio 2
const Api_Endpoint2 = "https://jsonplaceholder.typicode.com/posts";

fetch(Api_Endpoint2).then(result => result.json()).then(data2 => {
    

    const postList = document.getElementById("postList");
    const body = document.body
    for(let i = 0; i <= 10; i++){
        //console.log(data2[i].title);
        const nuevoElementoLista = document.createElement("li")
        nuevoElementoLista.textContent = data2[i].title;
        body.appendChild(nuevoElementoLista)
    }

});

//Ejercicio 3