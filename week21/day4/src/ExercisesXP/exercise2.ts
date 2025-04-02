// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a 
// string with the product’s name and price. 
// Attempt to modify the id property after creating 
// a new instance of the class and observe the result.

class Product{
    constructor(
        readonly id: number,
        public  name: string,
        public price: number,
    ){}

    getProductInfo(){
        return `${this.name} costs ${this.price}$`
    }
}

const bread = new Product(0, 'Bread', 2)
bread.id = 1// Cannot assign to 'id' because it is a read-only property.
