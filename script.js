let gameContainer = document.getElementById("game-container");

let storyText = document.getElementById("story-text");

let buttonContainer = document.getElementById("button-container");

//scene 1 – player goes to scene 2 or scene 3
 function scene1() {
	storyText.innerHTML =  "(You are Mario) You are just sitting there until someone tells you that the evil Bowser kidnapped Princess Peach. It is your duty to go and save her.";
	buttonContainer.innerHTML = "<button  onclick = 'scene2()'> Squash the goombas and go to the next area.</button><button  onclick = 'scene3()'> Run and go to the next area.</button>";
	gameContainer.style.backgroundImage ="url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/08/super-mario-bros-world-1-1-ending.jpg')";
 }

//player goes to scene 3 or "game over"
 function scene2() {
	storyText.innerHTML =  "Now you are underground. What would you do?";
	buttonContainer.innerHTML = "<button  onclick = 'scene3()'> Rush through and get to the next area.</button><button  onclick = 'gameover()'> Kill all the enemies.</button>";
	gameContainer.style.backgroundImage ="url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92dc41d9-3e98-4010-a39f-e87a33468720/dg7237f-52786c22-07fe-432e-8929-cb6001e0814b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyZGM0MWQ5LTNlOTgtNDAxMC1hMzlmLWU4N2EzMzQ2ODcyMFwvZGc3MjM3Zi01Mjc4NmMyMi0wN2ZlLTQzMmUtODkyOS1jYjYwMDFlMDgxNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uvav-8XgQuDArN1aRvtD1ueKgF0pifIQSm2V_afx3J0')";
 }

//player goes to "win" scene or "game over" scene
 function scene3() {
	storyText.innerHTML = "Now you're at Bowser's castle. This is the final stage.";
	buttonContainer.innerHTML = "<button  onclick = 'win()'> Rush through and kill bowser.</button><button  onclick = 'gameover()'> Kill the enemies.</button>";
	gameContainer.style.backgroundImage ="url('https://static.wikia.nocookie.net/royal-fighters-colosseum/images/7/7a/Bowsercastle.png/revision/latest?cb=20150606031127')";
 }
        
//game over 
 function gameover() {
	storyText.innerHTML =  "One of the enemies killed you!";
	buttonContainer.innerHTML = "<button onclick = 'scene1()'> Try Again</button>";
	gameContainer.style.backgroundImage ="url('/resources/projects/create-your-own-adventure-game/game-over.jpg')";
 } 

//player wins
 function win() {
	storyText.innerHTML = "You killed Bowser and saved Princess Peach!";
	buttonContainer.innerHTML = "<button onclick = 'scene1()'> Play Again</button>";
	gameContainer.style.backgroundImage ="url('/resources/projects/create-your-own-adventure-game/trophy.png')";
 }

          
