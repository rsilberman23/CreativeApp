let canvas;
let homeBool = true;
let historyBool = false;
let peopleBool = false;
let eventsBool = false;
let jobsBool = false;
let spotsBool = false;
let businessesBool = false;
let chatBool = false;
let titleImage;
let trainImage;
let pondImage;
let governorImage;
let calendarImage;
let jobsImage;
let cocoLuxeImage;
let cocoImage;
let cocoFoodImage;
let tavernImage;
let deliImage;
let marketImage;
let chatImage;
let historyImage;

function preload(){
	titleImage = loadImage('images/title.png');
	trainImage = loadImage('images/train.png');
	pondImage = loadImage('images/pond.png');
	governorImage = loadImage('images/governor.png');
	calendarImage = loadImage('images/calendar.png');
	jobsImage = loadImage('images/jobsImage.png');
	cocoLuxeImage = loadImage('images/cocoLuxe.png')
	cocoImage = loadImage('images/coco.png')
	cocoFoodImage = loadImage('images/cocoFood.png')
	tavernImage = loadImage('images/gladstoneTavern.png')
	deliImage = loadImage('images/gladstoneCornerDeli.png')
	marketImage = loadImage('images/gladstoneMarket.png')
	chatImage = loadImage('images/chat.png')
	historyImage = loadImage('images/history.png')

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  imageMode(CENTER);
  background(66, 135, 245);
  fill(255);

  //home Button
	homeButton = createButton("Home");
  homeButton.mousePressed(home);
  homeButton.position(windowWidth/2 - 520, windowHeight/2 - 210);
  homeButton.style("z-style", "1");
  homeButton.style('background-color', 'white');
  homeButton.style('border', '2px solid black');
  homeButton.style('border', '2px solid black');
  homeButton.style('width', '300px'); 
  homeButton.style('height', '50px'); 
  homeButton.style('font-size', '30px');


  //history Button
  historyButton = createButton("History");
  historyButton.mousePressed(history);
  historyButton.position(windowWidth/2 - 520, windowHeight/2 - 150);
  historyButton.style("z-style", "1");
  historyButton.style('background-color', 'white');
  historyButton.style('border', '2px solid black');
  historyButton.style('border', '2px solid black');
  historyButton.style('width', '300px'); 
  historyButton.style('height', '50px'); 
  historyButton.style('font-size', '30px');

  //people Button
  peopleButton = createButton("People");
  peopleButton.mousePressed(people);
  peopleButton.position(windowWidth/2 - 520, windowHeight/2 - 90);
  peopleButton.style("z-style", "1");
  peopleButton.style('background-color', 'white');
  peopleButton.style('border', '2px solid black');
  peopleButton.style('border', '2px solid black');
  peopleButton.style('width', '300px'); 
  peopleButton.style('height', '50px'); 
  peopleButton.style('font-size', '30px');

  //current events Button
  eventsButton = createButton("Event Calendar");
  eventsButton.mousePressed(events);
  eventsButton.position(windowWidth/2 - 520, windowHeight/2 - 30);
  eventsButton.style("z-style", "1");
  eventsButton.style('background-color', 'white');
  eventsButton.style('border', '2px solid black');
  eventsButton.style('border', '2px solid black');
  eventsButton.style('width', '300px'); 
  eventsButton.style('height', '50px'); 
  eventsButton.style('font-size', '30px');

  //job Opportunities Button
  jobsButton = createButton("Job Opportunities");
  jobsButton.mousePressed(jobs);
  jobsButton.position(windowWidth/2 - 520, windowHeight/2 + 30);
  jobsButton.style("z-style", "1");
  jobsButton.style('background-color', 'white');
  jobsButton.style('border', '2px solid black');
  jobsButton.style('border', '2px solid black');
  jobsButton.style('width', '300px'); 
  jobsButton.style('height', '50px'); 
  jobsButton.style('font-size', '30px');

  //hidden Spots Button
 	spotsButton = createButton("Hot Spots");
  spotsButton.mousePressed(spots);
  spotsButton.position(windowWidth/2 - 520, windowHeight/2 + 90);
  spotsButton.style("z-style", "1");
  spotsButton.style('background-color', 'white');
  spotsButton.style('border', '2px solid black');
  spotsButton.style('border', '2px solid black');
  spotsButton.style('width', '300px'); 
  spotsButton.style('height', '50px'); 
  spotsButton.style('font-size', '30px');

  //businesses Button
 	businessesButton = createButton("Businesses");
  businessesButton.mousePressed(businesses);
  businessesButton.position(windowWidth/2 - 520, windowHeight/2 + 150);
  businessesButton.style("z-style", "1");
  businessesButton.style('background-color', 'white');
  businessesButton.style('border', '2px solid black');
  businessesButton.style('border', '2px solid black');
  businessesButton.style('width', '300px'); 
  businessesButton.style('height', '50px'); 
  businessesButton.style('font-size', '30px');

  //chat Button
 	chatButton = createButton("Chat Room");
  chatButton.mousePressed(chat);
  chatButton.position(windowWidth/2 - 520, windowHeight/2 + 210);
  chatButton.style("z-style", "1");
  chatButton.style('background-color', 'white');
  chatButton.style('border', '2px solid black');
  chatButton.style('width', '300px'); 
  chatButton.style('height', '50px'); 
  chatButton.style('font-size', '30px');
}

