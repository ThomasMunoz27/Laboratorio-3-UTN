const sectionsContainer = document.getElementById("sectionsContainer");

const burgerSection = document.getElementById("burgerSection");
const innerBurgerSection = document.getElementById("innerBurgerSection");

const potatoSection = document.getElementById("potatoSection");
const innerPotatoSection = document.getElementById("innerPotatoSection");


const sodaSection = document.getElementById("sodaSection");
const innerSodaSection = document.getElementById("innerSodaSection");
innerSodaSection

const hihgPriceSection = document.getElementById("hihgPriceSection");
const innerHihgPriceSection = document.getElementById("innerHihgPriceSection");

const lowerPriceSection = document.getElementById("lowerPriceSection");
const innerLowerPriceSection =document.getElementById("innerLowerPriceSection");

const cancelButton = document.getElementById("cancelButton");

const acceptButton = document.getElementById("acceptButton");

const categoriesAside = document. getElementById("categoriesAside");

class Product {
    img;
    title;
    price;
    category;

    constructor(img, title, price, category){
        this.img = img;
        this.title = title;
        this.price = price;
        this.category = category
    }
}


const h1 = new Product("Imgs/Hamburgesa1.jpg", "Hamburgesa viva", 999.9, "Hamburguesas")
const h2 = new Product("Imgs/Hamburgesa2.jpg", "Hamburgesa mordida", 9.99, "Hamburguesas")
const b1 = new Product(`Imgs/Fernet.png`, "Fernet Bronca", 499.9, "Gaseosas")
const p1 = new Product("Imgs/Papas1.jpg", "Papas fritas McDonalds", 59.99, "Papas")

let dictionary ={
    Hamburguesas:[h2, h1],
    Papas: [p1],
    Gaseosas: [b1]

}


const addElementButton = document.getElementById("addElementButton")


//Events Listeners

addElementButton.addEventListener("click", ()=>{
    const popupContainer = document.getElementById("popupContainer")

    popupContainer.style.display = "flex"


    
})


acceptButton.addEventListener("click", ()=>{
    const inputName = document.getElementById("inputName").value;
    const inputImg = document.getElementById("inputImg").value;
    const inputPrice = document.getElementById("inputPrice").value;
    const selectCategory = document.getElementById("selectCategory").value

    let newProduct = new Product(inputImg, inputName, inputPrice, selectCategory)
    
    dictionary[selectCategory].push(newProduct)

    renderProducts(dictionary)

})



categoriesAside.addEventListener("click", (event) => {
    if(event.target && event.target.nodeName === "LI"){
        let categoryClicked = event.target.id;

        switch(categoryClicked){
            case "allProductsTitle":
                renderProducts(dictionary);
                break;
            case "burgerTitle":
                renderOneCategory("Hamburguesas");
                break;
            case "potatoTitle":
                renderOneCategory("Papas");
                break;
            case "sodaTitle":
                renderOneCategory("Gaseosas")
                break
            case "hihgPriceTitle":
                orderByHighPrice(dictionary)
                break;
            case "lowerPriceTitle":
                orderByLowerPrice(dictionary);
                break;
            default:
                break;
        }
    }
})






// Funciones

function beforeRender(){
    innerBurgerSection.innerHTML = "";
    innerPotatoSection.innerHTML = "";
    innerSodaSection.innerHTML = "";
    innerHihgPriceSection.innerHTML = "";
    innerLowerPriceSection.innerHTML = "";
}


function createProductCard(product){
    const newDiv = document.createElement("div");
    newDiv.classList.add("card__grid")

    const newImg = document.createElement("img");
    newImg.src = product.img;
    newImg.classList.add("img__class")
    newDiv.appendChild(newImg);

    const newP = document.createElement("p");
    newP.textContent = product.title
    newDiv.appendChild(newP);

    const newP2 = document.createElement("p");
    newP2.textContent = `Precio: $${product.price}`;
    newDiv.appendChild(newP2);

    return newDiv
}


function orderByHighPrice(products){
    let arrayHighPrice = [];

    // Recorremos todos los productos y los agregamos a un solo array
    for (let key in products) {
        arrayHighPrice = arrayHighPrice.concat(products[key]);
    }

    // Ordenar los productos por precio de mayor a menor
    arrayHighPrice.sort((a, b) => b.price - a.price);
    
    beforeRender(); 

    
    for(let i = 0; i < arrayHighPrice.length; i++){
        
        let product = arrayHighPrice[i]
        
        const newDiv = createProductCard(product)

        innerHihgPriceSection.appendChild(newDiv)
                
        }
}


function orderByLowerPrice(products){
    let arrayLowerPrice = [];

    // Recorremos todos los productos y los agregamos a un solo array
    for (let key in products) {
        arrayLowerPrice = arrayLowerPrice.concat(products[key]);
    }

    // Ordenar los productos por precio de mayor a menor
    arrayLowerPrice.sort((a, b) => a.price - b.price);
    
    beforeRender(); 

    
    for(let i = 0; i < arrayLowerPrice.length; i++){
        
        let product = arrayLowerPrice[i]
        
        const newDiv = createProductCard(product)

        innerLowerPriceSection.appendChild(newDiv)
                
        }
}


function renderProducts(products){
    beforeRender();

    for (let key in products){
        for(let i = 0; i < products[key].length; i++){
            if(products[key].length != 0){
                
                let product = products[key][i]
                
                
                const newDiv = createProductCard(product)

                switch(product.category){
                    case "Hamburguesas": 
                        innerBurgerSection.appendChild(newDiv);
                    break;

                    case "Papas":
                        innerPotatoSection.appendChild(newDiv);
                    break
                    
                    case "Gaseosas":
                        innerSodaSection.appendChild(newDiv)
                    break

                    default:
                        
                }
                    
            }
        }
    }
}

renderProducts(dictionary)


function renderOneCategory(category){

    beforeRender();

    dictionary[category].forEach(element => {

            const newDiv = createProductCard(element)

            switch(element.category){
                case "Hamburguesas": 
                    innerBurgerSection.appendChild(newDiv);
                break;

                case "Papas":
                    innerPotatoSection.appendChild(newDiv);
                break
                
                case "Gaseosas":
                    innerSodaSection.appendChild(newDiv)
                break

                default:

                break
            }
    });
}


cancelButton.addEventListener("click", ()=>{
    popupContainer.style.display = "none"
})