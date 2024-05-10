// Lesson 3: Associative Arrays & Data Options
console.group("EXAMPLES: ")
// example 1 
var sortedArray = []
var firstNames = ['Bones', 'Welma', 'Frank', 'Han', 'Jack']
var lastNames = ['Smith', 'Seger', 'Mathers', 'Solo', 'Jackles']
var heights = [158, 169, 172, 183, 201]
// creating sortedArray for later
firstNames.forEach((item, index) => {
   sortedArray.push({firstName: item, lastName: lastNames[index], height: heights[index]})
})
var userFirstName = prompt("Enter your first name: ")
var userLastName = prompt("Enter your last name: ")
var userHeight = Number(prompt("Enter your height: "))

sortedArray.push({firstName: userFirstName, lastName: userLastName, height: userHeight})
sortedArray.sort(function(a,b) {return a.height - b.height})


// retreving sortedArray information and changing original arrays acordingly
sortedArray.forEach(({firstName, lastName, height}, index) => {
   // setting original arrays properly
  firstNames[index] = firstName
  lastNames[index] = lastName
  heights[index] = height
})
console.group("EXAMPLE 1: FIRST AND LAST NAME / HEIGHT")
console.table([firstNames, lastNames, heights])
console.groupEnd()

// example 2

// Below is a game of tic tac toe in progress.

// a. Write a function called displayBoard() that takes this array as a parameter and displays the board.
console.group("EXAMPLE 2: TIC TAC TOE")
let ticTacToeBoard = [
  ['X', 'X', 'O'],
  ['', 'X', 'O'],
  ['', '', '']
]
function displayBoard(board) {
  console.table(board)
}
displayBoard(ticTacToeBoard)

while (true) {
  let xPlayerRow = +prompt("ROW TO SELECT: ")
  let xPlayerColumn = +prompt("COLUMN TO SELECT: ")
  if (ticTacToeBoard[xPlayerRow - 1][xPlayerColumn - 1] == "") {
    ticTacToeBoard[xPlayerRow - 1][xPlayerColumn - 1] = "X"
    checkForWinner(ticTacToeBoard)
    break;
  }
  else {
    alert("OCCUPIED SPACE...")
  }
}


function checkForWinner(letters) {
  // scanning through ticTacToeBoard for possibilities
  // pattern checks
  // positions for vertical matches
  let positions = [ 0, 0, 0]
    // horizontal match
    letters.forEach((item, index) => {
         // horizontal match
         let horizontalX = item.filter(item => item == "X").length
         if (horizontalX === 3) {
           console.log("WINNER")
         }
         // additing to positions for vertical match
         item[0] ? positions[0]++ : ""
         item[1] ? positions[1]++ : ""
         item[2] ? positions[2]++ : ""
         if (positions[0] === 3 || positions[1] === 3 || positions[2] === 3 ) {
            console.log("WINNER")
         }
         // diagonal check
         else if (positions[0][0] == "X" && positions[1][1] =="X" && positions[2][2] == "X" || positions[0][2] == "X" && positions[1][1]  =="X" && positions[2][0] == "X") {
           console.log("WINNER")
         }
    })
}
console.groupEnd()



// Exercise 3
// Below is a dragon object with health, attack character, and attack power key/values.

var dragon = {
  health: 100,
  atkString: '>',
  attackPwr: 15
}

function attack(dragonObject) {
  const {attackPwr, atkString} = dragonObject
  return atkString.repeat(attackPwr)
}


let randomHealthNum = Math.floor(Math.random() * 21) + 80
let randomAttackNum = Math.floor(Math.random() * 11) + 10

var lion = {
  health: randomHealthNum,
  atkString: "*",
  attackPwr: randomAttackNum
}

// BATTLE ROUND
console.group("EXAMPLE 3: BATTLE GAME ")
console.log("The dragon attacks!")
console.log(attack(dragon))
console.log(`The lion is struck for ${dragon.attackPwr} and has ${lion.health - dragon.attackPwr}`)
console.log("The lion attacks!")
console.log(attack(lion))
console.log(`The dragon is struck for ${lion.attackPwr} and has ${dragon.health - lion.attackPwr}`)
console.groupEnd()
console.groupEnd()
// questions

