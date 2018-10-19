var toGuess = 6;

var userInput = prompt('Please enter a number between 1 to 10');

var usersGuess = parseInt(userInput);

if (toGuess == usersGuess) {
    console.info('You read my memory');

} else if (toGuess > usersGuess) {
        console.warn('Your guess is lower than my my number')

    } else {
        console.warn ('Your guess is higher than my number')
    }