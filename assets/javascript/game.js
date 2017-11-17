var names = ["cloud", "tidus", "squall", "cecil", "orlandeau", "cid", "noctis", "refia", "exdeath", "ramza", "firion", "vaan", "ashe", "tifa", "zell", "rinoa"];
var boss = names[Math.floor(Math.random() * names.length)];
var wordLength = boss.length;
var guesses = 10;
var wrongLetters = [];
var underScores = [];
var wins = 0;
var rightGuesses = 0;

for (var i = 0; i < wordLength; i++) {
	underScores.push("_ ")
}

var currentSpan = document.getElementById("empty");


for (var i = 0; i < underScores.length; i++) {
	var space = document.createElement("span");
	space.innerHTML = underScores[i];
	currentSpan.appendChild(space);
}



document.onkeyup = function(event) {
	
 	var button = event.key;
	
 	// if button is in boss string
 	if(boss.indexOf(button)>=0){

 		// goes thru string
 		for (var i = 0; i < boss.length; i++) {

 			// if letter matches button
 			if(boss.charAt(i)==button){
 				rightGuesses++;
 				underScores[i]=button;
 				var audioElement = document.createElement("audio");
    			audioElement.setAttribute("src", "assets/Swoosh 3-SoundBible.com-1573211927.mp3");
    			audioElement.play();
 				//console.log(guesses);
 				
 				var currentSpan = document.getElementById("empty");
 				currentSpan.innerHTML = "";

 				for (var j = 0; j < underScores.length; j++) {
					var space = document.createElement("span");
					space.innerHTML = underScores[j];
					currentSpan.appendChild(space);
				}

 			}
			
 		}

 	}else{
 		guesses--;
 		wrongLetters.push(button);
 		var audioElement = document.createElement("audio");
    			audioElement.setAttribute("src", "assets/Male Grunt-SoundBible.com-68178715.mp3");
    			audioElement.play();

 		var attacksMade = document.getElementById("attacks");
		attacksMade.innerHTML = guesses;
 		
 		var usedSpan = document.getElementById("used");
 		usedSpan.innerHTML = "";


		for (var i = 0; i < wrongLetters.length; i++) {
			var usedSpace = document.createElement("span");
			usedSpace.innerHTML = wrongLetters[i] + ", ";
			usedSpan.appendChild(usedSpace);
		}
 	}
 	if (underScores.indexOf("_ ") == -1 ) {
 	wins++;
 	
 	var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/victory_fanfare.mp3");
    audioElement.play();
	

	var boom = document.getElementById("congrats");
	boom.innerHTML = wins;

 	boss = names[Math.floor(Math.random() * names.length)];
 	wordLength = boss.length;
 	guesses = 10;
 	wrongLetters = [];
 	underScores = [];
 	rightGuesses = 0;

 	for (var i = 0; i < wordLength; i++) {
	underScores.push("_ ")
	}

	currentSpan = document.getElementById("empty");
	currentSpan.innerHTML = "";

	var attacksMade = document.getElementById("attacks");
		attacksMade.innerHTML = guesses;


	for (var i = 0; i < underScores.length; i++) {
	var space = document.createElement("span");
	space.innerHTML = underScores[i];
	currentSpan.appendChild(space);
		}

		usedSpan = document.getElementById("used");
 		usedSpan.innerHTML = "";


 	}else if (guesses == 0){
 		boss = names[Math.floor(Math.random() * names.length)];
 	wordLength = boss.length;
 	guesses = 10;
 	wrongLetters = [];
 	underScores = [];
 	rightGuesses = 0;

 	var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/evillaugh.swf.mp3");
    audioElement.play();

 	for (var i = 0; i < wordLength; i++) {
	underScores.push("_ ")
	}

	currentSpan = document.getElementById("empty");
	currentSpan.innerHTML = "";

	var attacksMade = document.getElementById("attacks");
		attacksMade.innerHTML = guesses;


	for (var i = 0; i < underScores.length; i++) {
	var space = document.createElement("span");
	space.innerHTML = underScores[i];
	currentSpan.appendChild(space);
		}

		usedSpan = document.getElementById("used");
 		usedSpan.innerHTML = "";

 	}
 }
 