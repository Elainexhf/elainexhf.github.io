//declare a variable (variable names = varifiers)

var email=null; //identifer/variable-types
var myName ="Elaine"; //string
var lastName = "Xu"; //string
var age = "36"; //number-interger
var hungry = false; //boolean - true or fald
var interestRate=1.2; //number - floating point, float

var name=null; //different from undefined. it has a value but undefined. et everything to null will solve all the problem

//camel case programming culture (usually use for javascript)
var theWarehouseAddressIs = '100 somewhere';
var lastName='Xu';
var firstName='Elaine';

//snake case (usually use for python)
var the_warehouse_address_is = '100 somewhere';
var last_name='Xu';

//console.log means to print out
console.log('My name is '+ myName);
console.log('My age is '+ age);
console.info('this is an info');
console.warn('this is a warning');

var fullName= myName + ' ' + lastName;


var num0='50';
var num1='100';
var result=num0 + num1;
var num2 = 50;//different from '50'
var num3=parseInt(num0);

console.log(fullName)
console.log(result)
console.log(num0 + num2);
console.log(num3 + num2);

var count=0;
console.log('count=', count);

count=count + 1;
console.log('count=', count);

count +=1 //count=count+1
console.log('count=', count);

count +=3 //count=count+3
console.log('count=', count);

count /=2; //count = count/2
console.log('count=', Math.floor(count));
count= 5;
count %=2; //remainder 5/2 =>2, 1
console.log('count=', count);
 
var person0 = 'Elaine';
var person1 = 'Xu'

var result = (person0 == firstName);
var reult1= (person1 == firstName);
var result2 = (person1=firstName);

console.log('person0 == firstName:', result) // == is comparison
console.log('person1 == firstName:', result1)
console.log('person1 = firstName:', result2)
console.log('person1: ', person1)

if(person1 == firstName) { //then -> true
    console.log('Hello ' + firstName); //person 1 is false, will not execute the code
} else {
    console.warn('You are not Elaine');
}

var name;

name=prompt ('What is your name');

if (name=='ELaine') { //then->true
    console.log('Hello Elaine');
} else {
    console.warn ('You are not Elaine');
}