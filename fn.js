console.log('functions');

var pi = 3.4;
//parameters - formal parameters (name, name2, name 3)
var greetings = function(name='anon') { //name=placeholder in the function. name is a varialbe declaration
    console.log('Hello ', name);

};

//Actual parameter
greetings('Fred'); //declaring the function. Name of function is call greeting
greetings('Barney');
greetings('Betty');
greetings ();


var sum = function(a, b) {
    var total = a + b; 
    return (total);
}

var result = sum (3,4); //function executing- read from right to left.
var moreResult = sum(sum(3,4), sum(6,7)); //very common that people write this
//can also break up like this:
var moreResult = div(
    sum(3,4), 
    sum(6,7)
); 

console.log('3 + 4 = ', result);
console.log('(3 + 4)/(6 + 7)= ', moreResult);
