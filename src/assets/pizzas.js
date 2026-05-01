import napolitana from '../images/napolitana.jpg'
import pepperoni from '../images/pepperoni.webp'
import espanola from '../images/espanola.jpg'
import hawaiana from '../images/hawaiana.jpeg'
const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: napolitana
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: espanola
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: pepperoni
  },
  {
    id: 4,
    name: "Vegetariana",
    price: 6500,
    ingredients: ["mozzarella", "pimientos", "aceitunas", "champiñones"],
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
  },
  {
    id: 5,
    name: "Hawaiana",
    price: 6800,
    ingredients: ["mozzarella", "jamón", "piña"],
    img: hawaiana
  },
  {
    id: 6,
    name: "Cuatro Quesos",
    price: 7200,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "queso azul"],
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
  }
];

//carro de compras
const pizzaCart = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    img: napolitana,
    count: 1
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    img: espanola,
    count: 1
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    img: pepperoni,
    count: 1
  }
];

export { pizzas, pizzaCart };