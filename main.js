// ============================== Decision Making ============================== //

// Comparison Opertors

//  == equal to, checks values
'Hello' == 'Hello' // true
'Hello' == 'Bye' // false

//  === identical to, checks values and data types
'3' === 3 // false
'3' === '3' // true

// !=  not equal to, checks if values are differend
'Hello' != 'Bye' // true
'Hello' != 'Hello' // flase

// !== non identical, checks if values and data types are differend
'3' !== 3 // true
'3' !== '3' //false

// > bigger than, checks if the value on the right is bigger than on the left 
4 > 3 // true
3 > 4 // false

// >= bigger or equal, check if the value on the right is bigger or equal to the left value 
4 >= 3 // true
3 >= 4 // false
3 >= 3 // true

// < checks if the value on the left is smaller than right
4 < 3 // flase
3 < 4 // true

//  <= smaller or equal, checks if the value on the left is smaller or qeual to the right value
4 <= 3 // false
3 <= 4 // true
3 <= 3 // true

// Values that are in expression are called operands
// comparison symbols are called operators

// An expression can be a operand

// Logical Operators

// && Logical And, both expressions have to be true

true && true // true
true && false // false
false && true // false
false && false // false

// || Logical Or, operator checks only one expression

true || true // true
true || false // true
false || true // true
false || false // false

// ! Logical Not, checks bool and flips it around

!true // false
!false // true

// Switch Statement

let msgEl = document.querySelector('#msg');
let msg;
let level = 1;

switch(level) {
    case 1:
        msg = 'Good luck on first test!';
        break;

    case 2:
        msg = 'Good luck on second test!';
        break;

    case 3:
        msg = 'Good luck on the last test!';
        break;

    default:
        msg = 'Good luck on the test';
}

// IF keyword checks if the expression is true and runs code in the block below

let pointsEl = document.querySelector('#points');
let score = 62;
let feedback;

if (score >= 50) {
    feedback = `You passed! You have ${score} points.`;
} else {
    feedback = `Take the test again. You have ${score} points.`;
}

pointsEl.textContent = feedback;

msgEl.textContent = msg;

let currentDay = new Date().getDay();
let date = document.querySelector('#date');
let day;
let days = [
    'Niedziala',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota'
]

switch(currentDay) {
    case 0:
        day = days[0];
        break;

    case 1:
        day = days[1];
        break;

    case 2:
        day = days[2];
        break;

    case 3:
        day = days[3];
        break;

    case 4:
        day = days[4];
        break;

    case 5:
        day = days[5];
        break;

    case 6:
        day = days[6];
        break;
}

date.textContent+= day;

let wkd = document.querySelector('#wkd');
let weekend;

switch(currentDay) {
    case 0:
    case 6:
        weekend = 'It is weekend';
        break;

    case 4:
    case 5:
        weekend = 'Weekend is soon';
        break;

    default:
        weekend = 'Weekend is not soon';
}

wkd.textContent = weekend;

// =============== Loops =============== //

// Loop checks if statement is true and if it is loop executes code block
// Statement is checked again and the code is executed until statement is false
// There are three mos common usef loops: FOR, WHILE, DO-WHILE;
// Declaring variables in global scope saves more memory

// FOR executes the code block specified number of times and is the mos common loop

// let scores = [24, 32, 17];
// let arrayLenght = score.length;
// let roundNumber = 0;
// let roundMessage;
// let i;
// let roundEl = document.querySelector('#round');

// for (i = 0; i < arrayLenght; i++) {
//     roundNumber = (i + 1);
//     console.log(`Runda ${roundNumber}: ${scores[i]}`);
// }


// WHILE if you don't know how many times loop has to run

// let i = 1;
// let message = '';

// while (i < 10) {
//     message+= i + ' x 5' + (i * 5);
//     i++;
// }

// console.log(message);

// DO-WHILE if you don't know how many times loop hus to run but it runs at least once

// let i = 1;
// let message = '';

// do {
//     message+= i + ' x 5 = ' + (i * 5);
//     i++;
// } while (i < 1);