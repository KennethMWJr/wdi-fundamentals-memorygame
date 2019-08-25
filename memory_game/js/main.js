console.log("Up and running!");
/*When web page is loaded console logs 'Up and running!"*/
var cards = [ 
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-hearts.png'
}
];
/*created an array of the cards used in the game.*/
/*Each card has a block of the same properties with distiguishing values.*/


var cardsInPlay = [];
/*created an empty array for a variable called cardsInPlay.*/


function checkForMatch(cardImageElement) {
	// cardElement.setAttribute('attributeName', 'attributeValue');
	var cardId = cardImageElement.getAttribute('data-id');
	cardImageElement.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	};
};
/*Using the this.setAttribute method left cardId undefined and caused a break in the code.*/
/*To resolve this issue, I defined the variable cardId in this function.*/
/*It involved creating a new object for it that would contain the card image ID.*/
/*That object also received the src attribute of the card images along with the actual image of the card*/
/*The this.setAttribut method was replaced by the cardImageElement.setAttribute method.*/
/*Plugged in the object as an arguement in the checkForMatch function.*/
/*Invoking the function now allows me to see the face of the card image.*/


function flipCard(event) {
	var imageElement = event.target;
	var cardId = imageElement.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cardsInPlay);
	checkForMatch(imageElement);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};
/*Again, adding "this" to a method (in this case, getAttribute) wasn't working.*/
/*cardId and "this" appeared as undefined .*/
/*I learned about the event.target method that allows me to reference the image that was clicked on.*/
/*That method is contained in the variable imageElement, which replaces "this".*/
/*When the flipcard function is called, it provides the face value of the card.*/
/*Plus, it consoles "User flipped rank of card.*/
/*The function also pushes the card rank to the empty array*/
/*Additionally, checkForMatch function provides the image of the card selected.*/
/*Lastly, the card image and suit are consoled. */

function createBoard() {
	var board = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);	
		cardElement.addEventListener('click', flipCard);

		board.appendChild(cardElement);
	}
};
/*This function set the stage for the rest of the functions in this code.*/
/*I created a variable called, "board" that contains a reference the ID of the div tag with the images of the cards*/
/*The loop pertains to how a user interacts with the cards on the board*/
/*Var "i" will move up the index of the "cards" array by an increment of 1 until its value is 4.*/
/*The code to execute within this statement is focused on seeing a clicking the cards on the board*/
/*The variable "cardElement" contains an element that refers to the img tag in the html document.*/
/*The variable receives all the information attached to the images of the each card.*/
/*Other than the img tag that includes the src, image link, data-id and reference to placement of cards in index.*/
/*The "cardElement" received an event listener that would invoke the flipcard function each time a card was clicked.*/
/*Lastly, the appendChild method adds a card to the div tag hold the face value images of the cards.*/



/*this function involves a loop that should execute the block 4 times.*/
/*during the loop, the image of the selected card should be revealed when it's clicked.*/

createBoard();
/*meant to execute function*/





 


