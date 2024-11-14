var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var newOrderid = 1;
var cashInregister = 100;
var orderQueue = [];
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInregister += selectedPizza.price;
    var newOrder = {
        id: newOrderid + 1,
        pizza: selectedPizza,
        status: "orderd",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
console.log("Pushed into the Order Queue: ", placeOrder("Pepperoni"));
