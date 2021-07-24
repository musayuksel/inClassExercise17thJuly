// let person = {
//   name: "Alice",
//   age: 25,
//   greet : function(){
//     return "Hello everybody";
//   },
//   sayName : function(){
//     return `My name is ${this.name}`
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//   `Expected result: Hello everybody. Actual result: ${person.greet()}`
// );
// console.log(
//   `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
// );
// let person = {
//   name: "Alice",
//   age: 25,
//   currentAddress: "Glasgow",
//   changeAddress: function(newAddress) {
//       this.currentAddress = newAddress;
//   },
//   celebrateBirthday: function (){
//       this.age = this.age + 1;
//   }
// };



// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.changeAddress("Edinburgh");
// console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

// person.celebrateBirthday();
// console.log(`Expected result: 26. Actual result: ${person.age}`);


// let person = {
//   name: "Alice",
//   friends: ["John", "Nina"],
//   makeFriend : function(friendName){
//     return this.friends.push(friendName);
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.makeFriend("Bob");

// console.log(
//   `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// );

// let coffeeMachine = {
//   brand: "Super Coffee",
//   prices: {
//     cappuccino: 2.4,
//     blackCoffee: 1.5,
//     flatWhite: 3.0,
//   },
//   insertedAmount: 0,

//   insertMoney: function (amount) {
//     this.insertedAmount = amount;
//     console.log(` you add ${amount} total : ${this.insertedAmount}`);
//   },
//   getCoffee: function (coffee) {
//     if(this.insertedAmount >= this.prices[coffee]){
//       this.insertedAmount -= this.prices[coffee];
//       return `Please take your ${coffee}`;
//     } else {
//       return `Sorry you don't have enough money for a ${coffee}`
//     }
//   },
// };
// // console.log(coffeeMachine.insertedAmount,'<<<<<<<<<<<<<<<');

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// coffeeMachine.insertMoney(2.4);
// console.log(
//   `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
//     "cappuccino"
//   )}`
// );

// coffeeMachine.insertMoney(1.5);
// console.log(
//   `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
//     "blackCoffee"
//   )}`
// );

// coffeeMachine.insertMoney(4.0);
// console.log(
//   `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );

// coffeeMachine.insertMoney(2.4);
// console.log(
//   `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );

