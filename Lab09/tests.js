/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/

  describe('1a: Sorted Array of numbers', () => {
    it(`#Should return a sorted array of numbers in ascending order`,() => {
     function sortArray(arrayOfNumbers) {
      return arrayOfNumbers.sort((a, b) => a - b)
     }

      expect(sortArray([1, 5, 4, 2, 3])).to.deep.equal([1, 2, 3, 4, 5]) //use to.deep.equal to compare contents of arrays and objects
      expect(sortArray([-1,100,0,5,23])).to.deep.equal([-1,0,5,23,100])

    })
  })

  describe(`1b: Manage my Wallet`, () => {
    it(`Should create a Wallet Object with Starting money and Carry out associated methods`, () =>{
      class Wallet {
   constructor(startingMoney) {
     this.money = startingMoney
   }

   addMoney(amount) {
     this.money += amount
   }

   removeMoney(amount) {
     this.money -= amount
   }
 }
    })
 describe('Wallet', () => {
  
  describe('constructor', () => {
    it('should create a wallet with starting money', () => {
      const wallet = new Wallet(100);
      expect(wallet.money).to.equal(100);
    });

    it('should create a wallet with zero money', () => {
      const wallet = new Wallet(0);
      expect(wallet.money).to.equal(0);
    });

    it('should handle decimal starting amounts', () => {
      const wallet = new Wallet(50.75);
      expect(wallet.money).to.equal(50.75);
    });
  });

  describe('addMoney', () => {
    it('should add money to the wallet', () => {
      const wallet = new Wallet(100);
      wallet.addMoney(50);
      expect(wallet.money).to.equal(150);
    });

    it('should add decimal amounts correctly', () => {
      const wallet = new Wallet(100);
      wallet.addMoney(3.50);
      expect(wallet.money).to.equal(103.50);
    });

    it('should handle multiple additions', () => {
      const wallet = new Wallet(100);
      wallet.addMoney(20);
      wallet.addMoney(30);
      expect(wallet.money).to.equal(150);
    });
  });

  describe('removeMoney', () => {
    it('should remove money from the wallet', () => {
      const wallet = new Wallet(100);
      wallet.removeMoney(25);
      expect(wallet.money).to.equal(75);
    });

    it('should remove decimal amounts correctly', () => {
      const wallet = new Wallet(100);
      wallet.removeMoney(14.99);
      expect(wallet.money).to.equal(85.01);
    });

    it('should handle multiple removals', () => {
      const wallet = new Wallet(100);
      wallet.removeMoney(20);
      wallet.removeMoney(30);
      expect(wallet.money).to.equal(50);
    });

    it('should allow balance to go negative', () => {
      const wallet = new Wallet(10);
      wallet.removeMoney(25);
      expect(wallet.money).to.equal(-15);
    });
  });

  describe('combined operations', () => {
    it('should handle adding and removing money in sequence', () => {
      const wallet = new Wallet(100);
      wallet.removeMoney(14.99);
      wallet.addMoney(3);
      expect(wallet.money).to.equal(88.01);
    });

    it('should handle complex transaction sequences', () => {
      const wallet = new Wallet(100);
      wallet.addMoney(50);
      wallet.removeMoney(25);
      wallet.addMoney(10);
      wallet.removeMoney(5);
      expect(wallet.money).to.equal(130);
    });
  });
 })
 })

/*
describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })
*/


 describe('1c: Day of the Week', () => {
  describe('dayOfTheWeek', () => {
    it(`should return the day of the week based on the input number`, () => {

    
    const dayOfTheWeek = (num) => {
   switch (num) {
     case 1:
       return'Monday';
     case 2:
       return 'Tuesday' ;
     case 3:
       return 'Wednesday';
     case 4:
       return 'Thursday';
     case 5:
       return 'Friday';
     case 6:
       return 'Saturday';
     case 7:
       return 'Sunday';
     default:
       return 'Err. Something went wrong.';
   }}
    expect(dayOfTheWeek(1)).to.equal('Monday');
    expect(dayOfTheWeek(2)).to.equal('Tuesday');
    expect(dayOfTheWeek(3)).to.equal('Wednesday');
    expect(dayOfTheWeek(4)).to.equal('Thursday');
    expect(dayOfTheWeek(5)).to.equal('Friday');
    expect(dayOfTheWeek(6)).to.equal('Saturday');
    expect(dayOfTheWeek(7)).to.equal('Sunday');
    expect(dayOfTheWeek(8)).to.equal('Err. Something went wrong.');
    })
 });


 })

 describe('1d: Only Wizards shall pass!', () => {
  it('should return an array containing only wizards', () => {
    const movieCharacters = [
   {
     name: 'Howl',
     isAWizard: true,
     quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
   },
   {
     name: 'Kalcifer',
     isAWizard: false,
     quote: `I don't cook! I'm a scary and powerful fire demon!`,
   },
   {
     name: 'Gandalf',
     isAWizard: true,
     quote: `You shall not pass!`,
   },
   {
     name: 'Luke Skywalker',
     isAWizard: false,
     quote: `May the Force be with you.`,
   },
 ]

 function onlyWizards(arrayOfCharacters) {
   return arrayOfCharacters.filter((character) => character.isAWizard == true)
 }

    const result = onlyWizards(movieCharacters)
    
    expect(result).to.have.lengthOf(2) // Should return 2 wizards
    expect(result.every(char => char.isAWizard)).to.be.true // All should be wizards
    expect(result[0].name).to.equal('Howl')
    expect(result[1].name).to.equal('Gandalf')
 
  })
 })

})