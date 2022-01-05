function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

const pizza1 = pizzaOven("Estilo Chicago", "Tradicional", ["Mozzarella"], ["Pepperoni", "Salchicha"]);
const pizza2 = pizzaOven("Lanzada a mano" , "Marinara" , ["Mozzarella", "Feta"], ["Champiñones", "Aceitunas", "Cebollas"]);
const pizza3 = pizzaOven("Lanzada a mano", "Tradicional", ["Mozzarella"], ["Pepperoni", "Champiñones"]);
const pizza4 = pizzaOven("Estilo a la Mish", "Tradicional", ["Feta"], ["Salchicha", "Aceitunas"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const pizzaStorage = {
    "tipoCorteza": ["Estilo Chicago", "Lanzada a mano", "Estilo a la Mish"],
    "tipoSalsa": ["Tradicional", "Marinara"],
    "quesos": ["Mozarella", "Feta"],
    "salsas": ["Pepperoni", "Salchicha", "Champiñones", "Aceitunas"]
}

function randomPizza() {
    let pizza = {};
    const quesosMax = getRandom(1, pizzaStorage.quesos.length - 1);
    const salsasMax = getRandom(1, pizzaStorage.salsas.length - 1);
    const quesosSeleccionados = [];
    const salsasSeleccionadas = [];

    pizza.tipoCorteza = pizzaStorage.tipoCorteza[getRandom(1, pizzaStorage.tipoCorteza.length - 1)];
    pizza.tipoSalsa = pizzaStorage.tipoSalsa[getRandom(1, pizzaStorage.tipoSalsa.length - 1)];


    for(let i = 0; i <= quesosMax; i++) {
        let quesoActual = pizzaStorage.quesos[getRandom(1, pizzaStorage.quesos.length - 1)];
        if(!quesosSeleccionados.includes(quesoActual)) {
            quesosSeleccionados.push(quesoActual)
        }
    }

    for(let i = 0; i <= salsasMax; i++) {
        let salsaActual = pizzaStorage.salsas[getRandom(1, pizzaStorage.salsas.length - 1)];
        if(!salsasSeleccionadas.includes(salsaActual)) {
            salsasSeleccionadas.push(salsaActual);
        }
    }

    pizza.quesos = quesosSeleccionados;
    pizza.salsas = salsasSeleccionadas;
    return pizza;
}

const random1 = randomPizza();
console.log(random1);