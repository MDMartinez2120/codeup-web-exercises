

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

function sumTheString(numString1, numbString2){
   return (parseFloat(numString1) + parseFloat(numbString2)).toString();

}

console.log(sumTheString(6,13));