// What is a drawback of using parallel arrays vs other types of related data structures? What is something you need to be mindful of when using parallel arrays?
console.group("QUESTIONS: ")
// QUESTION 1
console.log("Question 1: \n Parallel arrays require specific indexing attention. When one index of one array changes, the other one must also change accordingly. ")



// In the following, change one or both of the last 2 lines so that the data is once again related.
// QUESTION 2
var cities = ['Edmonton', 'Calgary', 'Vancouver']
var popByThousands = [1469, 1543, 2737]
cities.unshift('Winnipeg');
popByThousands.unshift(850);
console.group("QUESTION 2: ")
console.table([cities, popByThousands])
console.groupEnd()
// Use the array below to state how you could do the following:
// QUESTION 3
console.group("QUESTION 3: ")
let pokemon = [ ['Bulbasaur', 'grass', 318], ['Charmander', 'fire', 309], ['Squirtle', 'water', 314] ];
// a. Output 'Charmander'
console.log("A: " + pokemon[1][0])

// b. Change 'grass' to 'poison'
pokemon[0][1] = 'poison'
console.log("B: ")
console.table(pokemon)

// c. Decrement (decrease) 314 by 10
pokemon[2][2]-=10
console.log("C: ")
console.table(pokemon)

// d. Push a new entry with values: 'Caterpie', 'bug', 195
pokemon.push(['Caterpie', 'bug', 195])
console.log("D: ")
console.table(pokemon)



// e. Write a loop to output all pokemon. A single line should look like:
console.log("E: ")
pokemon.forEach(item => 
  console.log(`Name: ${item[0]} \t Element: ${item[1]} \t Total Stats: ${item[2]}`)  
)
console.groupEnd()

// 4. Take the following data and create an object out of it.

//  > Abdi's dog's breed is Golden Retriever. It weights 30 kg and has Dark Golden color for its fur.
console.group("QUESTION 4: ")
let abdiDog = {
  breed: "Golden Retriever",
  weight: '30kg',
  furColor: 'darkGolden'
}
console.log("ABDI DOG:", abdiDog)
//  > An account holder's first name is Tifa. Her last name is Lockhart. Her account number is 2157 and her balance is 537 dollars.
let tifaInfo = {
  lastName: "Lockhart",
  accountNum: 2157,
  balance: 537
}
console.log("TIFA INFO:", tifaInfo)
console.groupEnd()

// 5. What statement would perform the following:
console.group("QUESTION 5: ")
var car = { make : 'Hyundai', model : 'Tucson', weight : 950, color : 'black' }

//   a. Output the make of the car.
console.log("A: " + car.make)

//   b. Change the color of the car to 'red'
car.color = 'red'
console.log("B: " + car.color)

//   c. Increase the weight of the car by 50 kg.
car.weight+=50
console.log("C: " + car.weight)



//   d. Add a new key/value.  The year of the car is 2012.
car.year = 2012
console.log("D: ", car)
console.groupEnd()

// 6. An array called instagramPosts contains 100 social media objects. Each object keys called:
//    - image
//    - date
//    - numLikes
//   a. What line of code would you use to display the date on the 35th post?
     console.group("QUESTION 6: ")
     console.log("A: instagramPosts[34].date")


//   b. Write a for loop that prints the image files for all posts.
   console.log("B: for (let i = 0; i < instagramPosts.length; i++) {console.log(instagramPosts[i].image)}")
//   c. Write a loop that counts and then displays the number of posts that have over 50 likes.
   console.log("C: instagramPosts.filter(item => item.numLike > 50).length")
   console.groupEnd()
// 7. Take the following parallel array data structure, and
console.group("QUESTION 7: ")
let bigArray = []
let objectArray = []
title = ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens', 'Avengers: Infinity War'];
grossInMillions = [2.847, 2.797, 2.187, 2.068, 2.048];
yearReleased = [2009, 2019, 1997, 2015, 2018];
//   a. Turn it into a multidimensional array.

for (let i = 0; i < title.length; i++) {
  bigArray.push([title[i], grossInMillions[i], yearReleased[i]])

}
console.log("MULTI DIMENSIONAL ARRAY: " + bigArray)
//   b. Turn it into an array of objects.
bigArray.map((item, index) => {
  objectArray.push({
    title: item[0],
    grossInMillions: item[1],
    yearReleased: item[2]
  })

})
console.log("ARRAY OBJECT: ", objectArray)
console.groupEnd()