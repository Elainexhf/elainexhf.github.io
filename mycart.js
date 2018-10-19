var item1 = "apple";

var item2 = "orange"

var userInput1 = prompt('Add an item');


if (item1 == userInput1) {
    var userInput2 = prompt('Add an item');
}

if (item2 == userInput2) {
    var userInput3 = prompt('Add an item');
}

function myFunction(event) {
    var x = event.keyCode;
if (x == 13) {
        console.log(`"The content of your cart are " + "1. " + userInput1 + " " + "2. " + userInput2`);
    }
}


