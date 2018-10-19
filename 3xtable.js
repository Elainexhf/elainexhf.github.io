var count= 0; 

var base = parseInt (prompt('Enter your multiplication base'))

var msg1= 'Your multiplication base' + base;

while (count < 12) {
    count +=1; //count = count +1
    var result= base * count;
    //strong concatenation
    //console.log(base + "*" + count + "=" + result);
    //string interpolation
    console.log(`>>> ${base} * ${count} = ${result}`); //less error prone solution in comparison. Note not ', but `
    
}

