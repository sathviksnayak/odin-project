const orders = new Map([

 ["o1",{name:"Espresso",price:3.50}],
 ["o2",{name:"Latte",price:4.20}],
 ["o3",{name:"Cappuccino",price:4.50}],
 ["o4",{name:"Mocha",price:4.80}],
 ["o5",{name:"Americano",price:3.80}],
 ["o6",{name:"Flat White",price:4.30}],
 ["o7",{name:"English Breakfast Tea",price:2.90}],
 ["o8",{name:"Green Tea",price:3.20}],
 ["o9",{name:"Butter Croissant",price:3.50}],
 ["o10",{name:"Chocolate Muffin",price:4.10}],
 ["o11",{name:"Blueberry Cheesecake",price:5.40}],
 ["o12",{name:"Red Velvet Pastry",price:4.90}]

]);


let order = [];
let cost = 0;


function Cart(itemid){

    let item = orders.get(itemid);

    order.push(item);

    cost += item.price;

    console.log(order);

    console.log("Total =", cost);

}
function getCart(){

    return {
        items: order,
        total: cost
    };
}

export { Cart, getCart };