const sectionsContainer = document.getElementById("sectionsContainer");

const allProductsSection = document.getElementById("allProductsSection");
const innerAllProductsSection = document.getElementById("innerAllProductsSection");


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
const innerLowerPriceSection = document.getElementById("innerLowerPriceSection");


const popupContainer = document.getElementById("popupContainer")

const updatePopUpContainer = document.getElementById("updatePopUpContainer")

const updateInputName = document.getElementById("updateInputName")
const updateInputImg = document.getElementById("updateInputImg")
const updateInputPrice = document.getElementById("updateInputPrice")
const updateSelectCategory = document.getElementById("updateSelectCategory")

const cancelButton = document.getElementById("cancelButton");

const upDateCancelButton = document.getElementById("upDateCancelButton");

const acceptButton = document.getElementById("acceptButton");

const upDateAcceptButton = document.getElementById("upDateAcceptButton")

const categoriesAside = document. getElementById("categoriesAside");

const searchButton = document.getElementById("searchButton");

const mainBody = document.getElementById("mainBody")

const addElementButton = document.getElementById("addElementButton")

let buttonIdCounter = 1

let visible = "all"
let priceVisible = ""

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





//Events Listeners


searchButton.addEventListener("click", ()=>{
    let arrayAllProducts = [];
    let arraySearchedProducts = [];
    const searchBar = document.getElementById("searchBar").value;

    for(let key in dictionary){
        arrayAllProducts = arrayAllProducts.concat(dictionary[key])
        }
    

    arrayAllProducts.forEach(product => {
        if(product.title.toLowerCase().includes(searchBar.toLowerCase())){
            arraySearchedProducts.push(product);
            renderSearchedProducts(arraySearchedProducts);
        }
    })
})

cancelButton.addEventListener("click", ()=>{
    popupContainer.style.display = "none"
    mainBody.classList.remove("blur")
    resetPopUp();
})

upDateCancelButton.addEventListener("click", ()=>{
    updatePopUpContainer.style.display = "none"
    mainBody.classList.remove("blur")
    resetPopUp();
})
addElementButton.addEventListener("click", ()=>{


    popupContainer.style.display = "flex" 
    mainBody.classList.add("blur")
})


acceptButton.addEventListener("click", ()=>{
    const inputName = document.getElementById("inputName").value;
    const inputImg = document.getElementById("inputImg").value;
    const inputPrice = document.getElementById("inputPrice").value;
    const selectCategory = document.getElementById("selectCategory").value;

    let newProduct = new Product(inputImg, inputName, inputPrice, selectCategory)

    let storedProducts = JSON.parse(localStorage.getItem("products") || "[]");

    storedProducts.push(newProduct)

    localStorage.setItem("products", JSON.stringify(storedProducts))

    dictionary[selectCategory].push(newProduct)

    renderProducts(dictionary)
    resetPopUp()
})



categoriesAside.addEventListener("click", (event) => {
    if(event.target && event.target.nodeName === "LI"){
        let categoryClicked = event.target.id;

        switch(categoryClicked){
            case "allProductsTitle":
                visible = "all";
                priceVisible = "";
                hihgPriceSection.style.display = "none"
                lowerPriceSection.style.display = "none"
                renderProducts(dictionary);
                break;
            case "burgerTitle":
                visible = "Hamburguesas"
                hihgPriceSection.style.display = "none"
                lowerPriceSection.style.display = "none"
                renderOneCategory("Hamburguesas");
                break;
            case "potatoTitle":
                visible = "Papas"
                hihgPriceSection.style.display = "none"
                lowerPriceSection.style.display = "none"
                renderOneCategory("Papas");
                break;
            case "sodaTitle":
                visible = "Gaseosas"
                hihgPriceSection.style.display = "none"
                lowerPriceSection.style.display = "none"
                renderOneCategory("Gaseosas")
                break
            case "hihgPriceTitle":
                priceVisible = "High"
                lowerPriceSection.style.display = "none"
                orderByHighPrice(dictionary)
                break;
            case "lowerPriceTitle":
                priceVisible = "Lower"

                hihgPriceSection.style.display = "none"
                orderByLowerPrice(dictionary);
                break;
            default:
                break;
        }
    }
})



document.addEventListener("DOMContentLoaded", ()=>{
    loadProductsFromLocalStorage();
    renderProducts(dictionary);
})


// Funciones

