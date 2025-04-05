type User = {
    type: 'user';
    name: string;
    age: number;
   };
   
type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};


const handleData = <T extends User | Product | Order>(arr: T[]): string[] => {
    return arr.map(item => {
        if (item.type === 'user'){
            return `Hello, ${item.name}! You are ${item.age} already`

        } else if (item.type === 'product'){
            return `The item ${item.id} cost ${item.price}$`


        } else if (item.type === 'order'){
            return `Order id ${item.orderId} includes ${item.amount} items`

        }
        return 'unknown item'
    })

}

const user1: User = {
    type: 'user',
    name: 'Andrew',
    age: 29
}

const user2: User = {
    type: 'user',
    name: 'Will',
    age: 30
}
const product1: Product = {
    type: 'product',
    id: 1,
    price: 15
}
const product2: Product = {
    type: 'product',
    id: 123,
    price: 5
}

const order1: Order = {
    type: 'order',
    orderId: '1234',
    amount: 2
}

const order2: Order = {
    type: 'order',
    orderId: '1564',
    amount: 6
}
const array = [user1, product1, order1, order2, user2, product2]
console.log(handleData(array)) 
// [
//     'Hello, Andrew! You are 29 already',
//     'The item 1 cost 15$',
//     'Order id 1234 includes 2 items',
//     'Order id 1564 includes 6 items',
//     'Hello, Will! You are 30 already',
//     'The item 123 cost 5$'
//   ]