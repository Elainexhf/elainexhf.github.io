//store customer info

var custId= 1;
var name = "fred";
var email = "fred@gamil.com";
var mobile = "1234567";
var greeting = function() {
    console.log('Hello, my name is ', this.name)
}
    console.log

var Id0 = 2;
var name0 = "barney"
var email0 = "barney@gmail.com";
var mobile = "2345678";

//use array
var cust0 = [2, 'barney', 'barney@gmail.com', '2345678']
var cust1 = [1, 'fred', 'fred@gmail.com', '1234567']
var cust1 = [3, 'fred', '123 bedrock', 'fred@gmail.com', '1234567']

var fred = { //instantiating an object
    //object/dictionary
    name: 'fred',
    email: 'fred@gmail.com',
    phone: '12334567',
    age: 50,
}

console.log(fred);
console.log('name: ', fred['name']); 
console.log('email: ', fred.email)

var props = object.key(fred); //what object has for the key. 'something1.something2, somthing 1 is the object
console.log(key) //will return an array of attributes/ properties/keys

var vals = object.values(fred);// array of the values 

var n=0;
while (n < props.length) {
    console.log ('prop: ', prop[n])
    n +=1; 
}

object.key(fred) //pass in the object fred

n = 0 //dont need to define var again
while (n < vals.length) {
    console.log('vals= ', vals[n]);
    n +=1;
}

n = 0 
while (n < val (props.length)) {
    console.log(props[n] + " = " + fred[ props[n]] ); //props give you the key
    n +=1;
}

console.log)'>>>', fred.name)
fred.greetings()