function home(){
	homeBool = true;
	historyBool = false;
	peopleBool = false;
	eventsBool = false;
	jobsBool = false;
	spotsBool = false;
	businessesBool = false;
	chatBool = false;
	background(171, 235, 172);
	fill(252, 252, 252);
	// rect(windowWidth/2 - 290, windowHeight/2 - 250, 800, 600);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30);
	fill(0, 0, 0);
	text("Home Page", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(22);
	text("Your Gateway to All Things Gladstone, NJ!", windowWidth/2 - 150, windowHeight/2 - 120);
	textSize(15)
	text("Stay connected to everything happening in our beautiful town with just a few taps.", windowWidth/2 - 150, windowHeight/2 - 90);
	text("Whether you're a resident, business owner, or a visitor, Get-To-Know Gladstone", windowWidth/2 - 150, windowHeight/2 - 65);
	text("has all the information you need to make the most of our vibrant community.", windowWidth/2 - 150, windowHeight/2 - 40);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(pondImage, windowWidth/2 + 350, windowHeight/2 + 150, 400, 300)
}

function history(){
	homeBool = false;
	historyBool = true;
	peopleBool = false;
	eventsBool = false;
	jobsBool = false;
	spotsBool = false;
	businessesBool = false;
	chatBool = false;
	background(122, 172, 250);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("History of Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input history...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(historyImage, windowWidth/2 + 280, windowHeight/2 + 180, 600, 290)
}

function people(){
	homeBool = false;
	historyBool = false;
	peopleBool = true;
	eventsBool = false;
	jobsBool = false;
	spotsBool = false;
	businessesBool = false;
	chatBool = false;
	background(132, 211, 217);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Notable People of Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input people...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(governorImage, windowWidth/2 - 80, windowHeight/2, 150, 150)
	text("Governor of New Jersey: Phil Murphy", windowWidth/2 + 20, windowHeight/2 - 50);

}

function events(){
	homeBool = false;
	historyBool = false;
	peopleBool = false;
	eventsBool = true;
	jobsBool = false;
	spotsBool = false;
	businessesBool = false;
	chatBool = false;
	background(194, 158, 232);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Calendar of Current Events Happening in Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input events", windowWidth/2 - 150, windowHeight/2 - 120);
	text("below and include", windowWidth/2 - 150, windowHeight/2 - 95);
	text("link to respective", windowWidth/2 - 150, windowHeight/2 - 70);
	text("flyer...", windowWidth/2 - 150, windowHeight/2 - 45);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(calendarImage, windowWidth/2 + 290, windowHeight/2 + 90, 550, 450)
}

function jobs(){
	homeBool = false;
	historyBool = false;
	peopleBool = false;
	eventsBool = false;
	jobsBool = true;
	spotsBool = false;
	businessesBool = false;
	chatBool = false;
	background(252, 190, 131);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Job Opportunities in Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input job listings with links...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(jobsImage, windowWidth/2 + 200, windowHeight/2 + 100, 400, 400)

}

function spots(){
	homeBool = false;
	historyBool = false;
	peopleBool = false;
	eventsBool = false;
	jobsBool = false;
	spotsBool = true;
	businessesBool = false;
	chatBool = false;
	background(250, 143, 137);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Hot Spots in Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input hot spot of the week...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(cocoLuxeImage, windowWidth/2, windowHeight/2 - 50, 300, 100)
	image(cocoImage, windowWidth/2 + 380, windowHeight/2 - 10, 350, 300)
	image(cocoFoodImage, windowWidth/2 + 380, windowHeight/2 + 240, 350, 150)

	textSize(12)
	text("This holiday season, step into CocoLuxe Fine Pastries—", windowWidth/2 - 150, windowHeight/2 + 90);
	text("Gladstone’s sweetest destination for gourmet treats,", windowWidth/2 - 150, windowHeight/2 + 110);
	text("cozy ambiance, and festive cheer. Whether you're", windowWidth/2 - 150, windowHeight/2 + 130);
	text("craving delicate pastries, handcrafted chocolates, or", windowWidth/2 - 150, windowHeight/2 + 150);
	text("a warm cup of seasonal coffee, CocoLuxe offers a", windowWidth/2 - 150, windowHeight/2 + 170);
	text("delightful escape for friends, families, and visitors", windowWidth/2 - 150, windowHeight/2 + 190);
	text("alike. With the holidays around the corner, it's the", windowWidth/2 - 150, windowHeight/2 + 210);
	text("perfect spot to enjoy a festive afternoon or pick up ", windowWidth/2 - 150, windowHeight/2 + 230);
	text("unique holiday gifts and decadent desserts. Make", windowWidth/2 - 150, windowHeight/2 + 250);
	text("CocoLuxe your go-to destination to indulge, relax, and", windowWidth/2 - 150, windowHeight/2 + 270);
	text("savor the season!", windowWidth/2 - 150, windowHeight/2 + 290);

	textSize(14)
	text("Address: 161 Main St, Peapack, NJ 07977", windowWidth/2 - 150, windowHeight/2 + 30);
	text("Hours: 6:30AM - 4:00PM Daily", windowWidth/2 - 150, windowHeight/2 + 50);

}

function businesses(){
	homeBool = false;
	historyBool = false;
	peopleBool = false;
	eventsBool = false;
	jobsBool = false;
	spotsBool = false;
	businessesBool = true;
	chatBool = false;
	background(235, 164, 205);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Businesses in Gladstone", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Input businesses...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(tavernImage, windowWidth/2 - 50, windowHeight/2 - 30, 200, 100)
	textSize(15)
	text("Information about business...", windowWidth/2 + 60, windowHeight/2 - 60);
	image(deliImage, windowWidth/2 - 85, windowHeight/2 + 100, 120, 130)
	text("Information about business...", windowWidth/2 - 10, windowHeight/2 + 60);

	image(marketImage, windowWidth/2 - 70, windowHeight/2 + 230, 150, 100)
	text("Information about business...", windowWidth/2 + 20, windowHeight/2 + 200);
}

function chat(){
	homeBool = false;
	historyBool = false;
	peopleBool = false;
	eventsBool = false;
	jobsBool = false;
	spotsBool = false;
	businessesBool = false;
	chatBool = true;
	background(245, 222, 164);
	fill(252, 252, 252);
	rect(windowWidth/2 - 200, windowHeight/2 - 250, 800, 600);
	textSize(30)
	fill(0, 0, 0)
	text("Chat Room", windowWidth/2 - 150, windowHeight/2 - 190);
	textSize(20)
	text("Chat with your fellow Gladstonians through this chat room...", windowWidth/2 - 150, windowHeight/2 - 120);

	image(titleImage, windowWidth/2, windowHeight/2 - 300, 750, 180)
	image(chatImage, windowWidth/2 + 100, windowHeight/2 + 100, 500, 400)
	textSize(12)
	text("Note: The first chatbox is a direct message to the app creator team where suggestions for the", windowWidth/2 - 150, windowHeight/2 + 320);
	text("app can be sent and reviewed by the team.", windowWidth/2 - 115, windowHeight/2 + 335);
}

function draw(){
	if (historyBool == true){
		history();
	} else if(homeBool == true){
		home();
	} else if(peopleBool == true){
		people()
	} else if (eventsBool == true){
		events()
	} else if (jobsBool == true){
		jobs()
	} else if (spotsBool == true){
		spots()
	} else if (businessesBool == true){
		businesses()
	} else if (chatBool == true){
		chat()
	}
}

