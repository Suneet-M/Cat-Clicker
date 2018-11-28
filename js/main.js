$('document').ready(init);

// Array to hold all cats as objects
const cats = [
	{
		name: 'Oscar',
		src: 'img/oscar.jpg',
		clicks: 0
	},
	{
		name: 'Sam',
		src: 'img/sam.jpg',
		clicks: 0
	}
]

let currentCat, // The cat obj to display
	i; // Index to select cat objects from cats array 

// Click listeners
$('.clicker').click(counter);
$('.next').click(() => changeCat('next'));
$('.previous').click(() => changeCat('previous'));

// Initialise app
function init() {
	i = 0;
	currentCat = cats[i];
	catDisplay();
}

// Initiate cat obj properties
function catDisplay() {
	$('.cat-name').text(currentCat.name);
	$('.clicker img').attr('src', currentCat.src);
	$('.counter').text(currentCat.clicks);
}

// Click counter
function counter() {
	currentCat.clicks += 1;
	$('.counter').text(currentCat.clicks);
}

// Change cat displayed
function changeCat(direction) {
	(direction == 'next') ? i += 1 : i -= 1;
	
	currentCat = cats[i];
	catDisplay();
	
	if (i == (cats.length - 1)) {
		$('.next').addClass('hide');
		$('.previous').removeClass('hide');
	}

	else if (i == 0) {
		$('.next').removeClass('hide');
		$('.previous').addClass('hide');
	}
}