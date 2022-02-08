//break example
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "<br>";
// }

// while(true{
//     var userNumber = prompt("Pick an odd number between 1 and 50")
//     if (userNumber % 2 === 1 && userNumber <=50 && userNumber >=1) {
//         break;
//     }
// }
//
// console.log("Number to skip is: " + userNumber);
//
// for (var i = 1; i < 50; i += 2){
//     if (i == userNumber){
//         console.log("Yikes! Skipping number: " + userNumber);
//         continue;
//     }
//     console.log(i);
// }

var userNumber = prompt('pick an odd number between 1 and 50.');

for (var i = 1; i < 50; i += 2){
    if (userNumber % 2 === 0){
        console.log(userNumber + ' That is not an an odd number.');
        break;
    } continue (userNumber % 2 !== 0){
        console.log(userNumber + ' that is correct');
    }
}







