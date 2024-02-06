class ProductManager {
    products = []

    addProduct = (title, description, price, code, stock) => {
        const product = {
            title: title,
            description: description,
            price: price,
            code: code,
            stock: stock
        }

        const repeatedProduct = this.products.find(prod => prod.code === product.code)

        if (!repeatedProduct) {
            this.products.push(product)
        } else {
            console.log(`Error: El código ${product.code} ya existe. No se puede agregar el producto.`);
        }

    }

    getProducts() {
        console.log(this.products)
    }
}

const manager = new ProductManager()

function getRandomNumber() {
    let randomNumber = Math.floor(100 + Math.random() * 900)

    return randomNumber
}

manager.addProduct('BMW', 'Auto Rapido', 5000, getRandomNumber(), 5)
manager.addProduct('Audi', 'Auto Superrapido', 12500, getRandomNumber(), 3)
manager.addProduct('Volkswagen', 'Auto Comodo', 1000, getRandomNumber(), 25)