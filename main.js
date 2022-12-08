// ============================== Decision Making ============================== //

// Comparison Opertors

//  == equal to, checks values
'Hello' == 'Hello' // true
'Hello' == 'Bye' // false

//  === identical to, checks values nad data types
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

// && Logical And both, expressions have to be true

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

// IF keyword checks if the expression is true and runs code in the block below

let score = 49;

if (score >= 50) {
    console.log(`You have ${score} points. You Passed!`);
} else {
    console.log(`You have ${score} points. Take the test again`);
}

// Switch Statement

let msgEl = document.querySelector('#msg');
let msg;
let level = 69;

switch(level) {
    case 1:
        msg = 'Good luck on first test';
        break;

    case 2:
        msg = 'Good luck on second test';
        break;

    case 3:
        msg = 'Good luck on last test';
        break;

    default:
        msg = 'Good luck on test!';
        break;
}

msgEl.textContent = msg;

let date = document.querySelector('#date');
let day;

switch(new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;
}

date.textContent+= day;

let wkd = document.querySelector('#wkd');
let weekend;

switch(new Date().getDay()) {
    case 4:
    case 5:
        weekend = 'Soon it is weekend';
        break;

    case 6:
    case 0:
        weekend =  'It is weekend';
        break;

    default: 
        weekend = 'Looking forward to the weekend';
        break;
}

wkd.textContent+= weekend;