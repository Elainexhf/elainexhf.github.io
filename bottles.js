
//create the image
var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'image/beer.png';
    return (imgElem);
}

var mkBottles = function(num) {
    //create the div & append child(image) into div
    var divElem = document.createElement('div');
    while (num > 0) {
        num -= 1;
        var beerImg = mkBottle();
        divElem.appendChild(beerImg);
    }
    return (divElem);
}

//this js script that includes the above <div> and <img> is already inside <body> in html file

var beer = 99;

//Add an event listener to button to button #anotherLine (named under html)
var btn = document.querySelector('#anotherline');
btn.addEventListener(
    'click',
    function(){
        //console.log('>>>clicked: ', beer);
        document.body.appendChild(mkBottles(beer));
        beer -= 1;
    }
)

/*

//var title = mkTitle('99 Bottles of Beer')
//document.body.appendChild(title);

var mkTitle = function(text) {
    // <h1></h1>
    var h1Elem = document.createElement('h1');
    // <h1>text</h1>
    h1Elem.textContent = text;
    return (h1Elem);
}

//Create a body
//var bodyElem = document.querySelector('body');

while (beer >= 1) {
    var bottles = mkBottles(beer);
    document.body.appendChild(bottles);
    beer -= 1;
}
/*
var line1 = function(bottles) {
    return (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
}
var line2 = function(bottles) {
    return (`Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`);
}
var beer = 99;
while (beer >= 1) {
    console.log( line1(beer) )
    console.log(line2(beer))
    console.log('\n')
    beer -= 1;
}
*/