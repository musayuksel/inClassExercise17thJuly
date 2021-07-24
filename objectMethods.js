//Exercise (1) Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!
/* let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  processor : "intel",
  memory:16,
  storageOptions : [256,512,1024],
  isTouchscreen: false,

}; */

//Exercise (2)#
// Think of 5 different real world "things" that you can describe with a JavaScript object Assign each of them to a separate variable
/* 
let jumper = {
  color: "blue",
  isCotton: true,
};
let pen = {
  color: "black",
  size: 0.7
};
let mug = {
  material: "steel",
  colors: ['red','grey']
};
let noteBook = {
  page: 120,
  isLine: true,
};
let table = {
  color: "yellow",
  material: "wood"
};
 */
//Exercise (3)
//The objects below have some syntax issues - try and fix them all!

/* 
let kittens = {
  furColour: "orange",
  age :"23"
};

let laptops ={
  brand: "Lenovo",
  ram: "5GB"
}

let phone = {
  operatingSystem :"iOS",
  hasStylus: true,
  megapixels: 12,
  batteryLife: "24 hours"
} */

/*Objects Get and Set*/
// Exercise (1)
// Console.log the values of each property of "kitten"
/* let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};
console.log(kitten.ageMonths);
console.log(kitten["isFemale"]);
console.log(kitten.furColour);
 */
//The following code contains syntax errors - try and fix them! Once you fix them, run the code, it should output the correct values!

// It should output: iPhone 2017

/* let phone = {
  brand:'iPhone',
  model :'iPhone X',
  launchYear: 2017,
  isUnlocked: true
};

let phoneBrand = phone.brand;
let phoneLaunchYear = phone["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);
 */

// Write code in the space provided so that it outputs "Gilbert"
// It should output: "Gilbert"
/* const kitten = {
  name :"Gilbert"
}
console.log(kitten.name); */

//EXERCISE

// Write code in the space provided so that the expected values output

// It should output: Rex true
/* let dog = {
  name: "Billy",
  wantsToPlay: false,
};
dog.name = "Rex";
dog.wantsToPlay =true;
console.log(dog.name);
console.log(dog.wantsToPlay);
 */
// -> it should output:
// Rex
// true

/* let person = {
  name: "Alice",
  age: 25,
  greet : () =>'Hello everybody',
  // sayName : () => `My name is ${this.name}`
  sayName : function(){ return`My name is ${this.name}`;}
  
};

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
); */
// The following code contains syntax errors - try and fix them! Once you fix them, run this file, it should output the correct values!


/* let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
        this.currentAddress = newAddress;
    },
    celebrateBirthday: function (){
        this.age = this.age + 1;
    }
};
console.log(person); */

// The following code contains syntax errors - try and fix them!

// Once you fix them, run this file, it should output the correct values!


/* let person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function(newAddress) {
      this.currentAddress = newAddress;
  },
  celebrateBirthday: function(){
      this.age = this.age + 1;
  }
};


person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);
 */

//Alice has a list of good friends.

// Define a method "makeFriend" to add a new friend to her list
/* let person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend : function (str){
    this.friends.push(str);
  }
};

person.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
);
 */

// A coffee machine is defined below. One that can buy three different coffees. Complete the methods "insertMoney" and "getCoffee" to match the expected result.

// insertMoney takes an amount in parameter to add money in the coffee machine. getCoffee takes a coffee type in parameter and dispends the selected coffee only if the inserted amount is greater or equal than the price of the coffee!

/* let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) { this.insertedAmount = amount},
  getCoffee: function (coffee) {
    if(this.prices[coffee] <= this.insertedAmount) {
      return `Please take your ${coffee}`;
    } else {
      return `Sorry you don't have enough money for a ${coffee}`;
    }
  },
};



coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
); */


// Define an array containing the 3 persons defined below.
// Return an array of the person names (hint: use map).
// Filter the persons to return an array with the person younger than 28 years old (hint: use filter).

/* let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};


let persons = [person1,person2,person3]// Complete here

let personNames = persons.map(elm => elm.name);// Complete here

let personsYoungerThan28YearsOld = persons.filter(elm => elm.age < 28);// Complete here

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
); */
// An array of travel destinations is defined below. Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

// Filter the travelDestinations array to return all destination names reachable within 500 kms.
// Find a destination name reachable by ferry.
// Print in the console all the destination names more than 300 kms far away and reachable by train.

/* let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

let destinationNamesWithin500Kms = travelDestinations.filter(dest => dest.distanceKms <=500).map(elm => elm.destinationName); // Complete here

let destinationNameReachableByFerry = travelDestinations.filter(elm => elm.transportations.includes('ferry')).map(elm=>elm.destinationName);// Complete here

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(elm =>(elm.distanceKms > 300 && elm.transportations.includes('train'))).map(elm => elm.destinationName);

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);
 */
// Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.

// We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

// Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

// Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.

// Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.
let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];


let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    // Complete here
    const availableSeat =this.totalSeats - this.numberOfCustomers;
   return restaurants.filter(restaurant => restaurant.totalSeats-restaurant.numberOfCustomers >= numberOfPeople).map(elm => elm.name);
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
    return restaurants.filter(elm => elm.menu.includes(dishName)).map(elm => elm.name);
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
    return restaurants.filter(elm => elm.address.area === area).length;
  },
};

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
);
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
);
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
