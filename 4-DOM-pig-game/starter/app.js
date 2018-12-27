/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, previousRoll;
var winnerScore = 100;

function newGame() {
	if(activePlayer || activePlayer === 0) {
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
		document.querySelector('#name-' + activePlayer).textContent = 'PLAYER ' + (activePlayer + 1);
	}
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	previousRoll = undefined;
	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';
}

function roll() {
	var dice = Math.floor(Math.random()*6) + 1;
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	if(dice !== 1 && (dice !== 6 || dice !== previousRoll)){
		roundScore += dice;
		previousRoll = dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		endTurn();
	}
}

function hold() {
	document.querySelector('.dice').style.display = 'none';
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	if(scores[activePlayer] < winnerScore) {
		endTurn();
	} else {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
	}
}

function endTurn() {
	document.querySelector('#current-' + activePlayer).textContent = 0;
	roundScore = 0;
	previousRoll = undefined;
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

document.querySelector('#btnQlo').addEventListener('click', function() {
	winnerScore = document.querySelector('#inputQlo').value;
});
document.querySelector('.btn-new').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);

newGame();