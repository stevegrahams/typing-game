//...run init function...

window.addEventListener("load",init);

// Just like var

let time = 5
let score = 0;
let isPlaying; 

// Dom Element & Connet With Tag

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const Easy = document.querySelector("#easy");
const Medium = document.querySelector("#Medium");
const Hard = document.querySelector("#Hard");
const textShow = document.querySelector("#textS");

// lavel

Easy.addEventListener("click",() => {
	timeDisplay.innerHTML = 5;
	time = 5;
});

Medium.addEventListener("click",() => {
	timeDisplay.innerHTML = 3;
	time = 3;
});

Hard.addEventListener("click",() => {
	timeDisplay.innerHTML = 2;
	time = 2;
});

//...Few Imporatn Words... 

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'gameover',
  'nice',
  'alleria',
  'your',
  'my',
  'fire',
  'desire',
  'lifestyle',
  'newgame',
  'getAttention',
  'generate',
  'swift',
  'wind'
];

//...init the function.....

function init() {
	showWord(words);
	wordInput.addEventListener("input",startMatch);
	setInterval(countdown,1000);
	setInterval(checkStatus,50);
}

function showWord() {
	//...get random array words....
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value = '';
		score++;
	} else if (score === -1) {
		scoreDisplay.innerHTML = 0;
	} else {
		scoreDisplay.innerHTML = score;
	}
}

function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
		message.innerHTML = "Correct!!!";
		return true;
	} else {
		message.innerHTML = '';
		return false;
	}
}

//...time controler....

function countdown() {
	if(time > 0) {
		time--;
	} else if (time === 0) {
		// using colt steel system
		isPlaying = false;
	}
	timeDisplay.innerHTML=time;
}

function checkStatus() {
	if (!isPlaying & time === 0) {
		message.innerHTML="Game Over!!!";
		wordInput.style.visibility="hidden";
		textShow.style.display="block";
		score = -1;
	}
}





