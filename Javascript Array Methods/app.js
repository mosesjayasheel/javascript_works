const prices = [100, 200, 300]

const finalprices = prices.map( (prices) => prices * 1.18 );

console.log(finalprices);

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5}
]

const itemprices = items.map( (product) => product.name);

const itemPrices = items.map((item) => item.price);

const expensiveItems = items.filter((item) => item.price >= 100);

const total = items.reduce( (item, acc) => item + acc.price, 0);

console.log(itemprices);

console.log(itemPrices);

console.log(expensiveItems);

console.log(total);