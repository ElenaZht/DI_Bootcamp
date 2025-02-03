const {products} = require('./products')

function findProd(product){
    const foundProduct = products.find(pr => pr.name === product)
    return foundProduct ? foundProduct : false
}

console.log(findProd('milk')) //{ name: 'milk', price: 10, category: 'liquids' }
console.log(findProd('bread')) //false
console.log(findProd('pasta')) //{ name: 'pasta', price: 11, category: 'solids' }