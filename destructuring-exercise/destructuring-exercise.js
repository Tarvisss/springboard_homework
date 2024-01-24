// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ? will output 8
// console.log(yearNeptuneDiscovered); // ? will output 1846



let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//______________________________________________________________________________________________
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? Your first name Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // ? Your name is Melissa and you like green
  getUserData({}) // ? Your name is undefined and you like green


  let [first, second, third] = ["Maya", "Marisa", "Chi"]; // Maya // Marisa // Chi


  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings);// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers); // [10, 30, 20]

//ES5 Assigning Variables to Object Properties
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  //let a =  obj.numbers.a;
  //let b =  obj.numbers.b;

//ES2015 Object Destructuring
  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  //const {a,b} = obj.numbers


//ES5 Array Swap
  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]





raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})