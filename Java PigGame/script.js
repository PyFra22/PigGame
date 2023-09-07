let initialScore0 = document.getElementById('score--0').textContent = 0;
let initialScore1 = document.getElementById('score--1').textContent = 0;

const dice = document.querySelector('.dice');

dice.classList.add('hidden');


const activeBackGroundPlayer0 = document.querySelector('.player--0');

const activeBackGroundPlayer1 = document.querySelector('.player--1');

let numDice0;

let scores, currentScore, activePlayer, isPlaying;

const init = function(){

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;

    scores[activePlayer] = 0;

    currentScore = 0;

    document.getElementById('score--0').textContent = 0;
    
    document.getElementById('score--1').textContent= 0;
    
    document.getElementById('current--0').textContent = 0;
    
    document.getElementById('current--1').textContent= 0;

    dice.classList.add('hidden');
    
    activeBackGroundPlayer0.classList.remove('player--winner');
    activeBackGroundPlayer1.classList.remove('player--winner');

    activeBackGroundPlayer0.classList.add('player--active');
    activeBackGroundPlayer1.classList.remove('player--active');

};

init();


const switchPlayer = function(){

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    activeBackGroundPlayer0.classList.toggle('player--active');
    activeBackGroundPlayer1.classList.toggle('player--active');

}




document.querySelector('.btn--roll').addEventListener('click', function(){
    
    if(isPlaying){

        // Creazione di un numero random
        numDice0 = Math.trunc(Math.random()*6) + 1;

        // Mettere a display il dado
        dice.classList.remove('hidden');
        dice.src = `dice-${numDice0}.png`

        if(numDice0 !== 1){

            currentScore += numDice0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{

            switchPlayer();

        }
    }
})



document.querySelector('.btn--hold').addEventListener('click', function(){


    if(isPlaying){
        scores[activePlayer] += currentScore;
    
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

    

        if(scores[activePlayer] >= 100){

            isPlaying = false;
            document.querySelector
                (`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector
                (`.player--${activePlayer}`).classList.remove('player--active');
        }else{

            switchPlayer();

        }
    }
})

document.querySelector('.btn--new').addEventListener('click', function(){

    init();


})



