console.log('cart');

//to order many items, create an array instead of doing this. Can also use this primitive type.
var item0;
var item1;
var item2;


var cart=['apple', 'orange', true, 10, ['fish', 'chicken']]; //put strong, number, boolean, array, etc. can have as may as you want using matrix

console.log('cart:', cart);
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])
console.log(cart[3])
console.log(cart[4][1])//can only index array


var mat = [
   [ 0, 1, 2]
    [3. 4 ]
   [2,5]
]

console.log[mat 3]

//To pick out chicken

var elem = cart[4];

// To assign apple
var apple = cart [0]

//Print chicken
console.log('from elem =', elem[1]);//fish is zero, chichken is 1 from the array 5
//array is a container that holds values. 

//array size
console.log('array size: ', cart.length);
console.log('array size of cart[4]: ', cart.length);//this one gets full length of the cart
console.log('array size of cart[4]: ', cart[4].length);

//length means no. of objects

console.log('cart= ', cart. length, 0)

cart.push ('apple');//Add to the back
cart.unshift('orange')//Add to the front