function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings = toppings;
        return pizza;
}


var pizzaOne = pizzaOven("deep dish", "traditional", ["mozzarela"], ["pepperoni", "sausage"]);
console.log(pizzaOne);

var pizzaTwo = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizzaTwo);

var pizzaThree = pizzaOven("thin crust", "buffalo", ["provolone"], ["garlic"])
console.log(pizzaThree);

var pizzaFour = pizzaOven("stuffed crust", "alfredo", ["cheddar"], ["ricotta", "cold cheese"])
console.log(pizzaFour);