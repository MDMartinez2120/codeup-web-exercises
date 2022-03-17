

// function returnStatement(string) {
//     return 'i have no idea what you just said';
// }
//
// console.log(returnStatement('string'))
//
//
// function returnNumber(userNumber) {
//     return userNumber * 2;
// }
//
// console.log(returnNumber(5))

// function aNumber(number){
//     return number + number;
// }
//
// aNumber()
// console.log(aNumber(6))

// function twoNumbers(number, number) {
//     return number * 2 + number * 2;
// }
//
// twoNumbers()
// console.log(twoNumbers(6, 8))

// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// var bArrays = ['abc', 'ab', 'cat', 'Bay'];
//
// function removeBs (){
//     return bArrays.push('b');
// }
//
// console.log(removeBs([bArrays]));

// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     {username: 'jbomb',
//     email: ‘john@email.com’},
//     {isAdmin: true}
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

// var user = [
//     {username: 'jbomb',},
//     {email: 'john@email.com',},
//     {isAdmin: 'true'}
// ]
//
// user.createUserMessage = function(){
//     console.log('user ' + user.username + 'is and admin and can be reached at ' + user.email + '.');
// }

// var areaOrPerimeter = function(l,w){
//     return (l * w);
// }

// function areaOrPerimeter(l, w){
//     if(isNaN(l)===false || isNaN(w)===false){
//         return false;
//     }
//     if (l === w){
//         return (l * w);
//     } if (l !== w){
//         return (l + w) * 2;
//     }
// }
// console.log(areaOrPerimeter(4, 4));
// console.log(areaOrPerimeter(6, 10));

// function sumTheString(numString1, numbString2){
//    return (parseFloat(numString1) + parseFloat(numbString2)).toString();
//
// }
//
// console.log(sumTheString(6,13));

// In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//     Assume the following shape of the user object for the function input:

// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
//
// function getSimpleUser(user){
//     return {firstName: user.firstName.toLowerCase(), lastName: user.lastName.toLowerCase()};
// }
//
// console.log(getSimpleUser(fred))

// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
//
// function createNames(array1, array2) {
//     var output = []
//     for (var i = 0; i < array1.length; i += 1){
//         output.push({
//             firstName: array1[i],
//             lastName: array2[i]
//         })
//     }
//     return output;
// }
// console.log(createNames(firstNames, lastNames));

// function remainder(val1, val2){
//     if (val1 > val2){
//         return val1 % val2
//     }if (val2 > val1){
//         return val2 % val1
//     }
// }
// console.log(remainder(5, 30))
//
// function printerError(val1){
//     var lengthOfString = val1.length
//     var totalOverM = 0
//     for (var i in val1){
//         if (val1[i] > 'm'){totalOverM++}
//     }
//         return '' + totalOverM + '/' + lengthOfString;
// }

// function isLockNessMonster(s){
//     if (s.includes('tree fiddy')){
//         return true;
//     }else {
//         return false;
//     }
// }
//
//
// console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
//
// console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
//
// console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
//
// console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));

// document.getElementsByClassName('btn1').addEventlistener('click',)

// Consider the following array of users:

    // var users = [
    //     {
    //         username: 'fsmith',
    //         email: 'fsmith@email.com',
    //         numberOfLogins: 23
    //     },
    //     {
    //         username: 'ksmith',
    //         email: 'ksmith@email.com',
    //         numberOfLogins: 100
    //     },
    //     {
    //         username: 'lsmith',
    //         email: 'lsmith@email.com',
    //         numberOfLogins: 10
    //     }
    // ];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...

// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }

// users.forEach(function (userInfo){
//     var x = users[0];
//     console.log(x);
// })
//
// console.log(users)


// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.

// returnTotalUserLogins(users) should return... 133


// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...

// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }


// ================================= WARM UP
//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }

// Example 1...
//
// var operations1 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]
//
// function computeOperations(opArray, int){
//     for ( var i = 0; i < operations1.length; i++){
//         return (opArray[i] + int);
//     }
// }
//
// console.log(computeOperations(operations1, 10));


// console.log(computeOperations(operations1, 10)); // returns 20.l
//
//
// Example 2...
//
// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]
//
// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...
//
// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]
//
// computeOperations(operations3, 10) // returns 0

// var operations1 = [
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ];
//
// var operations2 = [
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ];
//
// var operations3 = [
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     }
// ]
//
// function computeOperations(operators, startingNum) {
//     // create a total variable that we'll change with each iteration of loop
//     var total = startingNum;
//
//     // loop through each operation and console log each number
//     for (var i = 0; i < operators.length; i++){
//         if (operators[i].operation === 'add') {
//             total += operators[i].integer;
//         } else if (operators[i].operation === 'subtract') {
//             total -= operators[i].integer;
//         } else if (operators[i].operation === 'multiply') {
//             total *= operators[i].integer;
//         }
//     }
//
//     return total;
// }
//
//
// console.log(computeOperations(operations1, 10), 20);
// console.log(computeOperations(operations2, 10), 60);
// console.log(computeOperations(operations3, 10), 0);

// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.



// Examples:
//
// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
//
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10
// var i = 2
// function addTwos(intArray){
//     if (intArray[i] == 2){
//         return [i] + [i];
//     }else {
//         return false;
//     }
// }

// function addTwos(array){
//     for (var i = 0; i < array.length; i++){
//         if (array[i] === 2){
//            return array[i] + 2
//         }else {
//             return false;
//         }
//     }
// }
//
// console.log(addTwos(nums1));

// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }

// function returnStringObject(string){
//     return {
//         stringValue: string,
//         stringArray: string.split('')
//     }
// }
//
// console.log(returnStringObject('hello'));

// function countNegatives(nums){
//     var negStart = 0
//     // console.log(nums.length)
//     for (var i = 0; i < nums.length; i++){
//         if (nums[i] < 0){
//             negStart++
//         }
//     }
//     return negStart;
// }
//
// console.log(countNegatives([-5, 10, 2, 5]));
// console.log(countNegatives([1, -10, -2, 5]));

// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
//     Example...

// var users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Smith',
//         email: 'bob@email.com'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         email: 'sally@email.com'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         email: 'fred@email.com'
//     },
//     {
//         firstName: 'Cathy',
//         lastName: 'Smith',
//         email: 'cathy@email.com'
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Smith',
//         email: 'joe@email.com'
//     },
// ];
//
// console.log(createFirstNamesArray(users)); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']
//
// function createFirstNamesArray(arr){
//     var start = []
//     for (var i = 0; i < arr.length; i++){
//         start += arr[i].firstName;
//     }
//     return start.split()
// }

var colorChange = document.getElementById('changeColor');
colorChange.addEventListener('click', function(){
    document.getElementById('square').style.backgroundColor = 'cyan'
})


// document.getElementById('#changeColor').addEventListener('click', colorChange )
