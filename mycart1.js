//Get inputs

var cart= [''];
var item = "";

while (item != "done") { //item !=condition for infinity 
    item = prompt('Add an item')
    if ((item != null) && (item != "")) {

        //**if ((item != null) && (item != "")) && (item !='done')){
        cart.push(item);
    }   
}


cart.pop(); //can also push this condition into the 'if' refer to **


console.log('The contents in your cart are:');

var counter = 0; 

while (counter < cart.length) {
    console.info(`${counter + 1}. ${cart[counter]}`);
    counter += 1;
}


