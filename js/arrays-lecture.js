// var groceryList = ['bread', 'eggs', 'butter', 'milk']
// // var prices = [2, 4, 5, 4];
//
// var theBeatles = ['John', 'Paul', 'Ringo', 'George']
// console.log(theBeatles[1]);
// console.log(theBeatles[3]);
//
// console.log('I like the guitar parts by ' +theBeatles[2]);

// Given an array
  var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```
// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

for (var i = 0; i < 4; i++) {
    console.log('student number ' + (i +1) + ' lives in ' + cities[i]);
}