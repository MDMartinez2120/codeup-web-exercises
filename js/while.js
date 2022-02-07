// var number = 2;
//
// while (number <= 65536) {
//     console.log(number);
//     number = number * 2;
//
// }

var amountOfCones = Math.floor(Math.random() * 50) + 50;
var conesBought;

do {
    if (amountOfCones >= 1) {
        console.log(amountOfCones + " we got you")
    } else if (amountOfCones === 0) {
        console.log(amountOfCones + " im all out baby")
    }
    conesBought = Math.floor(Math.random() * 5) +1;
    console.log('how many cones are left ? ' + (amountOfCones - conesBought));
    amountOfCones = amountOfCones - conesBought;

} while (amountOfCones >= 1);




