(function() {
	
	/* =========== MODEL =========== */

	const model = {
	// Array to hold all cats as objects
		cats: [
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
		],
		currentIndex: 0, // Index to select cat objects from cats array
		get currentCat() {
			return this.cats[this.currentIndex] // The cat obj to display
		}
	};


	/* =========== VIEW =========== */

	const view = {
		// Initialise app
		init: function(catList) {
			// Display cat list
			$.each(catList, function(index, value) {
				$('ul')
					.append($(`<li data-index="${index}">${value.name}</li>`));
			});
			// Display first cat
			this.catList = catList;
			view.catDisplay();
		},

		// Initiate cat obj properties
		catDisplay: function() {
			const cat = octopus.fetchCurrentCat();

			$('.cat-name').text(cat.name);
			$('.clicker img').attr('src', cat.src);
			$('.link').attr('href', cat.attribution);
			$('.counter').text(cat.clicks);

			this.i = octopus.fetchCurrentIndex();
			this.displayButtons();
			this.highlightListItem();
		},

		displayButtons: function() {
			// display both the buttons
			$('.next').show();
			$('.previous').show();

			// hide next button when end of array is reached
			if (this.i == (this.catList.length - 1)) {
				$('.next').hide();
			}

			// hide previous button when start of array is reached
			else if (this.i == 0) {
				$('.previous').hide();
			}
		},

		highlightListItem: function() {
			$('li').removeClass('hover');
			$(`li:nth-child(${this.i + 1})`).addClass('hover');
		}
	};


	/* =========== OCTOPUS =========== */

	var octopus = {
		init: function() {
			$('document').ready(view.init(model.cats));

			// Click listeners
			$('.clicker').click(this.counter);
			$('.next').click(() => this.changeCat('next'));
			$('.previous').click(() => this.changeCat('previous'));
			$('ul').click(function(e) {

				// To check if list item was clicked
				if(e.target.nodeName == 'LI') {

					// Fetch cat number and display
					model.currentIndex = parseInt(e.target.getAttribute('data-index'));
					view.catDisplay();
				}
			})
		},

		fetchCurrentCat: function() {
			return model.currentCat;
		},

		fetchCurrentIndex: function() {
			return model.currentIndex;
		},

		// Click counter
		counter: function() {
			model.currentCat.clicks += 1;
			$('.counter').text(model.currentCat.clicks);
		},

		// Change cat displayed
		changeCat: function(direction) {
			(direction == 'next') ? model.currentIndex += 1 : model.currentIndex -= 1;

			view.catDisplay();
		}
	};

	octopus.init();
})();