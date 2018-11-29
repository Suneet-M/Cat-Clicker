# Cat Clicker
The app is hosted on github [here](https://suneet-m.github.io/Cat-Clicker/).

## Objective
Cat Clicker is a simple web app which shows you cute cat pictures and records your clicks on those cats.\
It doesn't have any real world application.\
It was just a way Udacity taught us (students) the **MVO** - Model, View, and Octopus nodes - way of writing code to create clean code and also teach us why a scalable code is always important for constantly changing spec requirements.

## Spec Requirements & Methodology
- I was first given a requirement of simply creating an app which displays a cat image and records the user's clicks on the cat.
- Then spec was changed to scale-up to two cat images and record clicks on both cats seperately.
	- I used an object implementation to store both cats seperately.
	- Stored them in a **cats** array and then pushing data to DOM when needed.
	- Implemented this method with the idea of easy scaling up capabililty.
- As expected the spec was increased to 5 cats and even display a list of the cat names.
	- Using seperate objects previously, helped with the scaling-up.
	- Only an addition of `<ul>` was required to the HTML.
	- Used .append to add list items with cat names.
	- Implemented common click event listener on the `<ul>` for all `<li>` items.
	- Styling was not necessary as per the spec so I added my own.
- Then they taught us the MOV way of writing cleaner code so I just simply seperated my code into those nodes.
- Still some code was overlapping between the nodes. For stricter segregation, I used an object for each node to contain data and methods.
- The teacher then gave a link to his repo for understanding his way of approach to this app and compare and update our own app.
- The spec was raised to create a pro version of the app which has an Admin mode wherein the admin can change the cats' data - their name, clicks and url.

## Dependencies
[Sass](http://sass-lang.com/) for easier css styling.\
[jQuery](https://jquery.com/) for added JS functionality.