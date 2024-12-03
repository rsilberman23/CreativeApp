//Creative Industries

let canvas;
let historyBool = false:

function preload(){
	//gladstoneImage = loadImage('images/gladstone.png')

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  imageMode(CENTER);
  background(255, 124, 117);
  fill(255);

  //history Button
  historyButton = createButton("History");
  historyButton.mousePressed(history);
  historyButton.position(windowWidth/2 = historyButton.width / 2, windowHeight/2 - historyButton.height /2);
  historyButton.style("z-style", "1")

  //people Button

  //current events Button

  //job Opportunities Button

  //hidden Spots Button

  //businesses Button
}

function history(){
	historyButton.show();
	//hide rest of buttons
	historyBool = true;
	background(255, 124, 117);
	fill(252, 252, 252);
	stroke(0);
	strokeWeight(6);
	rect(windowWidth/2 - 635, windowHeight/2 - 270, 1270, 170);
	strokeWeight(1)
	textSize(70)
	fill(0, 0, 0)
	textAlign(CENTER)
	text("History of Gladstone", windowWidth/2, windowHeight/2 - 165);
	fill(252, 252, 252)
	strokeWeight(6)
	rect(windowWidth/2 - 635, windowHeight/2 - 85, 1270, 170);
	strokeWeight(1)
	textSize(38)
	fill(0, 0, 0)
	text("Input History...", windowWidth/2, windowHeight/2 + 10)
}

function people(){
	//copy outline of history func
}

function currentEvents(){
	//copy outline of history func
}

function jobOpps(){
	//copy outline of history func
}

function hiddenSpots(){
	//copy outline of history func
}

function businesses(){
	//copy outline of history func
}

function draw(){
	if (historyBool == true){
		history();
	}
	// rest of Bools
}

class GladstoneData{
	constructor(title, history, people, currentEvents, jobOpps, hiddenSpots, businesses){
		this.title = title;
		this.history = history;
		this.people = people;
		this.currentEvents = currentEvents;
		this.jobOpps = jobOpps;
		this.hiddenSpots = hiddenSpots;
		this.businesses = businesses;

		this.button = createButton(this.title)

		for(let i = -1; i < movieDataArray.length; i++){
      		this.button.position(windowWidth/2 - 490, i*25+ windowHeight/2 - 90); 
	}
	this.button.style('z-index', '1');
	this.button.hide()

}

show(){
	this.button.show()
	this.button.mousePressed(() => this.update());
}

hideButtons(){
	this.button.hide();
}

update(){
	//form this function
}

















