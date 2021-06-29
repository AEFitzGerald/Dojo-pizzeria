function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("gluten free", "pesto",["goat brie"], ["beyond meat sausage"])
var pizza4 = pizzaOven("cauliflower crust", "garlic basil", ["vegan mozz"], ["plant based pepperoni"])
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

