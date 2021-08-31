'use strict';
/////////////////////////////////////////////////////////////////////////////
// /*---------------------------- ARRAYS AND LOOP ----------------------*/
////////////////////////////////////////////////////////////////////////////

// Assignmet# 01: Declare and initialize an empty multidimensional array. (Array of arrays)
let myMultidemensionalArray = [[], [], []];

/*Assignment# 02: Declare and initialize a multidimensional array representing the following 
matrix: 0 1  2 3
        1 0 1 2
        2 1 0 1
*/
let myMatrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

//Assignment# 03: Write a program to print numeric counting from 1 to 10.

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

/* Assignment# 04: Write a program to print multiplication table of any number using for loop. Table number &length should be taken as an input from user.
 */

let mytable = Number(prompt('Enter a Number To Show Its Multiplication Table.'));
let mytable_length = Number(prompt('Enter Length For Multiplication Table'));
if (mytable && mytable_length) {
  for (let index = 1; index <= mytable_length; index++) {
    console.log(`${mytable} X ${index} = ${mytable * index}`);
  }
} else {
  console.log('Wrong Entry!!');
}

//Assignment# 05: Write a program to print items of the following array using for loop.
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (const key in fruits) {
  console.log(`Element at index ${key} is ${fruits[key]}`);
}

/*Assignment# 06: Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

let counting = '';
let reverseCounting = '';
let even = '';
let old = '';
let series = '';
for (let index = 1; index <= 15; index++) {
  counting += `${index},`;
}
for (let index = 10; index >= 1; index--) {
  reverseCounting += `${index},`;
}
for (let index = 0; index <= 20; index++) {
  if (index % 2 === 0) {
    even += `${index},`;
  } else {
    old += `${index},`;
  }
}
for (let index = 2; index <= 20; index++) {
  if (index % 2 === 0) {
    series += `${index}K,`;
  }
}
console.log(`Counting:
${counting}`);
console.log(`Reverse Counting:
${reverseCounting}`);
console.log(`Even:
${even}`);
console.log(`Old:
${old}`);
console.log(`series:
${series}`);

/*
Assignment# 07: You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”].
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
*/

let bakery = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties'];
let searchItem = prompt("Welcome To ABC Bakery /What do you want  to order sir/Ma'am");
let found = bakery.indexOf(searchItem);
if (found >= 1) {
  console.log(`${searchItem} is Available at index ${found} in our bakery`);
} else {
  console.log(`We are Sorry. ${searchItem} is not Available  in our bakery`);
}

//Assignment# 08: Write a program to identify the largest number in the given array.
//A = [24, 53, 78, 91, 12].

let A = [24, 91, 78, 53, 12];
let max_number = 0;
for (const key in A) {
  if (max_number < A[key]) {
    max_number = A[key];
  }
}
console.log('Array Items', A);
console.log(`The Largest Number is: ${max_number}`);

//Assignment# 09: Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

let B = [24, 53, 78, 91, 12];
let min_number = B[0];
for (const key in B) {
  if (min_number > B[key]) {
    min_number = B[key];
  }
}
console.log('Array Items', B);
console.log(`The Smallest Number is: ${min_number}`);

//Assignment# 10: Write a program to print multiples of 5 ranging 1 to 100.

let myStr = '';
for (let index = 1; index <= 20; index++) {
  myStr += `${index * 5},`;
}
console.log(myStr);

/////////////////////////////////////////////////////////////////////////////
/*---------------------------- STRING METHODS  ---------------------------*/
////////////////////////////////////////////////////////////////////////////

/*Assignment# 01: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
 */

let firstName = prompt('First Name?');
let lastName = prompt('last Name?');
if (firstName && lastName) {
  let fullName = firstName + ' ' + lastName;
  console.log(`Hi ${fullName}`);
}

/*
Assignment# 02: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
*/

let myFavoritePhone = prompt('Favorite Phone model?');
let myFavoritePhoneLength = myFavoritePhone.length;
console.log(`My Favorite phone is: ${myFavoritePhone}.
Length of the String:${myFavoritePhoneLength}`);

// Assignment# 03: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

let myCountry = 'Pakistan';
let nthIndex = myCountry.indexOf('n');
console.log(`String: ${myCountry}
Index of 'n': ${nthIndex}`);

