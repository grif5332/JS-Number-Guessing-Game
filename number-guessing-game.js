let min = 1;
let max = 10;
let guessesLeft = 10;
let randomNum = randomNumber(min, max);
let roundScore = 0;
let input = document.querySelector('input');
let numGuessed = document.querySelector('numGuessed');
let button = document.querySelector('button');

document.getElementById('guessesLeft').innerText = guessesLeft;
document.getElementById('minNum').innerText = min;
document.getElementById('maxNum').innerText = max;
document.getElementById('roundScore').innerText = roundScore;

button.addEventListener('click', () => {
    inputNum = input.value;
    if (inputNum == "" || inputNum <= 0 || inputNum > max) {
        document.getElementById('guessResult').textContent = 'Please enter an appropriate Number!'
        document.getElementById('guessResult2').textContent = "";
    } else if (inputNum == randomNum) {
        document.getElementById('guessResult').textContent = `Congratulations!  You guessed right!  The number was ${randomNum}`;
        document.getElementById('guessResult2').textContent = "You earned 5 more guesses!";
        input.value = "";
        document.getElementById('guessesLeft').innerText = guessesLeft += 5;
        document.getElementById('roundScore').innerText = roundScore += 1;
        document.getElementById('maxNum').innerText = max += 20;
        randomNum = randomNumber(min, max);
    } else if ( inputNum < randomNum) {
        document.getElementById('guessResult').textContent = `You guessed the number ${inputNum}.`;
        document.getElementById('guessResult2').textContent = `This guess was to low.  Try again!`;
        input.value = "";
        document.getElementById('guessesLeft').innerText = guessesLeft -= 1;
        if(guessesLeft == 0){
            loseGame(roundScore);
        };
    } else {
        document.getElementById('guessResult').textContent = `You guessed the number ${inputNum}.`;
        document.getElementById('guessResult2').textContent = `This guess was to high.  Try again!`;
        input.value = "";
        document.getElementById('guessesLeft').innerText = guessesLeft -= 1;
        if(guessesLeft == 0){
            loseGame(roundScore);
        };
    }
});

function loseGame(roundScore) {
    document.getElementById('guessResult').textContent = 'You ran out of guesses.';
    document.getElementById('guessResult2').textContent = `You lasted ${roundScore} rounds!  Congrats....but you still lost.  Better luck next time!`;
    document.getElementById('btn').disabled = true;
}
function randomNumber(minNumber, maxNumber) {
    let randomNumber = Math.floor(Math.random()*( maxNumber - minNumber ) + minNumber);
    return result = randomNumber;
}