const resetPopUp = () => {
    const inputName = document.getElementById("inputName");
    const inputImg = document.getElementById("inputImg");
    const inputPrice = document.getElementById("inputPrice");
    const selectCategory = document.getElementById("selectCategory")

    inputName.value = "";
    selectCategory. value = "Seleccione una categoria"
    inputImg.value = ""
    inputPrice.value = 0
}

function beforeRender(){
    innerAllProductsSection.innerHTML = ""
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


    
    newDiv.addEventListener("click", ()=>{

        updatePopUpContainer.style.display = "flex"

        updateInputName.value = product.title;
        updateInputImg.value = product.img;
        updateInputPrice.value = product.price;


        upDateAcceptButton.addEventListener("click", ()=>{
            dictionary[product.category].forEach(element =>{
                if(product.title === element.title){
                    element.title = updateInputName.value;
                    element.img = updateInputImg.value;
                    element.price = updateInputPrice.value;
                    

                    
                    
                }
                
                
            })
            
            
        })
    });



    return newDiv
}


function orderByHighPrice(products){
    let arrayHighPrice = [];

    // Recorremos todos los productos y los agregamos a un solo array
    if(visible === "all"){
        for (let key in products) {
                arrayHighPrice = arrayHighPrice.concat(products[key]);
            }
    }else{
        products[visible].forEach(product => {
                arrayHighPrice.push(product)
            });
    }


    // Ordenar los productos por precio de mayor a menor
    arrayHighPrice.sort((a, b) => b.price - a.price);
    
    beforeRender(); 

    
    for(let i = 0; i < arrayHighPrice.length; i++){
        
        let product = arrayHighPrice[i]
        
        const newDiv = createProductCard(product)

        appendInCorrectSection(newDiv)
                
        }
}


function orderByLowerPrice(products){
    let arrayLowerPrice = [];

    // Recorremos todos los productos y los agregamos a un solo array
    if(visible === "all"){
        for (let key in products) {
                arrayLowerPrice = arrayLowerPrice.concat(products[key]);
            }
    }else{
        products[visible].forEach(product => {
                arrayLowerPrice.push(product)
            });
    }


    // Ordenar los productos por precio de mayor a menor
    arrayLowerPrice.sort((a, b) => a.price - b.price);
    
    beforeRender(); 

    
    for(let i = 0; i < arrayLowerPrice.length; i++){
        
        let product = arrayLowerPrice[i]
        
        const newDiv = createProductCard(product)

        appendInCorrectSection(newDiv)
                
        }
}


function renderProducts(products){
    beforeRender();

    for (let key in products){
        for(let i = 0; i < products[key].length; i++){
            if(products[key].length != 0){
                
                let product = products[key][i]
                
                
                const newDiv = createProductCard(product)
                innerAllProductsSection.appendChild(newDiv)

            }
        }
    }
}

function renderSearchedProducts(products){
    beforeRender();
    products.forEach(element => {
        const newDiv = createProductCard(element)
        innerAllProductsSection.appendChild(newDiv)
    });
}


function renderOneCategory(category){

    beforeRender();

    dictionary[category].forEach(element => {

            const newDiv = createProductCard(element)

            appendInCorrectSection(newDiv)
    });
}


function loadProductsFromLocalStorage(){
    const productsInLocalStorage = JSON.parse(localStorage.getItem("products") || "[]")

    productsInLocalStorage.forEach(foodProduct =>{
        console.log(foodProduct.category);
        
        dictionary[foodProduct.category].push(foodProduct);
    })
}


function appendInCorrectSection(divToAppend){
    switch(visible){
        case "all":
            switch(priceVisible){
                case "":
                    allProductsSection.style.display = "grid";
                    innerAllProductsSection.append.appendChild(divToAppend)
                case "High":
                    hihgPriceSection.style.display = "grid"
                    innerHihgPriceSection.appendChild(divToAppend)
                    break;
                case "Lower":
                    lowerPriceSection.style.display = "grid"
                    innerLowerPriceSection.appendChild(divToAppend)
                    break;
            }
            break;
        case "Hamburguesas": 
            innerBurgerSection.appendChild(divToAppend);
            break;
        case "Papas":
            innerPotatoSection.appendChild(divToAppend);
            break
        case "Gaseosas":
            innerSodaSection.appendChild(divToAppend)
            break


        default:
            break
    }
}