//Assignment# 04: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

let str = 'Hello World';
let lastIndex_str = str.lastIndexOf('l');
console.log(`String: ${str}
Last Index of 'l': ${lastIndex_str}`);

//Assignment# 05: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

let word = 'Pakistani';
let thirdLatter_word = word[3];
console.log(`String: ${word}
Charactor at index 3th: ${thirdLatter_word}`);

//Assignment# 06: Repeat Q1 using string concat() method.

let my_firstName = prompt('First Name?');
let my_lastName = prompt('last Name?');
if (my_firstName && my_lastName) {
  let my_fullName = my_firstName.concat(' ' + my_lastName);
  console.log(`Hi ${my_fullName}`);
}

//Assignment# 07:Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

let city = 'Hyderabad';
let newCity = city.replace('Hyder', 'Islam');
console.log(`city: ${city}
After Replacement: ${newCity}`);

/*Assignement# 08: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and football together.”;
*/

let message = 'Ali and Sami are best friends. They play cricket and football together.';
let new_message = message.replace(/and/g, '&');
console.log(new_message);

//Assignment# 09: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let my_num = '472';
console.log(`Value: ${my_num}
Type: ${typeof my_num}`);
my_num = Number(my_num);
console.log(`Value: ${my_num}
Type: ${typeof my_num}`);

//Assignment# 10: Write a program that takes user input. Convert and show the input in capital letters.

let userInput = prompt('Enter Some String.');
let upparCaseUserInput;
console.log(`User input: ${userInput}`);
upparCaseUserInput = userInput.toUpperCase();
console.log(`Uppar case: ${upparCaseUserInput}`);

//Assignment# 11: Write a program that takes user input. Convert and show the input in title case.

let input = prompt('Enter a word ');
if (input) {
  let firstCharrator = input.slice(0, 1);
  let otherCharartor = input.slice(1);
  let output = firstCharrator.toUpperCase().concat(otherCharartor.toLowerCase());
  console.log(`Output:${output}`);
}

/*Assignment# 12:. Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser
*/

let num = 35.36;
let num_string = String(num);
let first_twoChar = num_string.slice(0, 2);
let last_twoChar = num_string.slice(3, 5);
let final_num = Number(first_twoChar.concat(last_twoChar));
console.log(`Number: ${num}
Result: ${final_num}`);

/*Assignemnt# 13:. Write a program to take user input and store username in a variable. If the username contains any special symbolamong [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
*/

let inpt = prompt('Enter User name');
if (inpt) {
  for (let index = 0; index < inpt.length; index++) {
    // debugger;/
    if (
      inpt[index].charCodeAt() === 33 ||
      inpt[index].charCodeAt() === 44 ||
      inpt[index].charCodeAt() === 46 ||
      inpt[index].charCodeAt() === 64
    ) {
      alert('Enter a valid username');
    }
  }
}

/*
Assignment# 14:You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
*/

let my_bakery = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties'];
let my_searchItem = prompt("Welcome To ABC Bakery /What do you want  to order sir/Ma'am");
let isfound = my_bakery.indexOf(my_searchItem.toLowerCase());
if (isfound >= 1) {
  console.log(`${my_searchItem} is Available at index ${isfound} in our bakery`);
} else {
  console.log(`We are Sorry. ${my_searchItem} is not Available  in our bakery`);
}

/*
Assignment# 15: Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements, prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.
*/

let userInputValue = prompt('Password??');
let valid_password = true;
let first_char_password;
if (userInputValue) {
  if (userInputValue.length >= 6) {
    first_char_password = userInputValue.slice(0, 1);
    if (!(first_char_password.charCodeAt() >= 48 && first_char_password.charCodeAt() <= 57)) {
      for (let index = 0; index < userInputValue.length; index++) {
        if (userInputValue[index].charCodeAt() >= 65 && userInputValue[index].charCodeAt() <= 90) {
        } else if (userInputValue[index].charCodeAt() >= 97 && userInputValue[index].charCodeAt() <= 122) {
        } else if (userInputValue[index].charCodeAt() >= 48 && userInputValue[index].charCodeAt() <= 57) {
        } else {
          valid_password = false;
        }
      }
    } else {
      valid_password = false;
    }
  } else {
    valid_password = false;
  }
} else {
  console.log('some thing wrong');
}

