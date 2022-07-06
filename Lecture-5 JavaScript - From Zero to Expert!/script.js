'use strict';

//! Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//! Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Ovdje je tvoje omiljen makaron ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//! USE any data type, RETURN any data type, short-circuiting

console.log('------- OR --------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || null);
console.log(undefined || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------- AND --------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

//! Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroms', 'spinach', 'origano');
}

restaurant.orderPizza && restaurant.orderPizza('mushroms', 'spinach');

/* 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Mahe Djikica',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Mahe Djikica', starterIndex: 1 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

! default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

! Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 47 };
({ a, b } = obj);
console.log(a, b);

! Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

 
 

! -----------SPREAD OPERATOR-----------
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

! Copy array

const mainMenuCopy = [...restaurant.mainMenu];

! Join 2 arrays

const menuNew = [...newMenu, ...restaurant.starterMenu];
console.log(menuNew);

! Itterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, '', '.S'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("let's make pasta! ingredients1?"),
  prompt('ingredients2?'),
  prompt('ingredients3?'),
 
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

! Objects

const newRestaurant = { foundedIn: 1975, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Bella Italia';

console.log(newRestaurant.name, restaurantCopy.name);

! ---- SPREAD operator becose of right side =
const arra = [1, 2, ...[3, 4]];

! ---- REST operator becose of left side =
const [e, f, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(e, f, others);
const [Pizza, , Rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Rissoto, otherFood);

! ---- Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

! Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(1, 3, 5);
add(1, 2, 9);
add(1, 6, 8, 3, 4, 3, 7, 8);

const x = [2, 34, 34, 7];
add(...x);
restaurant.orderPizza('mushroms', 'onion', 'spinach', 'origano', 'ananas');
 
/*
! Destructing arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


! substitution main <----> secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
 
[main, secondary] = [secondary, main];
console.log(main, secondary);

! Recive 2 values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, main);

! Nested descructuring
const nested = [2, 3, [4, 5]];
/* const [i, , j] = nested;
console.log(i, j);
 
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, r = 1, q = 1] = [2, 9];
console.log(p, r, q);
 */
