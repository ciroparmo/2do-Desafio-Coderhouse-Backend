const ProductManager = require('./ProductManager.js')

const manager = new ProductManager()

function randomNumber() {
    const random = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    return random
}

let persistirProducto = async () => {
    await manager.addProduct(randomNumber(), 'Audi', 'Auto Rapido', 12000, 5)
    await manager.addProduct(randomNumber(), 'Ferrari', 'Auto Deportivo', 80000, 1)
    await manager.addProduct(randomNumber(), 'Porsche', 'Auto Lujoso', 57000, 10)
    let productos = await manager.getProducts()
    console.log(productos)
}

persistirProducto()