if (!valid_password) {
  console.log('Your Entered Password dont not match all Requirement');
  console.log('paswword should not start with a number');
  console.log('Password must at least 6 charactor long!!');
  console.log(`Password should contain alphabets and numbers only`);
} else {
  console.log('Your Entered a Valid Password');
}

/*Assignment# 16: Write a program to convert the following string to an array using string split method.
var university = “University of Karachi”; Display the elements of array in your browser
*/

let university_name = 'University of Karachi';
let split_str = university_name.split('');
for (let index = 0; index < split_str.length; index++) {
  console.log(split_str[index]);
}

//Assignment# 17: Write a program to display the last character of a user input.

let some_input = prompt('Enter some String');
if (some_input) {
  let last_charactor_some_input = some_input.length - 1;
  console.log(`User Input: ${some_input}
Last charactor of input: ${some_input[last_charactor_some_input]}`);
}

/*Assignemt# 18: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
 */

let sentance = 'The quick brown fox jumps over the lazy dog';
sentance = sentance.toLowerCase();
let split_sentance = sentance.split(' ');
let number_of_the = 0;
for (let index = 0; index < split_sentance.length; index++) {
  if (split_sentance[index] === 'the') {
    number_of_the++;
  }
}
console.log(`Text: ${sentance}`);
console.log(`There are ${number_of_the} occurrence(s) of "the"`);

/////////////////////////////////////////////////////////////////////////////
/*----------------------------  MATH  METHODS  ---------------------------*/
////////////////////////////////////////////////////////////////////////////

/*
Assignment# 01: Write a program that takes a positive integer from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

let some_positive_number = +prompt('Please Enter Some Positive Number.');
let some_positive_number_round = Math.round(some_positive_number);
let some_positive_number_ceil = Math.ceil(some_positive_number);
let some_positive_number_floor = Math.floor(some_positive_number);
console.log(`Number: ${some_positive_number}`);
console.log(`Round off value: ${some_positive_number_round}`);
console.log(`ceil value: ${some_positive_number_ceil}`);
console.log(`floor Value: ${some_positive_number_floor}`);

/*
 Assignemnt# 02: Write a program that takes a negative floating point number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

let some_negative_number = +prompt('Please Enter Some negative Number.');
let some_negative_number_round = Math.round(some_negative_number);
let some_negative_number_ceil = Math.ceil(some_negative_number);
let some_negative_number_floor = Math.floor(some_negative_number);
console.log(`Number: ${some_negative_number}`);
console.log(`Round off value: ${some_negative_number_round}`);
console.log(`ceil value: ${some_negative_number_ceil}`);
console.log(`floor Value: ${some_negative_number_floor}`);

/*
Assignemnt# 03: Write a program that displays the absolute value of a number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

let some_value = -46;
let absolute_value = Math.abs(some_value);
console.log(`The Absolute Value of ${some_value}: ${absolute_value}`);

//Assignment# 04: Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

let dice_value = Math.trunc(Math.random() * 7);
console.log(`Random Dice Value: ${dice_value}`);

//Assignemnt# 05: Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

let num_for_coin = Math.trunc(Math.random() * 2 + 1);
num_for_coin === 2
  ? console.log(`${num_for_coin}
Random Coin Value: Head`)
  : console.log(`${num_for_coin}
Random Coin Value: Tails`);

//Assignemnt# 06: Write a program that shows a random number between 1 and 100 in your browser.

let number_1_100 = Math.trunc(Math.random() * 100 + 1);
console.log(`Random Number Between 1 To 100: ${number_1_100}`);

/*
Assignment# 07: Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

let user_weight_input = prompt('Enter Your Weigth in Kilogram.');
let user_weight = parseFloat(user_weight_input);
console.log(`The Weight of user is: ${user_weight} kilograms`);

/*
Assignment# 08: Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
 */

let secret = Math.trunc(Math.random() * 10 + 1);
let usr_input = +prompt('Enter Number between 1 to 10');
if (usr_input) {
  usr_input === secret ? alert('congratulate!') : alert('Try again');
} else {
  alert('Enter only Number  Between 1 to 10.');
}
