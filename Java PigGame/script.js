let initialScore0 = document.getElementById('score--0').textContent = 0;

let initialScore1 = document.getElementById('score--1').textContent = 0;

const dice = document.querySelector('.dice');

dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


document.querySelector('.btn--roll').addEventListener('click', function(){

    // Creazione di un numero random
    const numDice = Math.trunc(Math.random()*6) + 1;

    // Mettere a display il dado
    dice.classList.remove('hidden');
    dice.src = `dice-${numDice}.png`

    if(numDice !== 1){

        currentScore += numDice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{

        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        
        
    }

    //console.log(scorePlayer1)

    
})
