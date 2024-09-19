modifyAcceptBtn.addEventListener('click', () => {
    products[element.categoria].forEach(e => {
    if (element.nombre === e.nombre){
        e.nombre = modifyPopupInputTxt.value
        e.imagen = modifyPopupInputImg.value
        e.precio = modifyPopupInputPrice.value
    }
    saveProductsToLocalStorage();
    })
    if(heroTitle.textContent === 'Todos los productos'){
    heroProducts.innerHTML = ''
    let array  = []
    array = array.concat(products.Hamburguesas, products.Papas, products.Gaseosas).forEach(e => {
        updateElement(e)
    })
    }else{
    heroProducts.innerHTML = ''
    products[heroTitle.textContent].forEach(e => {
        updateElement(e)
      })
    }
  })