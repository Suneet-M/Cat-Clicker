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
		},

		updateCat: function(name, url, clicks) {
			const cat = this.currentCat;
			cat.name = name;
			cat.src = url;
			cat.attribution = url;
			cat.clicks = clicks;
		}
	};


	/* =========== VIEW =========== */

	const view = {
		init: function(catList) {
			// Hide admin mode
			$('.admin').hide();

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
		},

		updateClicks: function () {
			const clicks = octopus.fetchCurrentCat().clicks;
			$('.counter').text(clicks);
		},

		adminMode: function() {
			const adminName = $('#name'),
				adminUrl = $('#url'),
				adminClicks = $("#clicks");

			$('.admin').show();

			// Submit user entered data to model though octopus
			$('.save-button').click(() => {
				const name = adminName.val(),
					url = adminUrl.val(),
					clicks = adminClicks.val();
				octopus.submitForm(name, url, clicks);
				$('.admin').hide();
			});
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
			$('.admin-button').click(view.adminMode);
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
			view.updateClicks();
		},

		// Change cat displayed
		changeCat: function(direction) {
			(direction == 'next') ? model.currentIndex += 1 : model.currentIndex -= 1;

			view.catDisplay();
		},

		submitForm: function (name, url, clicks) {
			model.updateCat(name, url, clicks);
			view.catDisplay();
		}
	};

	octopus.init(); // Start the app
})();