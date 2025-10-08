/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript ECMAScript 6 and Intermediate JavaScript
   FE JS4 Lab
*/

/* ----------------------------------------------------- */
// Key Term List:
// let
// const
// var
// declare a variable
// ECMAScript6 (ES6)
// arrow function
// function
// parameter
// argument
// callback
// promise
// string concatentation
// template literal
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*
 *                                     ~Lunch Date~
 *
 *  Your friend is coming over for lunch. Let's use code to decide what to eat!
 *
 */

/*---------------------------------- Let and Const -------------------------------------*/
console.log(`-------------------------- 
Question 1: Declaring Let and Const variables`)

/*
 * Step 1: Initialize two variables using 'const' and set the value of those variables to what you're having to eat and drink
 * Step 2: Initialize two more variables using 'let' and set one value to your name, and the other to your friends name.
 *
 * ↓ YOUR CODE HERE ↓ */

const toEat = 'sandwiches'
let toDrink = 'coke'

let myName = 'Sarah'
let friendName = 'Marco'

//Question: Name a reason why you would use const instead of let.
//Answer: Const is a variable that we do not want to change while let is going to change

/*---------------------------------- Template Literals -------------------------------------*/
console.log(`-------------------------- 
Question 2: Template Literals`)

/*
 * Step 1: Using template literals and the variables we just created,
 *         write a sentence describing what you and your friend are eating & drinking for lunch.
 *
 *
 * ↓ YOUR CODE HERE ↓ */

console.log(`${myName} and ${friendName} are drinking ${toDrink} and eating ${toEat} for lunch.`)

//Question: How would the sentence you wrote look if you used string concatenation instead of template literals?
//          console.log() your answer to check
//Answer: 
console.log(myName + " and " + friendName + " are drinking " + toDrink + " and eating " + toEat + " for lunch.")
console.log(`-------------------------- 
Question 2a: Oh no`)

/* Oh no! You just remembered your friend is allergic to the drink we prepared!
 *
 * Step 1: In the section below, reassign your drink item to something else. console.log() your drink variable and run your code.
 * Step 2: Make a change to your code in Question 1 to fix the error. Run your code to make sure it's fixed.
 *
 * ↓ YOUR CODE HERE ↓ */

toDrink = "grape soda"

console.log(toDrink)

//Question: Read the error message - in your own words - what does it mean?
//Answer: That we assiged this variable to a constant variable so we can not change it so we must change it to let

/*---------------------------------- Arrow Functions -------------------------------------*/
console.log(`-------------------------- 
Question 3: Arrow Functions`)

/* You and your friend eat together so often that having a new variable for each food/drink
 *     item could get tiring.
 *
 * Let's use functions so we can easily describe what we're eating.
 *
 * Step 1: Using ES6 standards, write a fat arrow function using const called "lunchTime" that
 *         takes in two parameters: foodChoice, and drinkChoice.
 * Step 2: Have the function 'return' the same sentenced you used to describe eating lunch above
 *         but replace the food/drink variables with our newly created parameters.
 * Step 3: Copy the code below, ↓ paste it underneath our new function, and run the code.
 *         console.log(lunchTime('Pizza','Water'))
 * ↓ YOUR CODE HERE ↓ */

const lunchTime = (foodChoice, drinkChoice) => {return `${myName} and ${friendName} are drinking ${drinkChoice} and eating ${foodChoice} for lunch.` }
console.log(lunchTime('Pizza','Water'))

//Question: What would your function look like if we were using the old way of creating a function?
//Answer:
function dinnerTime(foodChoice, drinkChoice){
   return `${myName} and ${friendName} are drinking ${drinkChoice} and eating ${foodChoice} for dinner.`}
console.log(dinnerTime('Pizza','Water'))
/*---------------------------------- Callbacks -------------------------------------*/
console.log(`-------------------------- 
Question 4: Callbacks`)

/**
 * You and your friend ALWAYS eat lunch, but it might be a good idea to plan for the next date in advance.
 * Let's use functions and callbacks to describe what we're eating today, and what we want tomorrow.
 *
 * Step 1: Create a ES6 fat arrow function called 'foodForTodayAndTomorrow' that takes 3 parameters: tomorrowsFoodChoice, tomorrowsDrinkChoice, and callbackFunction.
 * Step 2: Have your function return a new string in this format: `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`
 * Step 3: console.log() your new function, foodForTodayAndTomorrow, and pass in lunchTime('newFoodItem', 'newDrinkItem') as the argument for the "callbackFunction" parameter.
 *
 * ↓ YOUR CODE HERE ↓ */
const foodForTodayAndTomorrow = (tomorrowsFoodChoice, tomorrowsDrinkChoice, callbackFunction) => {return `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`}
console.log(foodForTodayAndTomorrow('tacos','horchata', lunchTime('pizza','water')))

console.log(`-----------Finished------------`)
