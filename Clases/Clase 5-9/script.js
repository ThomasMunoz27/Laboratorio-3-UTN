//Endpoint
const Api_Endpoint = "https://randomuser.me/api/"

const excercice1Btn = document.getElementById("exercice1Btn")
excercice1Btn.addEventListener("click", () => {
    
    fetch(Api_Endpoint)
        .then(resp => {
            if(!resp.ok){
                throw new Error("Error en la respuesta")
            }
            return resp.json();
        }).then(data => {
        console.log(data);
    
        const userName = document.getElementById("userName")
        const userLast = document.getElementById("userLast")
        const imgUser = document.getElementById("imgUser")
    
    
        userName.innerHTML = `Nombre: ${data.results[0].name.first}  ${data.results[0].name.last}`
        userLast.innerHTML = `Origen: ${data.results[0].location.country}` 
        imgUser.setAttribute("src", data.results[0].picture.medium)
        }).catch(error => console.error("Error: ", error)
        );
})




//Ejercicio 2
const Api_Endpoint2 = "https://jsonplaceholder.typicode.com/posts";


const exercice2Btn = document.getElementById("exercice2Btn")
const postList = document.getElementById("postList");

exercice2Btn.addEventListener("click", () => {
    
    postList.innerHTML = "";
    fetch(Api_Endpoint2).then(result => result.json()).then(data2 => {
        

        for(let i = 0; i <= 10; i++){
            const nuevoElementoLista = document.createElement("li")
            nuevoElementoLista.textContent = data2[i].title;
            postList.appendChild(nuevoElementoLista)
        }
    
    });
}
)

//Ejercicio 3


const weatherKey = "c61e0400e304a834d4159274cfc06146";

const Api_Geocode_endpoint = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"


const weatherButton = document.getElementById("weatherButton")
weatherButton.addEventListener("click", ()=>{
    
    const weatherSearch = document.getElementById("weatherSearch").value
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${weatherSearch},&limit=1&appid=${weatherKey}`

    ).then((respWeather) => respWeather.json()/*{
            if(!Weather_endpoint.ok){
                throw new Error("Error: ", error);}
            return };*/
    
        ).then(respWeather => {
            const [lat, lon] = [respWeather[0].lat, respWeather[0].lon];

            const Weather_endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`;
            fetch(Weather_endpoint)
                .then(finalWeather => finalWeather.json()).then(finalWeather => {
                    const showTemp = document.getElementById("showTemp");
                    showTemp.textContent = `Temperatura: ${finalWeather.main.temp}°C`
                })
        })
})


//Ejercicio 4

const Api_Endpoint4 = `https://dog.ceo/api/breeds/image/random`

const dogButton = document.getElementById("dogButton")
dogButton.addEventListener("click", ()=>{
    fetch(Api_Endpoint4)
        .then(response4 => response4.json())
        .then(response4 => {
            //console.log(response4)
            const dogImage = document.getElementById("dogImage");
            //console.log(response4.message);
            dogImage.setAttribute("src", response4.message)
        })

})


//Ejercicio 5
const Api_Endpoint5 = `https://jsonplaceholder.typicode.com/todos`
const checkButton = document.getElementById("checkButton")
checkButton.addEventListener("click", ()=>{
    fetch(Api_Endpoint5)
    .then(response5 => response5.json())
    .then(response5 =>{
        const checkBoxContainer = document.getElementById("checkBoxContainer")
        let fiveTasks = response5.slice(0, 5)
        console.log(fiveTasks)
        fiveTasks.forEach(item => {
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            if(item.completed){
                checkBox.checked = true;
            }

            const labelCheckBox = document.createElement("label")
            labelCheckBox.textContent = item.title;
            checkBoxContainer.appendChild(checkBox);
            checkBoxContainer.appendChild(labelCheckBox);
            checkBoxContainer.appendChild(document.createElement("br"));

        })
    })
})





