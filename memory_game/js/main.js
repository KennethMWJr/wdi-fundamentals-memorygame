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
/*created a function for indicating what to log to the console when two cards match.*/
/*I'm trying to use a method to add the front images of each card to the src element*/
function flipCard(event) {
	var imageElement = event.target;
	var cardId = imageElement.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);
	console.log(cardsInPlay);

	checkForMatch(imageElement);


	// console.log(cards[cardId].cardImage);
	// console.log(cards[cardId].suit);
};
/*created a flipcard function that logs to the console the ID of the card selected with the image and suit.*/
/*Each time a card is selected another card is added to the empty array.*/
/*Trouble with calling the checkForMatch function within this function.*/

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
/*this function involves a loop that should execute the block 4 times.*/
/*during the loop, the image of the selected card should be revealed when it's clicked.*/

createBoard();
/*meant to execute function*/





 


