$('document').ready(init);

// Array to hold all cats as objects
const cats = [
	{
		name: 'Oscar',
		src: 'img/oscar.jpg',
		attribution: 'https://www.flickr.com/photos/poplinre/625069434/in/photostream/',
		clicks: 0
	},
	{
		name: 'Sam',
		src: 'img/sam.jpg',
		attribution: 'https://www.flickr.com/photos/chewie/2290467335/in/photostream/',
		clicks: 0
	},
	{
		name: 'Tiger',
		src: 'img/tiger.jpg',
		attribution: 'https://www.pexels.com/photo/tabby-kitten-sitting-on-the-grass-669015/',
		clicks: 0
	},
	{
		name: 'Max',
		src: 'img/max.jpg',
		attribution: 'https://www.pexels.com/photo/animal-cat-face-close-up-feline-416160/',
		clicks: 0
	},
	{
		name: 'Lucy',
		src: 'img/lucy.jpg',
		attribution: 'https://www.pexels.com/photo/pet-cute-fur-animals-62321/',
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
	$('.link').attr('href', currentCat.attribution);
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
	
	// Update cat in focus
	currentCat = cats[i];
	catDisplay();

	// display both the buttons
	$('.next').removeClass('hide');
	$('.previous').removeClass('hide');
	
	// hide next button when end of array is reached
	if (i == (cats.length - 1)) {
		$('.next').addClass('hide');
	}

	// hide previous button when start of array is reached
	else if (i == 0) {
		$('.previous').addClass('hide');
	}
}